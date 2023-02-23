const express = require("express")
const Testimonial = require("../../models/Main/Testimonials")
const verifyToken = require("../../verifyToken")

const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/testimonial')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await Testimonial.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken, upload.single("image"), async (req, res) => {
    try {
        var data = new Testimonial(req.body)
        data.createDate = new Date()
        try {
            data.image = req.file.filename
        } catch (error) { }
        await data.save()
        res.send({ result: "Done", message: "Testimonial  is Created!!!", data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await Testimonial.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "Testimonial  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, upload.single("image"), async (req, res) => {
    try {
        var data = await Testimonial.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.email = req.body.email ?? data.email
            data.phone = req.body.phone ?? data.phone
            data.course = req.body.course ?? data.course
            data.profile = req.body.profile ?? data.profile
            data.city = req.body.city ?? data.city
            data.country = req.body.country ?? data.country
            data.state = req.body.state ?? data.state
            data.message = req.body.message ?? data.message
            data.type = req.body.type ?? data.type
            data.updateDate = new Date()
            data.updateByRole = req.body.updateByRole ?? data.updateByRole
            data.updateByName = req.body.updateByName ?? data.updateByName
            data.updateById = req.body.updateById ?? data.updateById
            data.status = req.body.status ?? data.status
            data.reamrk = req.body.reamrk ?? data.reamrk
            try {
                if (req.file && data.image)
                    fs.unlinkSync("public/testimonial/" + data.image)
                data.image = req.file.filename ?? data.image
            }
            catch (error) { }
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else {
            res.status(404).send({ result: "Fail", message: "Testimonial not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await Testimonial.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "Testimonial is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Testimonial  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router