const express = require("express")

const PlacedStudents = require("../../models/Placement/PlacedStudents")
const verifyToken = require("../../verifyToken")

const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/placedStudents')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await PlacedStudents.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken,upload.single("image"), async (req, res) => {
    try {
        var data = new PlacedStudents(req.body)
        data.createDate = new Date()
        try{
            data.image =  req.file.filename
        }catch(error){}
        await data.save()
        res.send({ result: "Done", message: "PlacedStudents  is Created!!!", data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await PlacedStudents.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "PlacedStudents  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken,upload.single("image"), async (req, res) => {
    try {
        var data = await PlacedStudents.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.email = req.body.email ?? data.email
            data.phone = req.body.phone ?? data.phone
            data.course = req.body.course ?? data.course
            data.ducatId = req.body.ducatId ?? data.ducatId
            data.company = req.body.company ?? data.company
            data.package = req.body.package ?? data.package
            data.role = req.body.role ?? data.role     
            try {
                if (req.file && data.image)
                    fs.unlinkSync("public/placedStudents/" + data.image)
                data.image = req.file.filename ?? data.image
            }
            catch (error) { 
            }
            data.updateDate = new Date()
            data.updateById = req.body.updateById ?? data.updateById
            data.updateByName = req.body.updateByName ?? data.updateByName
            data.updateByRole = req.body.updateByRole ?? data.updateByRole
            data.status = req.body.status ?? data.status
            data.remark = req.body.remark ?? data.remark
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else {
            res.status(404).send({ result: "Fail", message: "PlacedStudents not Found!!!" })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await PlacedStudents.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "PlacedStudents is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "PlacedStudents  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router