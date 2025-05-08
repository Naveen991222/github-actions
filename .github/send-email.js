const nodemailer = require('nodemailer');

const sha = process.env.COMMIT_SHA || 'N/A';
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
  to: 'bnaveen0515@gmail.com','unnatigupta8449@gmail.com','sureshkumart305@gmail.com'
  subject: `✅ Docker Image Build Success - Commit ${sha}`,
  html: `
    <h2>✅ Docker Build & Push Completed Successfully</h2>
    <p><strong>Commit SHA:</strong> ${sha}</p>
    <p><strong>Docker Image:</strong> <code>github-actions-dockerhub:${sha}</code></p>
    <p>Great job! 🎉</p>
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
