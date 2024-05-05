const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'skanderchouchene@yahoo.fr',
        pass: 'Iwillmakethemsuffer2'
    }
});

let mailOptions = {
    from: 'skanderchouchene@yahoo.fr',
    to: 'skanderchouchene@yahoo.fr',
    subject: 'Test Email',
    text: 'This is a test email from Node.js using nodemailer.'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
