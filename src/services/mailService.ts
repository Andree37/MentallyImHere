var nodemailer = require('nodemailer');
//-----------------------------------------------------------------------------
export async function sendMail(subject: string, toEmail: string, html: string) {
    var transporter = nodemailer.createTransport({
        host: 'smtpout.secureserver.net', // Godaddy SMTP server
        port: 465, // Port for secure SMTP
        secure: true, // Use SSL/TLS
        auth: {
            user: process.env.NODEMAILER_EMAIL,
            pass: process.env.NODEMAILER_PW,
        },
    });

    var mailOptions = {
        from: process.env.NODEMAILER_EMAIL,
        to: toEmail,
        subject: subject,
        html,
    };

    transporter.sendMail(mailOptions, function (error: string, info: string) {
        if (error) {
            throw new Error(error);
        } else {
            return true;
        }
    });
}
