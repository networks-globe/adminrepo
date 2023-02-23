const express = require("express")

const BlogCategory = require("../../models/Main/BlogCategory")
const verifyToken = require("../../verifyToken")

const fs = require("fs")
const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/blog-category')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})
const upload = multer({ storage: storage })

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        var data = await BlogCategory.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken,upload.single("image"), async (req, res) => {
    try {
        var data = new BlogCategory(req.body)
        data.createDate = new Date()
        if(req.file)
        data.image = req.file.filename
        await data.save()
        res.send({ result: "Done", message: "BlogCategory  is Created!!!",data:data})
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id", async (req, res) => {
    try {
        var data = await BlogCategory.findOne({ _id: req.params._id })
        if (data)
            res.send({ result: "Done", data: data })
        else
            res.status(404).send({ result: "Fail", message: "BlogCategory  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.put("/:_id",verifyToken,upload.single("image"), async (req, res) => {
    try {
        var data = await BlogCategory.findOne({ _id: req.params._id })
        if (data) {
            data.title = req.body.title ?? data.title
            data.seourl = req.body.seourl ?? data.seourl
            data.description = req.body.description ?? data.description
            data.banner = req.body.banner ?? data.banner
            data.metatitle = req.body.metatitle ?? data.metatitle
            data.metakeywords = req.body.metakeywords ?? data.metakeywords
            data.metadescrption = req.body.metadescrption ?? data.metadescrption
            data.metasection = req.body.metasection ?? data.metasection
            data.updateDate = new Date()
            data.updateById = req.body.updateById ?? data.updateById
            data.updateByName = req.body.updateByName ?? data.updateByName
            data.updateByRole = req.body.updateByRole ?? data.updateByRole
            data.status = req.body.status ?? data.status
            data.remark = req.body.remark ?? data.remark
            try {
                if (req.file && data.image)
                    fs.unlinkSync("public/blog-category/" + data.image)
                data.image = req.file.filename ?? data.image
            }
            catch (error) { }
            await data.save()
            res.send({ result: "Done", message: "Record is Updated!!!", data: data })
        }
        else {
            if (error.keyValue)
                res.status(400).send({ result: "Fail", message: "BlogCategory  Name Must Be Unique!!!" })
            else
                res.status(404).send({ result: "Fail", message: "BlogCategory  not Found!!!" })
        }
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.delete("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await BlogCategory.findOne({ _id: req.params._id })
        if (data) {
            await data.delete()
            res.send({ result: "Done", message: "BlogCategory is Deleted!!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "BlogCategory  not Found!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
module.exports = router