import type { NextPage, GetStaticProps } from 'next';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Main from '@/layouts/main/Main';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ContactForm from '@/components/contactForm/ContactForm';
import ScheduleAppointment from '@/components/ScheduleAppointment';
import { smoothScrollTo } from '@/utils/utils';
import QuoteBox from '@/components/QuoteBox';
import { getAboutPage, getSiteSettings } from '@/sanity/utils';
import RichText from '@/components/RichText';
import { AboutPage } from '@/types/aboutPage';
import { FormConfig } from '@/types/formConfig';

interface Props {
  pageProps: AboutPage;
  address: string;
  phone: string;
  mapLink: string;
  mapEmbedLink: string;
  contactConfig: FormConfig;
}

const About: NextPage = ({
  pageProps,
  address,
  phone,
  mapLink,
  mapEmbedLink,
  contactConfig,
}: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">{pageProps.name}</Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="flex-start"
        >
          <Box
            component="img"
            src={pageProps.bioImage}
            width={{ xs: 1, md: 390 }}
          />
          <RichText document={pageProps.biography} />
        </Stack>

        <Section id="certifications">
          <Typography variant="h2">Certifications</Typography>
          <RichText document={pageProps.certifications} />
        </Section>

        <Section id="education">
          <Typography variant="h2">Education</Typography>
          <RichText document={pageProps.education} />
        </Section>

        <Section id="office">
          <Typography variant="h2">Our Office</Typography>
          <Typography variant="body1">Branch Acupuncture Center</Typography>
          <Box>
            <Stack direction="row" spacing={1} alignItems="flex-start">
              <Box
                component="img"
                src="/icons/globe-light.svg"
                width={20}
                sx={{ mt: '8px' }}
              />
              <Link
                sx={{ cursor: 'pointer' }}
                underline="hover"
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="body1">{address}</Typography>
              </Link>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="flex-start">
              <Box
                component="img"
                src="/icons/phone-light.svg"
                width={20}
                sx={{ mt: '8px' }}
              />
              <Typography variant="body1">{phone}</Typography>
            </Stack>
            <Link
              sx={{ cursor: 'pointer' }}
              underline="hover"
              onClick={() => smoothScrollTo('contact', 0)}
            >
              <Stack direction="row" spacing={1} alignItems="flex-start">
                <Box
                  component="img"
                  src="/icons/envelope-light.svg"
                  width={20}
                  sx={{ mt: '8px' }}
                />
                <Typography variant="body1">Contact Us</Typography>
              </Stack>
            </Link>
          </Box>

          <Box sx={{ '& iframe': { border: 0 }, mt: 3 }}>
            <iframe
              id="google-map"
              src={mapEmbedLink}
              width="100%"
              height="450"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Section>

        <ScheduleAppointment />

        <Section id="history">
          <Typography variant="h2">History</Typography>
          <RichText document={pageProps.history} />
          <Box
            component={'img'}
            display={'block'}
            src={pageProps.officeImage}
            sx={{ mt: 5 }}
            height={1}
            width={1}
          />
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="center"
            sx={{ mt: 2 }}
          >
            <Box component="img" src="/icons/globe-light.svg" width={14} />
            <Typography variant="caption">
              633 Kreag Road Pittsford, NY 14534
            </Typography>
          </Stack>
        </Section>

        <Section id="contact">
          <Typography variant="h2">Contact Us</Typography>
          <RichText document={contactConfig.instructions} />
          <ContactForm
            type="message"
            successMessage={contactConfig.confirmation}
            scrollToId="contact"
          />
        </Section>
        <QuoteBox text={pageProps.quote.text} author={pageProps.quote.author} />
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageProps = await getAboutPage();
  const settings = await getSiteSettings();

  return {
    props: {
      pageProps,
      address: settings.address,
      phone: settings.phone,
      mapLink: settings.mapLink,
      mapEmbedLink: settings.mapEmbedLink,
      contactConfig: settings.contact,
    },
  };
};

export default About;
