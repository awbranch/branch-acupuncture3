import type { NextPage } from 'next';
import Container from 'components/Container';
import ContactFormSubmittedEmail from 'components/email/ContactFormSubmittedEmail';
import React from 'react';

interface Props {
  info: ContactInfo;
  logoPath: string;
  submitted: string;
}

const TestContactSubmit: NextPage = ({ info, logoPath, submitted }: Props) => {
  return (
    <Container>
      <ContactFormSubmittedEmail
        info={info}
        logoPath={logoPath}
        submitted={submitted}
      />
    </Container>
  );
};

export async function getServerSideProps() {
  const info = {
    accounting: '',
    name: 'Some Person',
    email: 'awbranch@gmail.com',
    message:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
  };
  const submitted = new Date().toLocaleDateString();
  const logoPath = 'email-header.png';
  return {
    props: { info, logoPath, submitted }, // will be passed to the page component as props
  };
}

export default TestContactSubmit;
