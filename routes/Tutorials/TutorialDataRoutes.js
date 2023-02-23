const express = require("express")

const TutorialData = require("../../models/Tutorials/TutorialData")
const verifyToken = require("../../verifyToken")

const router = express.Router()


router.get("/", async (req, res) => {
    try {
        var data = await TutorialData.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken, async (req, res) => {
    try {
        let data = new TutorialData(req.body)
        data.createDate = new Date()
        await data.save()
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await TutorialData.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "User Record not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await TutorialData.findOne({ _id: req.params._id })
        if (data) {
            data.technology = req.body.technology ?? data.technology
            data.topic = req.body.topic ?? data.topic
            data.content = req.body.content ?? data.content
            data.sortOrder = req.body.sortOrder ?? data.sortOrder
            data.updateByName = req.body.updateByName ?? data.updateByName
            data.updateById = req.body.updateById ?? data.updateById
            data.updateByRole = req.body.updateByRole ?? data.updateByRole
            data.status = req.body.status ?? data.status
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
        var data = await TutorialData.findOne({ _id: req.params._id })
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