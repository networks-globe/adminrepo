const express = require("express")

const Service = require("../../models/Main/Service")
const verifyToken = require("../../verifyToken")

const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/service')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await Service.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken, upload.single("image"), async (req, res) => {
    try {
        var data = new Service(req.body)
        data.createDate = new Date()
        try {
            data.image = req.file.filename
        } catch (error) { }
        await data.save()
        res.send({ result: "Done", message: "Service  is Created!!!", data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await Service.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "Service  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, upload.single("image"), async (req, res) => {
    try {
        var data = await Service.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.description = req.body.description ?? data.description
            data.sortOrder = req.body.sortOrder ?? data.sortOrder
            data.updateDate = new Date()
            data.updateByRole = req.body.updateByRole ?? data.updateByRole
            data.updateByName = req.body.updateByName ?? data.updateByName
            data.updateById = req.body.updateById ?? data.updateById
            data.status = req.body.status ?? data.status
            data.reamrk = req.body.reamrk ?? data.reamrk
            try {
                if (req.file && data.image)
                    fs.unlinkSync("public/service/" + data.image)
                if(req.file)
                data.image = req.file.filename
            }
            catch (error) {
            }
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else {
            res.status(404).send({ result: "Fail", message: "Service not Found!!!" })
        }
    }
    catch (error) {
        console.log("Hello World9");
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await Service.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "Service is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Service  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router