const express = require("express")

const Clients = require("../../models/Main/Clients")
const verifyToken = require("../../verifyToken")

const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/clients')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await Clients.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken, upload.single("image"), async (req, res) => {
    try {
        var data = new Clients(req.body)
        data.createDate = new Date()
        if (req.file)
            data.image = req.file.filename
        await data.save()
        res.send({ result: "Done", message: "Clients  is Created!!!", data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await Clients.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "Clients  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, upload.single("image"), async (req, res) => {
    try {
        var data = await Clients.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            try {
                if (req.file && data.image)
                    fs.unlinkSync("public/clients/" + data.image)
                data.image = req.file.filename ?? data.image
            }
            catch (error) { }
            data.updateDate = new Date()
            data.updateById = req.body.updateById ?? data.updateById
            data.sortOrder = req.body.sortOrder ?? data.sortOrder
            data.updateByName = req.body.updateByName ?? data.updateByName
            data.updateByRole = req.body.updateByRole ?? data.updateByRole
            data.status = req.body.status ?? data.status
            data.remark = req.body.remark ?? data.remark
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else {
            res.status(404).send({ result: "Fail", message: "Clients not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await Clients.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "Clients is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Clients  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router