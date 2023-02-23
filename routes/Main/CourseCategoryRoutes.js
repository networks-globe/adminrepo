const express = require("express")
const CourseCategory = require("../../models/Main/CourseCategory")
const verifyToken = require("../../verifyToken")


const router = express.Router()
const jwt = require("jsonwebtoken")

const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/courseCategory')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })

router.get("/", async (req, res) => {
    try {
        var data = await CourseCategory.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken,upload.single("logo"), async (req, res) => {
    try {
        var data = new CourseCategory(req.body)
        if (req.file)
        data.logo = req.file.filename
        data.createDate = new Date()
        await data.save()
        res.send({ result: "Done", message: "Course Maincategory is Created!!!",data:data})
    } catch (error) {
            res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await CourseCategory.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "Course Maincategory not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken,upload.single("logo"), async (req, res) => {
    try {
        var data = await CourseCategory.findOne({ _id: req.params._id })
        if (data) {
            try {
                if (req.file && data.logo)
                    fs.unlinkSync("public/courseCategory/" + data.logo)
                data.logo = req.file.filename ?? data.logo
            }
            catch (error) { }
            data.name = req.body.name ?? data.name
            data.status = req.body.status ?? data.status
            data.remark = req.body.remark ?? data.remark
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
            res.status(404).send({ result: "Fail", message: "Course Maincatgory not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await CourseCategory.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "Course Maincategory is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Course Maincategory not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router