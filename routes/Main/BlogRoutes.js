const express = require("express")
const Blog = require("../../models/Main/Blog")
const verifyToken = require("../../verifyToken")

const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/blog')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await Blog.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken, upload.fields([
    { name: "image", maxCount: 1 },
    { name: "featureimage", maxCount: 1 }
]), async (req, res) => {
    try {
        var data = new Blog(req.body)
        data.createDate = new Date()
        try {
            data.image = req.files.image[0].filename
        } catch (error) { }
        try {
            data.featureimage = req.files.featureimage[0].filename
        } catch (error) { }
        await data.save()
        res.send({ result: "Done", message: "Blog  is Created!!!",data:data})
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await Blog.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "Blog  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken, upload.fields([
    { name: "image", maxCount: 1 },
    { name: "featureimage", maxCount: 1 }]), async (req, res) => {
        try {
            var data = await Blog.findOne({ _id: req.params._id })
            if (data) {
                data.title = req.body.title ?? data.title
                data.blogcategory = req.body.blogcategory ?? data.blogcategory
                data.seourl = req.body.seourl ?? data.seourl
                data.shortdescription = req.body.shortdescription ?? data.shortdescription
                data.longdescription = req.body.longdescription ?? data.longdescription
                data.metatitle = req.body.metatitle ?? data.metatitle
                data.metakeywords = req.body.metakeywords ?? data.metakeywords
                data.metadescrption = req.body.metadescrption ?? data.metadescrption
                data.metadesection = req.body.metadesection ?? data.metadesection
                data.headcss = req.body.headcss ?? data.headcss
                data.footercss = req.body.footercss ?? data.footercss
                data.headjs = req.body.headjs ?? data.headjs
                data.foterjs = req.body.foterjs ?? data.foterjs
                data.updateDate = new Date()
                data.updateById = req.body.updateById ?? data.updateById
                data.updateByName = req.body.updateByName ?? data.updateByName
                data.updateByRole = req.body.updateByRole ?? data.updateByRole
                data.status = req.body.status ?? data.status
                data.remark = req.body.remark ?? data.remark
                data.sortOrder = req.body.sortOrder ?? data.sortOrder
                try {
                    if (req.file && data.image)
                        fs.unlinkSync("public/blog/" + data.image)
                    data.image = req.files.image[0].filename
                } catch (error) { }
                try {
                    if (req.file && data.featureimage)
                        fs.unlinkSync("public/blog/" + data.featureimage)
                    data.featureimage = req.files.featureimage[0].filename
                } catch (error) { }
                await data.save()
                res.send({ result: "Done", message: "Record is Updated!!!", data: data })
            }
            else {
                if (error.keyValue)
                    res.status(400).send({ result: "Fail", message: "Blog  Name Must Be Unique!!!" })
                else
                    res.status(404).send({ result: "Fail", message: "Blog  not Found!!!" })
            }
        }
        catch (error) {
            res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
        }
    })
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await Blog.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "Blog is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Blog  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router