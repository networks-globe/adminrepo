const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:process.env.FROM,
        pass:process.env.PASSWORD
    }
})
module.exports = transporter