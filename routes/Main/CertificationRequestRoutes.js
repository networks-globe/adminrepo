const express = require("express")

const CertificationRequest = require("../../models/Main/CertificationRequest")
const verifyToken = require("../../verifyToken")

const Configration = require("../../models/Main/Configration")
const transporter = require("../../sendMail")

const router = express.Router()

router.get("/",verifyToken, async (req, res) => {
    try {
        var data = await CertificationRequest.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/", async (req, res) => {
    try {
        var data = new CertificationRequest(req.body)
        data.createDate = new Date()
        await data.save()

        var mailAccount =await Configration.findOne()
        mailOption = {
            from: process.env.FROM,
            to: mailAccount.mailCertificate,
            subject: "New Certificate Request Received!!! : Ducat India",
            text: `
                        Name : ${req.body.name}
                        Email : ${req.body.email}
                        Phone : ${req.body.phone}
                        Course : ${req.body.course}
                        Branch : ${req.body.center}
                        Faculty : ${req.body.faculty}
                        Ducat Id : ${req.body.ducatId}
                        From Date : ${req.body.from}
                        To Date : ${req.body.toDate}
                    `
        }
        transporter.sendMail(mailOption, (error, data) => {
            if (error)
                console.log(error);
        })
        res.send({ result: "Done", message: "CertificationRequest  is Created!!!",data:data})
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await CertificationRequest.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "CertificationRequest  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await CertificationRequest.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.email = req.body.email ?? data.email
            data.phone = req.body.phone ?? data.phone
            data.course = req.body.course ?? data.course
            data.center = req.body.center ?? data.center
            data.faculty = req.body.faculty ?? data.faculty
            data.ducatId = req.body.ducatId ?? data.ducatId
            data.from = req.body.from ?? data.from
            data.toDate = req.body.toDate ?? data.toDate
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
            res.status(404).send({ result: "Fail", message: "CertificationRequest not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await CertificationRequest.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "CertificationRequest is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "CertificationRequest  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router