const nodemailer = require('nodemailer');
const http = require('http');
const crypto = require('crypto');
const fs = require('fs');
const os = require('os');

// 发送电子邮件
function sendEmail(from, to, subject, text) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your_email@gmail.com',
            pass: 'your_password'
        }
    });

    const mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

// 创建 HTTP 服务器并监听
function createHttpServer(port, requestHandler) {
    const server = http.createServer(requestHandler);
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}
