const express = require("express")

const Drive = require("../../models/Placement/Drive")
const verifyToken = require("../../verifyToken")

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await Drive.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken, async (req, res) => {
    try {
        var data = new Drive(req.body)
        data.createDate = new Date()
        await data.save()
        res.send({ result: "Done", message: "Drive  is Created!!!", data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await Drive.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "Drive  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await Drive.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.startDate = req.body.startDate ?? data.startDate
            data.startTime = req.body.startTime ?? data.startTime
            data.technology = req.body.technology ?? data.technology
            data.company = req.body.company ?? data.company
            data.profile = req.body.profile ?? data.profile
            data.experience = req.body.experience ?? data.experience
            data.qualification = req.body.qualification ?? data.qualification
            data.contactPerson = req.body.contactPerson ?? data.contactPerson
            data.contactNumber = req.body.contactNumber ?? data.contactNumber
            data.location = req.body.location ?? data.location
            data.skills = req.body.skills ?? data.skills
            data.venu = req.body.venu ?? data.venu
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
            res.status(404).send({ result: "Fail", message: "Drive not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await Drive.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "Drive is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Drive  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router