import React from 'react';
import { Page, Logo, Title, Text } from './elements';

interface Props {
  info: ContactInfo;
  logoPath: string;
  submitted: string;
}

const ContactFormSubmittedEmail = ({
  info,
  logoPath,
  submitted,
}: Props): JSX.Element => {
  return (
    <Page>
      <Logo path={logoPath} />
      <Title>Contact Us Form Submittal</Title>
      <Text>{submitted}</Text>
      <Text paragraph={true}>{info.message}</Text>
      <Text paragraph={true}>{info.name}</Text>
      <Text>{info.email}</Text>
    </Page>
  );
};

export default ContactFormSubmittedEmail;
