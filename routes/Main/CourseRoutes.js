const express = require("express")
const Course = require("../../models/Main/Course")
const verifyToken = require("../../verifyToken")

const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/course')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await Course.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken, upload.fields([
    { name: "image", maxCount: 1 },
    { name: "cover", maxCount: 1 },
    { name: "pdf", maxCount: 1 },
]), async (req, res) => {
    try {
        var data = new Course(req.body)
        data.content = JSON.parse(req.body.content)
        data.topics = JSON.parse(req.body.topics)
        data.createDate = new Date()
        try {
            data.image = req.files.image[0].filename
        } catch (error) { }
        try {
            data.cover = req.files.cover[0].filename
        } catch (error) { }
        try {
            data.pdf = req.files.pdf[0].filename
        } catch (error) { }

        await data.save()

        res.send({ result: "Done", message: "Course  is Created!!!", data: data })
    } catch (error) {
        console.log(error);
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await Course.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "Course  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, upload.fields([
    { name: "image", maxCount: 1 },
    { name: "cover", maxCount: 1 },
    { name: "pdf", maxCount: 1 },
]), async (req, res) => {
    try {
        var data = await Course.findOne({ _id: req.params._id })
        if (data) {
            data.title = req.body.title ?? data.title
            data.seourl = req.body.seourl ?? data.seourl
            data.subtitle = req.body.subtitle ?? data.subtitle
            data.courseCategory = req.body.courseCategory ?? data.courseCategory
            data.description = req.body.description ?? data.description
            data.content = JSON.parse(req.body.content)??data.content
            data.topics = JSON.parse(req.body.topics)??data.topics
            data.branch = req.body.branch ?? data.branch
            data.seotitle = req.body.seotitle ?? data.seotitle
            data.metakeywords = req.body.metakeywords ?? data.metakeywords
            data.metadescrption = req.body.metadescrption ?? data.metadescrption
            data.metasection = req.body.metasection ?? data.metasection
            data.headcss = req.body.headcss ?? data.headcss
            data.headjs = req.body.headjs ?? data.headjs
            data.footercss = req.body.footercss ?? data.footercss
            data.footerjs = req.body.footerjs ?? data.footerjs
            data.fromemail = req.body.fromemail ?? data.fromemail
            data.updateDate = new Date()
            data.updateById = req.body.updateById ?? data.updateById
            data.updateByName = req.body.updateByName ?? data.updateByName
            data.updateByRole = req.body.updateByRole ?? data.updateByRole
            data.status = req.body.status ?? data.status
            data.remark = req.body.remark ?? data.remark
            data.redirectUrl = req.body.redirectUrl ?? data.redirectUrl
            data.sortOrder = req.body.sortOrder ?? data.sortOrder
            data.popular = req.body.popular ?? data.popular

            try {
                if (req.files.image && data.image)
                    try{fs.unlinkSync("./public/course/" + data.image)}catch(error){}
                data.image = req.files.image[0].filename
            } catch (error) { }
            try {
                if (req.files.cover && data.cover)
                try{fs.unlinkSync("./public/course/" + data.cover)}catch(error){}
                data.cover = req.files.cover[0].filename
            } catch (error) { }
            try {
                if (req.files.pdf && data.pdf)
                try{fs.unlinkSync("./public/course/" + data.pdf)}catch(error){}
                data.pdf = req.files.pdf[0].filename
            } catch (error) { }
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else {
            if (error.keyValue)
                res.status(400).send({ result: "Fail", message: "Course  Name Must Be Unique!!!" })
            else
                res.status(404).send({ result: "Fail", message: "Course  not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await Course.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "Course is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Course  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router