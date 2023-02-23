const express = require("express")

const Center = require("../../models/Main/Center")
const verifyToken = require("../../verifyToken")

const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/center')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await Center.find().sort({sortOrder:1})
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken, upload.single('featureimage'), async (req, res) => {
    try {
        var data = new Center(req.body)
        data.createDate = new Date()
        try {
            data.featureimage = req.file.filename
        } catch (error) { }
        await data.save()
        res.send({ result: "Done", message: "Center  is Created!!!", data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await Center.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "Center  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, upload.single('featureimage'), async (req, res) => {
    try {
        var data = await Center.findOne({ _id: req.params._id })
        if (data) {
            data.title = req.body.title ?? data.title
            data.seourl = req.body.seourl ?? data.seourl
            data.description = req.body.description ?? data.description
            data.metatitle = req.body.metatitle ?? data.metatitle
            data.metakeywords = req.body.metakeywords ?? data.metakeywords
            data.metadescrption = req.body.metadescrption ?? data.metadescrption
            data.metadesection = req.body.metadesection ?? data.metadesection
            data.headcss = req.body.headcss ?? data.headcss
            data.footercss = req.body.footercss ?? data.footercss
            data.headjs = req.body.headjs ?? data.headjs
            data.foterjs = req.body.foterjs ?? data.foterjs
            data.updateDate = new Date()
            data.updateById = req.body.updateById ?? data.updateById
            data.updateByName = req.body.updateByName ?? data.updateByName
            data.updateByRole = req.body.updateByRole ?? data.updateByRole
            data.status = req.body.status ?? data.status
            data.sortOrder = req.body.sortOrder ?? data.sortOrder
            data.remark = req.body.remark ?? data.remark
            try {
                if (req.file && data.featureimage)
                    fs.unlinkSync("public/center/" + data.featureimage)
                data.featureimage = req.file.filename ?? data.featureimage
            }
            catch (error) { }
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else {
            res.status(404).send({ result: "Fail", message: "Center not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await Center.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "Center is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Center  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router
