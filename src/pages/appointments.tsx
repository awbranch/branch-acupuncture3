import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Section from 'components/Section';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Hero from 'components/Hero';
import { smoothScrollTo } from '../utils/utils';
import ContactForm from '../components/contactForm/ContactForm';
import Link from '@mui/material/Link';
import QuoteBox from '../components/QuoteBox';
import { IQuestion } from 'types/contentful';
import { createClient } from 'contentful';
import { GetStaticProps } from 'next';
import RichText from 'components/RichText';

interface Props {
  questions: Array<IQuestion>;
  seeingClients: boolean;
}

const Appointments: NextPage = ({ questions, seeingClients }: Props) => {
  return (
    <Main colorInvert={true}>
      <Hero image="/hero/appointments.jpg">
        <Typography variant="h1" sx={{ color: 'common.white' }}>
          Appointments
        </Typography>
        <Typography variant="body1" sx={{ color: 'common.white' }} paragraph>
          Branch Acupuncture Center now uses an online booking system for
          scheduling appointments. If you are a new patient or have not signed
          up for our new booking system, please select “New Client Signup”
          below. Existing clients can select “Book Now”
        </Typography>

        {!seeingClients && (
          <Box
            sx={{
              backgroundColor: 'text.highlight',
              opacity: 0.9,
              mt: 4,
              px: 4,
              py: 2,
            }}
          >
            <Typography
              variant="body1"
              sx={{ color: 'common.white', textAlign: 'center' }}
            >
              Branch Acupuncture is not currently seeing clients.
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'common.white', textAlign: 'center' }}
            >
              Please check back later.
            </Typography>
          </Box>
        )}

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 10 }}
          justifyContent="center"
          sx={{ mt: seeingClients ? 20 : 5, mb: 10, mx: 'auto' }}
        >
          <Button
            disabled={!seeingClients}
            component={'a'}
            variant="contained"
            color="secondary"
            size="large"
            sx={{ textTransform: 'uppercase', minWidth: '300px' }}
            onClick={() => smoothScrollTo('new-client-signup', 80)}
          >
            New Client Signup
          </Button>

          <Button
            disabled={!seeingClients}
            component={'a'}
            variant="contained"
            color="secondary"
            size="large"
            href="https://mollybranch.janeapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textTransform: 'uppercase', minWidth: '300px' }}
          >
            Book Now
          </Button>
        </Stack>
      </Hero>

      <Container>
        {seeingClients && (
          <Section id="new-client-signup">
            <Typography variant="h2">New Client Signup</Typography>
            <Typography variant="body1" paragraph sx={{ mb: 5 }}>
              If you are a new client of Branch Acupuncture center, or are
              unable to use our{' '}
              <Link
                href="https://mollybranch.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                online booking system
              </Link>
              , please fill in the following form with your name, phone number,
              email address, and a brief message of the service you are seeking.
            </Typography>
            <ContactForm type="signup" scrollToId="new-client-signup" />
          </Section>
        )}

        <Section id="questions">
          <Typography variant="h2">Questions</Typography>
          <List>
            {questions.map((question) => (
              <ListItem
                key={question.sys.id}
                sx={{ display: 'block', px: 0, pt: 3, pb: 1 }}
              >
                <Typography variant="h3" sx={{ mb: 2 }}>
                  {question.fields.question}
                </Typography>
                <RichText document={question.fields.answer} />
              </ListItem>
            ))}
          </List>
        </Section>

        <QuoteBox
          text="The natural healing force within each of us is the greatest force in getting well."
          author="Hippocrates"
        />
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const questions = (
    await client.getEntries({
      content_type: 'question',
      order: 'sys.createdAt',
    })
  ).items as IQuestion[];

  const seeingClients = process.env.SEEING_CLIENTS !== 'false';

  return {
    props: { questions, seeingClients },
  };
};

export default Appointments;
