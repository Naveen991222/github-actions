const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

const mailOptions = {
  from: process.env.GMAIL_USER,
  to: ['bnaveen0515@gmail.com', 'sureshkumart305@gmail.com'],
  subject: '✅ Build Successful',
  text: 'The Docker image has been successfully built and pushed.'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
    process.exit(1); // to fail the step if needed
  } else {
    console.log('Email sent:', info.response);
  }
});
