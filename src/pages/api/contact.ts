import nodemailer from 'nodemailer';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import ContactFormSubmittedEmail from 'components/email/ContactFormSubmittedEmail';
import ContactFormConfirmationEmail from 'components/email/ContactFormConfirmationEmail';
import contactInfoSchema from 'utils/contactInfoSchema';
import path from 'path';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      // Revalidate what was submitted
      let info = await contactInfoSchema.validate(req.body, {
        abortEarly: true,
        stripUnknown: true,
      });

      // Check the honeypot it must be blank
      if (info.accounting.length !== 0) {
        res.status(500).send({ message: 'Invalid Message' });
        return;
      }

      console.log(JSON.stringify(info, null, 3));
      let logoId = 'email-header@mollybranch.com';
      let logoPath = path.resolve('./public');

      // Send an email to Molly
      let status = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'Branch Acupuncture Message',
        html: ReactDOMServer.renderToString(
          React.createElement(ContactFormSubmittedEmail, {
            info,
            logoPath: `cid:${logoId}`,
            submitted: new Date().toLocaleDateString(),
          }),
        ),
        attachments: [
          {
            filename: 'email-header.png',
            path: `${logoPath}/email-header.png`,
            cid: logoId,
          },
        ],
      });

      console.log(
        `Contact submitted email response: ${status.response} id: ${
          status.messageId
        } accepted: ${JSON.stringify(
          status.accepted,
        )} rejected: ${JSON.stringify(status.rejected)}`,
      );

      // Send confirmation email to the submitter
      status = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: info.email,
        subject: 'Branch Acupuncture Message Received',
        html: ReactDOMServer.renderToString(
          React.createElement(ContactFormConfirmationEmail, {
            info,
            logoPath: `cid:${logoId}`,
            submitted: new Date().toLocaleDateString(),
          }),
        ),
        attachments: [
          {
            filename: 'email-header.png',
            path: `${logoPath}/email-header.png`,
            cid: logoId,
          },
        ],
      });

      console.log(
        `Contact message email response: ${status.response} id: ${
          status.messageId
        } accepted: ${JSON.stringify(
          status.accepted,
        )} rejected: ${JSON.stringify(status.rejected)}`,
      );

      res.status(200).json({ message: 'Message Submitted Successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error Submitting Message' });
    }
  } else {
    res.status(405).send({ message: `Invalid Method: ${req.method}` });
  }
};

export default handler;
