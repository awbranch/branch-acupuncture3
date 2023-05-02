import type { NextPage, GetStaticProps } from 'next';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Main from '@/layouts/main/Main';
import Container from '@/components/Container';
import Section from '@/components/Section';
import ContactForm from '@/components/contactForm/ContactForm';
import ScheduleAppointment from '@/components/ScheduleAppointment';
import { smoothScrollTo } from '@/utils/utils';
import QuoteBox from '@/components/QuoteBox';
import { getAboutPageMeta } from '@/sanity/utils';
import { PortableTextBlock } from 'sanity';
import RichText from '@/components/RichText';

interface Props {
  name: string;
  bioImage: string;
  biography: PortableTextBlock[];
  certifications: PortableTextBlock[];
  education: PortableTextBlock[];
  history: PortableTextBlock[];
  officeImage: string;
}

const About: NextPage = ({
  name,
  bioImage,
  biography,
  certifications,
  education,
  history,
  officeImage,
}: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">{name}</Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="flex-start"
        >
          <Box component="img" src={bioImage} width={{ xs: 1, md: 390 }} />
          <RichText document={biography} />
        </Stack>

        <Section id="certifications">
          <Typography variant="h2">Certifications</Typography>
          <RichText document={certifications} />
        </Section>

        <Section id="education">
          <Typography variant="h2">Education</Typography>
          <RichText document={education} />
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
                href="https://www.google.com/maps/place/633+Kreag+Rd,+Pittsford,+NY+14534/@43.061427,-77.473222,16z/data=!4m5!3m4!1s0x89d1347e53095137:0xd48f480a600885cf!8m2!3d43.061427!4d-77.4732222?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Typography variant="body1">
                  633 Kreag Road Pittsford, NY 14534
                </Typography>
              </Link>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="flex-start">
              <Box
                component="img"
                src="/icons/phone-light.svg"
                width={20}
                sx={{ mt: '8px' }}
              />
              <Typography variant="body1">(585) 256-3980</Typography>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2915.0492891324875!2d-77.47541088504529!3d43.061430898512675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d1347e53095137%3A0xd48f480a600885cf!2s633%20Kreag%20Rd%2C%20Pittsford%2C%20NY%2014534!5e0!3m2!1sen!2sus!4v1670540357854!5m2!1sen!2sus"
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
          <RichText document={history} />
          <Box
            component={'img'}
            display={'block'}
            src={officeImage}
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
          <Typography variant="body1" sx={{ mb: 5 }}>
            Please use this form to ask any questions of Branch Acupuncture
            Center. If you are interested in becoming a new client, please use
            our{' '}
            <Link href="/appointments#new-client-signup" component={NextLink}>
              new client signup
            </Link>{' '}
            form instead.
          </Typography>
          <ContactForm type="message" scrollToId="contact" />
        </Section>
        <QuoteBox text="Health is the greatest possession." author="Lao Tzu" />
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const meta = await getAboutPageMeta();

  return {
    props: {
      name: meta.name,
      bioImage: meta.bioImage,
      biography: meta.biography,
      certifications: meta.certifications,
      education: meta.education,
      history: meta.history,
      officeImage: meta.officeImage,
    },
  };
};

export default About;
