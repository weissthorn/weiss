import nodemailer from 'nodemailer';
import { r, Settings } from './model';

const sendMail = async (
  emailAddress: string,
  title: string,
  template: string
) => {
  await Settings.orderBy(r.asc('createdAt'))
    .then(async (data: any) => {
      data = data.length ? data[0] : {};

      if (data.id) {
        const { email } = data;

        let transporter = nodemailer.createTransport({
          host: email.host,
          port: 465,
          secure: true,
          auth: {
            user: email.email,
            pass: email.password
          }
        });

        await transporter
          .sendMail({
            from: `${data.siteName} <no-reply@caudal.tech>`,
            to: emailAddress,
            subject: title,
            html: template
          })
          .then((mail: any) => console.log(mail));
      }
    })
    .catch((err: any) => console.log(err));
};

export default sendMail;
