const express = require("express")

const StudentRegistration = require("../../models/Placement/StudentRegistration")
const verifyToken = require("../../verifyToken")

const router = express.Router()

router.get("/",verifyToken, async (req, res) => {
    try {
        var data = await StudentRegistration.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/", async (req, res) => {
    try {
        var data = new StudentRegistration(req.body)
        data.createDate = new Date()
        await data.save()
        res.send({ result: "Done", message: "StudentRegistration  is Created!!!", data: data })
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await StudentRegistration.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "StudentRegistration  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await StudentRegistration.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.email = req.body.email ?? data.email
            data.phone = req.body.phone ?? data.phone
            data.course = req.body.course ?? data.course
            data.ducatId = req.body.ducatId ?? data.ducatId
            data.tenth = req.body.tenth ?? data.tenth
            data.twelvth = req.body.twelvth ?? data.twelvth
            data.graduation = req.body.graduation ?? data.graduation
            data.postgraducation = req.body.postgraducation ?? data.postgraducation
            data.qualification = req.body.qualification ?? data.qualification
            data.passwordYear = req.body.passwordYear ?? data.passwordYear
            data.center = req.body.center ?? data.center
            data.trainer = req.body.trainer ?? data.trainer
            data.completeYar = req.body.completeYar ?? data.completeYar
            data.completeMonth = req.body.completeMonth ?? data.completeMonth
            data.college = req.body.college ?? data.college    
            data.isAbove60 = req.body.isAbove60 ?? data.isAbove60        
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
            res.status(404).send({ result: "Fail", message: "StudentRegistration not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await StudentRegistration.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "StudentRegistration is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "StudentRegistration  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router