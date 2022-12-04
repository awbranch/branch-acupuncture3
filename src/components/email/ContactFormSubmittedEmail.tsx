import React from 'react';
import {
  Page,
  Logo,
  Title,
  Table,
  Row,
  DoubleCell,
  Header,
  Text,
} from './elements';

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
      {info.type === 'message' ? (
        <Title>Customer Message</Title>
      ) : (
        <Title>New Client Request</Title>
      )}
      <Text>Submitted: {submitted}</Text>

      <Table>
        <Row>
          <DoubleCell>
            <Header>Name</Header>
            <Text>{info.name}</Text>
          </DoubleCell>
        </Row>
        {info.type === 'signup' && (
          <Row>
            <DoubleCell>
              <Header>Phone</Header>
              <Text>{info.phone}</Text>
            </DoubleCell>
          </Row>
        )}
        <Row>
          <DoubleCell>
            <Header>Email</Header>
            <Text>{info.email}</Text>
          </DoubleCell>
        </Row>
        <Row>
          <DoubleCell>
            <Header>Message</Header>
            <Text>{info.message}</Text>
          </DoubleCell>
        </Row>
      </Table>
    </Page>
  );
};

export default ContactFormSubmittedEmail;
