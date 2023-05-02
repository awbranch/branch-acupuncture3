import type { NextPage } from 'next';
import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Divider from '@mui/material/Divider';
import Container from 'components/Container';
import ContactFormConfirmationEmail from 'components/email/ContactFormConfirmationEmail';
import ContactFormSubmittedEmail from 'components/email/ContactFormSubmittedEmail';
import { FormType } from '@/types/formType';
import { GetStaticProps } from 'next';
import { getSiteSettings } from '@/sanity/utils';
import { SiteSettings } from '@/types/siteSettings';

interface Props {
  siteSettings: SiteSettings;
}

const TestContactForm: NextPage = ({ siteSettings }: Props) => {
  const [formType, setFormType] = useState<FormType>('message');
  const [userType, setUserType] = useState('customer');

  const handleFormTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    type: string,
  ) => {
    if (type) setFormType(type as FormType);
  };

  const handleUserTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    type: string,
  ) => {
    if (type) setUserType(type);
  };

  let info = {
    type: formType,
    accounting: '',
    name: 'Jane Doe',
    email: 'awbranch+janedoe@gmail.com',
    phone: '(555) 555-5555',
    message:
      formType === 'message'
        ? 'This is a contact message.'
        : 'This is a new client signup message.',
  };

  return (
    <Container>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3 }}>
        <ToggleButtonGroup
          color="primary"
          value={formType}
          exclusive
          onChange={handleFormTypeChange}
        >
          <ToggleButton value="message">Message</ToggleButton>
          <ToggleButton value="signup">Signup</ToggleButton>
        </ToggleButtonGroup>

        <ToggleButtonGroup
          color="primary"
          value={userType}
          exclusive
          onChange={handleUserTypeChange}
        >
          <ToggleButton value="customer">Customer</ToggleButton>
          <ToggleButton value="provider">Provider</ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Divider />

      {userType === 'customer' ? (
        <ContactFormConfirmationEmail
          info={info}
          logoPath="email-header.png"
          submitted={new Date().toLocaleDateString()}
          messageConfirmation={siteSettings.contact.confirmation}
          messageSalutation={siteSettings.contact.salutation}
          signupConfirmation={siteSettings.signup.confirmation}
          signupSalutation={siteSettings.signup.salutation}
        />
      ) : (
        <ContactFormSubmittedEmail
          info={info}
          logoPath="email-header.png"
          submitted={new Date().toLocaleDateString()}
        />
      )}
    </Container>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const siteSettings = await getSiteSettings();

  return {
    props: {
      siteSettings,
    },
  };
};

export default TestContactForm;
