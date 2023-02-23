const express = require("express")

const ApplyForJob = require("../../models/Main/ApplyForJob")
const Configration = require("../../models/Main/Configration")
const transporter = require("../../sendMail")

const verifyToken = require("../../verifyToken")


const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/resume')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })

const router = express.Router()

router.get("/", verifyToken, async (req, res) => {
    try {
        var data = await ApplyForJob.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/", upload.single('resume'), async (req, res) => {
    try {
        var data = new ApplyForJob(req.body)
        data.createDate = new Date()
        try {
            data.resume = req.file.filename
        } catch (error) { }
        await data.save()

        var mailAccount =await Configration.findOne()
        mailOption = {
            from: process.env.FROM,
            to: mailAccount.mailHr,
            cc:mailAccount.mailMain,
            subject: "New Query Received!!! : Ducat India",
            text: `
                        Name : ${req.body.name}
                        Email : ${req.body.email}
                        Phone : ${req.body.phone}
                        Course : ${req.body.course}
                        Branch : ${req.body.center}
                        Job Type : ${req.body.jobType}
                        Linkedin Profile : ${req.body.linkedinProfile}
                        About Candidate  :   ${req.body.aboutYourself}
                        About Course : ${req.body.aboutCourse}
                    `
        }
        transporter.sendMail(mailOption, (error, data) => {
            if (error)
                console.log(error);
        })
        res.send({ result: "Done", message: "Record is Created!!!", data: data })
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", verifyToken, async (req, res) => {
    try {
        var data = await ApplyForJob.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "Record  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id", verifyToken, upload.single('resume'), async (req, res) => {
    try {
        var data = await ApplyForJob.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.email = req.body.email ?? data.email
            data.phone = req.body.phone ?? data.phone
            data.course = req.body.course ?? data.course
            data.center = req.body.center ?? data.center
            data.jobtype = req.body.jobtype ?? data.jobtype
            data.linkedinProfile = req.body.linkedinProfile ?? data.linkedinProfile
            data.aboutYourself = req.body.aboutYourself ?? data.aboutYourself
            data.aboutCourse = req.body.aboutCourse ?? data.aboutCourse
            data.updateDate = new Date()
            data.updateByRole = req.body.updateByRole ?? data.updateByRole
            data.updateByName = req.body.updateByName ?? data.updateByName
            data.updateById = req.body.updateById ?? data.updateById
            data.status = req.body.status ?? data.status
            data.reamrk = req.body.reamrk ?? data.reamrk
            try {
                if (req.file && data.resume)
                    fs.unlinkSync("public/resume/" + data.resume)
                data.resume = req.file.filename ?? data.resume
            }
            catch (error) { }
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else {
            res.status(404).send({ result: "Fail", message: "Record not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id", verifyToken, async (req, res) => {
    try {
        var data = await ApplyForJob.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "Record is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Record  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router