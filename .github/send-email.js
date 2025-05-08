const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.GMAIL_USER,
  to: ['bnaveen0515@gmail.com'], // add more recipients if needed
  subject: '✅ Docker Image Build Success',
  text: 'The Docker image was successfully built and pushed from your GitHub Actions workflow.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
    process.exit(1);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
