const express = require("express")

const Technology = require("../../models/Tutorials/Technology")
const verifyToken = require("../../verifyToken")


const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/technology')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })
const router = express.Router()


router.get("/", async (req, res) => {
    try {
        var data = await Technology.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken, upload.single("logo"), async (req, res) => {
    try {
        let data = new Technology(req.body)
        data.createDate = new Date()
        if (req.file)
            data.logo = req.file.filename
        await data.save()
        res.send({ result: "Done", message: "Technology is Created!!!", data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await Technology.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "User Record not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, upload.single("logo"), async (req, res) => {
    try {
        var data = await Technology.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            try {
                if (req.file && data.logo)
                    fs.unlinkSync("public/clients/" + data.logo)
                data.logo = req.file.filename
            }
            catch (error) { }
            data.sortOrder = req.body.sortOrder ?? data.sortOrder
            data.remark = req.body.remark ?? data.remark
            data.updateByName = req.body.updateByName ?? data.updateByName
            data.updateById = req.body.updateById ?? data.updateById
            data.updateByRole = req.body.updateByRole ?? data.updateByRole
            data.updateDate = new Date()
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else
            res.status(404).send({ result: "Fail", message: "User Record not Found!!!" })
    }
    catch (error) {
        if (error.keyValue)
            res.status(400).send({ result: "Fail", message: "Email Must Be Unique!!!" })
        else
            res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await Technology.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "Account is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "User Record not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router