import React from 'react';
import { Page, Logo, Text } from './elements';

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
      <Text paragraph={true}>{info.name},</Text>
      <Text paragraph={true}>
        Thank you for contacting the Branch Acupuncture Center. Your question
        will be reviewed and replied to via email as soon as possible. We
        appreciate your business.
      </Text>
      <Text paragraph={true}>Branch Acupuncture Center</Text>
    </Page>
  );
};

export default ContactFormConfirmationEmail;
