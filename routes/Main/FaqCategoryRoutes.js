const express = require("express")

const FaqCategory = require("../../models/Main/FaqCategory")
const verifyToken = require("../../verifyToken")

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await FaqCategory.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken, async (req, res) => {
    try {
        var data = new FaqCategory(req.body)
        data.createDate = new Date()
        await data.save()
        res.send({ result: "Done", message: "FaqCategory  is Created!!!", data: data })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await FaqCategory.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "FaqCategory  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await FaqCategory.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.sortOrder = req.body.sortOrder ?? data.sortOrder
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
            res.status(404).send({ result: "Fail", message: "FaqCategory not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await FaqCategory.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "FaqCategory is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "FaqCategory  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router