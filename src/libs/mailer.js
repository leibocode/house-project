//发送邮件
const nodemailer = require('nodemailer')
const config  = require('../config/config')

let transporter = nodemailer.createTransport({
    service:'163',//发送者的邮箱厂商,
    secureConnection:true,
    port:0,
    auth:{
        user:'',
        pass:''
    }
})

let mailOptions = {
    form:'',
    to:'',
    subject:'一封'
}

transporter.sendMail(mailOptions,(err,info)=>{
    if(error){
        //发送邮件
    }
})