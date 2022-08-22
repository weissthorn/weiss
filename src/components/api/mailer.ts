'use strict';
let _public = process.env.NEXT_PUBLIC_EMAIL_PUBLIC;
let secret = process.env.NEXT_PUBLIC_EMAIL_SECRET;
let sender = process.env.NEXT_PUBLIC_EMAIL_SENDER;

const mailjet = require('node-mailjet').connect(_public, secret);

const mailer = async (email: string, subject: string, template: string) => {
  return await mailjet.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: sender,
          Name: 'Bilbord'
        },
        To: [
          {
            Email: email
            // Name: "Bilbord",
          }
        ],
        Subject: subject,
        HTMLPart: template,
        CustomID: 'BLK_' + Math.random()
      }
    ]
  });
};

export default mailer;
