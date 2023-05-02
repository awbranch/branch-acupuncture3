import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Main from 'layouts/main/Main';
import Container from '@/components/Container';
import Section from '@/components/Section';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Hero from '@/components/Hero';
import { smoothScrollTo } from '@/utils/utils';
import ContactForm from '@/components/contactForm/ContactForm';
import QuoteBox from '@/components/QuoteBox';
import RichText from '@/components/RichText';
import { getAppointmentsPage, getSiteSettings } from '@/sanity/utils';
import { AppointmentsPage } from '@/types/appointmentsPage';
import { FormConfig } from '@/types/formConfig';

interface Props {
  pageProps: AppointmentsPage;
  signupConfig: FormConfig;
}

const Appointments: NextPage = ({ pageProps, signupConfig }: Props) => {
  return (
    <Main colorInvert={true}>
      <Hero image={pageProps.hero.image}>
        <Typography variant="h1" sx={{ color: 'common.white' }}>
          {pageProps.hero.title}
        </Typography>
        <RichText document={pageProps.hero.description} colorInvert={true} />

        {pageProps.closed && (
          <Box
            sx={{
              backgroundColor: 'text.highlight',
              opacity: 0.9,
              mt: 4,
              px: 4,
              pt: 2,
              pb: 0.5,
              textAlign: 'center',
            }}
          >
            <RichText document={pageProps.closedMessage} colorInvert={true} />
          </Box>
        )}

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 2, sm: 10 }}
          justifyContent="center"
          sx={{ mt: pageProps.closed ? 5 : 20, mb: 10, mx: 'auto' }}
        >
          <Button
            disabled={pageProps.closed}
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
            disabled={pageProps.closed}
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
        {!pageProps.closed && (
          <Section id="new-client-signup">
            <Typography variant="h2">New Client Signup</Typography>
            <RichText document={signupConfig.instructions} />
            <ContactForm
              type="signup"
              successMessage={signupConfig.confirmation}
              scrollToId="new-client-signup"
            />
          </Section>
        )}

        <Section id="questions">
          <Typography variant="h2">Questions</Typography>
          <List>
            {pageProps.questions.map((question) => (
              <ListItem
                key={question._id}
                sx={{ display: 'block', px: 0, pt: 3, pb: 1 }}
              >
                <Typography variant="h3" sx={{ mb: 2 }}>
                  {question.question}
                </Typography>
                <RichText document={question.answer} />
              </ListItem>
            ))}
          </List>
        </Section>

        <QuoteBox text={pageProps.quote.text} author={pageProps.quote.author} />
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageProps = await getAppointmentsPage();
  const settings = await getSiteSettings();

  return {
    props: {
      pageProps,
      signupConfig: settings.signup,
    },
  };
};

export default Appointments;
