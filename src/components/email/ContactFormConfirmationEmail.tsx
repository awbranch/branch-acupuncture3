import React from 'react';
import { Page, Logo, Title, Text, Para } from './elements';

interface Props {
  info: ContactInfo;
  logoPath: string;
  submitted: string;
}

const ContactFormConfirmationEmail = ({
  info,
  logoPath,
  submitted,
}: Props): JSX.Element => {
  return (
    <Page>
      <Logo path={logoPath} />
      {info.type === 'message' ? (
        <Title>Contact Us - Message Received</Title>
      ) : (
        <Title>New Client Signup - Request Received</Title>
      )}
      <Text>{submitted}</Text>

      <Para>Dear {info.name},</Para>
      {info.type === 'message' ? (
        <Para>
          Thank you for contacting the Branch Acupuncture Center. Your question
          will be reviewed and replied to via email as soon as possible. We
          appreciate your business.
        </Para>
      ) : (
        <Para>
          Thank you for requesting to become a Branch Acupuncture Center client.
          Your request will be reviewed and replied to via email as soon as
          possible. We appreciate your business.
        </Para>
      )}
      <Para>Sincerely,</Para>
      <Text>Molly Branch Shill</Text>
      <Text>Branch Acupuncture Center</Text>
    </Page>
  );
};

export default ContactFormConfirmationEmail;
