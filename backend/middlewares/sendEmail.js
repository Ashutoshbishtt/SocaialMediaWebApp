const nodeMailer = require("nodemailer");

exports.sendEmail = async options => {
  var transportr = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "8c83f41b4245d2",
      pass: "d7477d58aca201",
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: options.email,
    subject: options.subject,
    text: options.message,
  };

  await transporter.sendMail(mailOptions);
};
