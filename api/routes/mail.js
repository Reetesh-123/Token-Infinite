const router = require("express").Router();
var nodemailer = require('nodemailer');


router.post("/",(req,res)=>{

    var transport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'gehlottushar18@gmail.com',
            pass:'123'
        }
    })
    
    
    var mailOptions = {
        from:'tushar@gmail.com',
        to:'tushar@gmail.com',
        subject:'Hello this is a test mail',
        text:`From : ${req.body.contactName} , \n Email : ${req.body.contactMail} , \n Phone number : ${req.body.contactPhone}, \n Message : ${req.body.contactMessage}`
    }
    
    transport.sendMail(mailOptions,function(error, info){
        if(error){
            res.status(500).json(error)
        }
        else{
            res.status(200).json(info.response)
        }
    })
})


module.exports = router;