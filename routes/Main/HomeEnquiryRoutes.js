const express = require("express")

const HomeEnquiry = require("../../models/Main/HomeEnquiry")
const verifyToken = require("../../verifyToken")

const Configration = require("../../models/Main/Configration")
const transporter = require("../../sendMail")

const router = express.Router()

router.get("/",verifyToken, async (req, res) => {
    try {
        var data = await HomeEnquiry.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/", async (req, res) => {
    try {
        var data = new HomeEnquiry(req.body)
        data.createDate = new Date()
        await data.save()

        var mailAccount =await Configration.findOne()
        mailOption = {
            from: process.env.FROM,
            to: mailAccount.mailEnquiry,
            subject: "New Enquiry Received!!! : Ducat India",
            text: `
                        Name : ${req.body.name}
                        Email : ${req.body.email}
                        Phone : ${req.body.phone}
                        Course : ${req.body.course}
                        Branch : ${req.body.center}
                    `
        }
        transporter.sendMail(mailOption, (error, data) => {
            if (error)
                console.log(error);
        })
        res.send({ result: "Done", message: "HomeEnquiry  is Created!!!", data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await HomeEnquiry.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "HomeEnquiry  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await HomeEnquiry.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.phone = req.body.phone ?? data.phone
            data.email = req.body.email ?? data.email
            data.course = req.body.course ?? data.course
            data.center = req.body.center ?? data.center
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
            res.status(404).send({ result: "Fail", message: "HomeEnquiry not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await HomeEnquiry.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "HomeEnquiry is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "HomeEnquiry  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router