const express = require("express")
const bcrypt = require("bcrypt")
const passwordValidator = require("password-validator")
const jwt = require("jsonwebtoken")

const transporter = require("../../sendMail")

const User = require("../../models/Main/User")
const verifyToken = require("../../verifyToken")


const router = express.Router()
var schema = new passwordValidator();
schema
    .is().min(8)                                    // Minimum length 8
    .is().max(100)                                  // Maximum length 100
    .has().uppercase(1)                              // Must have uppercase letters
    .has().lowercase(1)                              // Must have lowercase letters
    .has().digits(1)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces
    .is().not().oneOf(['Password@123', 'Password123', "Admin@123", "Admin123"]); // Blacklist these values


router.get("/",verifyToken, async (req, res) => {
    try {
        var data = await User.find()
        res.send({ result: "Done", data: data })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.post("/",verifyToken, async (req, res) => {
    try {
        let data = new User(req.body)
        data.createDate = new Date()
        if (schema.validate(data.password)) {
            bcrypt.hash(data.password, 12, async (error, hash) => {
                data.password = hash
                try {
                    await data.save()
                    res.send({ result: "Done", message: "User Account is Created!!!",data:data})
                }
                catch (error) {
                    if (error.keyValue)
                        res.status(400).send({ result: "Fail", message: "Email Must Be Unique!!!" })
                    else if (error.errors.name)
                        res.status(400).send({ result: "Fail", message: error.errors.name.message })
                    else if (error.errors.phone)
                        res.status(400).send({ result: "Fail", message: error.errors.phone.message })
                    else if (error.errors.email)
                        res.status(400).send({ result: "Fail", message: error.errors.email.message })
                    else if (error.errors.password)
                        res.status(400).send({ result: "Fail", message: error.errors.password.message })
                    else
                        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
                }
            })
        }
        else
            res.status(500).send({ result: "Fail", message: "Invalid Password!!! Password Length must be 8 Characters, Must Contains atleast 1 Upper Case Character, Must Contains Atleast 1 Lower Case Character, Must Contains atleast 1 Digit" })
    } catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!!" })
    }
})
router.get("/:_id",verifyToken, async (req, res) => {
    try {
        var data = await User.findOne({ _id: req.params._id })
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
        var data = await User.findOne({ _id: req.params._id })
        if (data) {
            data.name = req.body.name ?? data.name
            data.email = req.body.email ?? data.email
            data.phone = req.body.phone ?? data.phone
            data.role = req.body.role ?? data.role
            data.ability = req.body.ability ?? data.ability
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
        var data = await User.findOne({ _id: req.params._id })
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
router.post("/login", async (req, res) => {
    try {
        const data = await User.findOne({ email: req.body.email })
        if (data) {
            if (await bcrypt.compare(req.body.password, data.password)) {
                jwt.sign({ data }, process.env.JSONTOKENKEY, async (error, token) => {
                    res.send({ result: "Done", data:{
                        userData:data,
                        accessToken:token,
                        refreshToken:token
                    }})
                })
            }
            else
                res.status(401).send({ result: "Fail", message: "Invalid User Id or Password" })
        }
        else
            res.send({ result: "Fail", message: "Invalid User Id or Password" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error or User not Found" })
    }
})

router.post("/reset-email", async (req, res) => {
    try {
        var data = await User.findOne({ email: req.body.email })
        if (data) {
            let otp = parseInt(Math.random() * 1000000)
            data.otp = otp
            await data.save()
            mailOption = {
                from: process.env.FROM,
                to: data.email,
                subject: "OTP for Password Reset !!! : Ducat India",
                text: `
                            OTP for Password Reset is ${otp}
                        `
            }
            transporter.sendMail(mailOption, (error, data) => {
                if (error)
                    console.log(error);
            })
            res.send({ result: "Done", message: "OTP is Sent on Your Registered Email Id!!" })
        }
        else
            res.status(404).send({ result: "Fail", message: "Invalid Email Address!!" })
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ result: "Fail", message: "Internal Server Error!!" })
    }
})
router.post("/reset-otp", async (req, res) => {
    try {
        var data = await User.findOne({ email: req.body.email })
        if (data) {
            if (data.otp == req.body.otp)
                res.send({ result: "Done" })
            else
                res.status(401).send({ result: "Fail", message: "Invalid OTP!!!" })
        }
        else
            res.status(401).send({ result: "Fail", message: "UnAuthorized!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})
router.post("/reset-password", async (req, res) => {
    try {
        var data = await User.findOne({ email: req.body.email,otp:req.body.otp })
        if (data) {
            bcrypt.hash(req.body.password, 12, async (error, hash) => {
                if (error)
                    res.status(500).send({ result: "Fail", message: "Internal Server Error" })
                else {
                    data.password = hash
                    await data.save()
                    res.send({ result: "Done", message: "Password Has Been Reset!!!!!" })
                }
            })
        }
        else
            res.status(401).send({ result: "Fail", message: "UnAuthorized!!!" })
    }
    catch (error) {
        res.status(500).send({ result: "Fail", message: "Internal Server Error" })
    }
})
module.exports = router