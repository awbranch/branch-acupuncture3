import React from 'react';
import { Page, Logo, Title, Text, Para } from './elements';
import type { ContactInfo } from '@/types/contact';
import { PortableTextBlock } from 'sanity';
import EmailText from './EmailText';

interface Props {
  info: ContactInfo;
  logoPath: string;
  submitted: string;
  messageConfirmation: PortableTextBlock[];
  messageSalutation: PortableTextBlock[];
  signupConfirmation: PortableTextBlock[];
  signupSalutation: PortableTextBlock[];
}

const ContactFormConfirmationEmail = ({
  info,
  logoPath,
  submitted,
  messageConfirmation,
  messageSalutation,
  signupConfirmation,
  signupSalutation,
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
        <>
          <EmailText document={messageConfirmation} />
          <EmailText document={messageSalutation} />
        </>
      ) : (
        <>
          <EmailText document={signupConfirmation} />
          <EmailText document={signupSalutation} />
        </>
      )}
    </Page>
  );
};

export default ContactFormConfirmationEmail;
