const nodemailer = require('nodemailer');

const sha = process.env.COMMIT_SHA;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.GMAIL_USER,
  to: ['bnaveen0515@gmail.com','unnatigupta8449@gmail.com','sureshkumart305@gmail.com'],
  subject: `✅ Docker Image Build Success - Commit ${sha}`,
  text: `The Docker image was built and pushed successfully.\n\nImage Tag: ${sha}\nRepository: github-actions-dockerhub:${sha}`,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
    process.exit(1);
  } else {
    console.log('Email sent successfully:', info.response);
  }
});
