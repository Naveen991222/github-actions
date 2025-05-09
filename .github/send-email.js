const nodemailer = require('nodemailer');

const sha = process.env.COMMIT_SHA || 'N/A';
const dockerUser = process.env.DOCKER_USERNAME || 'unknown';
const fromAddress = `"Naveen Bochu 👨‍💻" <${process.env.GMAIL_USER}>`;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const mailOptions = {
  from: fromAddress,
  to: [
    'bnaveen0515@gmail.com',
    'sureshkumart305@gmail.com',
    'divyareddy47907@gmail.com',
    'unnatigupta8449@gmail.com'
  ],
  subject: `✅ Docker Build Success - Commit ${sha}`,
  html: `
    <h2>✅ Docker Image Built & Pushed Successfully</h2>
    <p><strong>Commit SHA:</strong> ${sha}</p>
    <p><strong>Docker Image:</strong> <code>${dockerUser}/github-actions-dockerhub:${sha}</code></p>
    <p>Great job, Naveen Yadav! 🎉</p>
  `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('❌ Failed to send email:', error);
    process.exit(1);
  } else {
    console.log('✅ Email sent successfully:', info.response);
  }
});
