'use strict';

const Email = require('email-templates');
const nodemailer = require('nodemailer');
const mailgunTransport = require('nodemailer-mailgun-transport');

const mailgunOptions = {
  auth: {
    api_key:
      process.env.EMAIL_API_KEY || 'key-eeac6a89becd0c257ede043e421760ea',
    domain: process.env.EMAIL_DOMAIN || 'dev-email.lucas.com',
  },
};
const emailFrom = process.env.EMAIL_FROM || 'lucasspace@gmail.com';
const transport = mailgunTransport(mailgunOptions);
const emailClient = nodemailer.createTransport(transport);
const email = new Email({
  message: {
    from: emailFrom,
  },
  send: true,
  transport: emailClient,
});

async function sendEmailResetPassword(receiverEmail, resetPasswordUrl) {
  try {
    const mailOptions = {
      from: '"lucas" <info@lucas.com>', // sender address
      to: receiverEmail, // list of receivers
      subject: 'Reset password request', // Subject line
      html: `<p>Click this link to reset your password <a href=${resetPasswordUrl} target="_blank">Click here</a></p>`, // html body
    };

    const result = await emailClient.sendMail(mailOptions);
  } catch (err) {
    throw err;
  }
}

async function sendInvitationEmail(receiverEmail, inviteUrl) {
  try {
    const mailOptions = {
      from: '"lucas" <info@lucas.com>', // sender address
      to: receiverEmail, // list of receivers
      subject: 'Invite member to lucas', // Subject line
      html: `<p>Click this link to join us <a href=${inviteUrl} target="_blank">Click here</a></p>`, // html body
    };

    const result = await emailClient.sendMail(mailOptions);
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
module.exports.sendEmailResetPassword = sendEmailResetPassword;
module.exports.sendInvitationEmail = sendInvitationEmail;
