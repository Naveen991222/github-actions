#! /usr/bin/env node
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: ['bnaveen0515@gmail.com', 'yashoda@example.com', 'colleague1@example.com'],
  from: 'sureshkumart305@gmail.com',
  subject: '✅ Build Successful',
  text: 'The Docker image has been successfully built and pushed.',
  html: '<p>The Docker image has been successfully built and pushed.</p>',
};

sgMail
  .sendMultiple(msg)
  .then(() => console.log('Mail sent successfully'))
  .catch(error => console.error(error.toString()));
