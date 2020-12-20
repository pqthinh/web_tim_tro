var nodemailer = require('nodemailer');
const user = require('../inforemail')

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: user.user,
    pass: user.pass
  }
});

module.exports = transporter