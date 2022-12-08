import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Section from 'components/Section';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Link from '@mui/material/Link';
import NextLink from 'next/link';
import ContactForm from 'components/contactForm/ContactForm';
import path from 'path';
import { promises as fs } from 'fs';
import ScheduleAppointment from '../components/ScheduleAppointment';
import Stack from '@mui/material/Stack';
import React from 'react';
import { smoothScrollTo } from '../utils/utils';

interface Props {
  certifications: Array<Certification>;
  education: Array<Education>;
}

const About: NextPage = ({ certifications, education }: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">Molly Branch</Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="flex-start"
        >
          <Box component="img" src="/headshot.jpg" width={{ xs: 1, md: 390 }} />
          <Typography variant="body1">
            Molly Branch Shill is a licensed acupuncturist in New York State and
            board-certified by the National Certification Commission for
            Acupuncture and Oriental Medicine. Molly holds a Master of
            Professional Studies degree in Community Services Administration
            from Alfred University. She also has a master&apos;s degree in
            acupuncture from the New England School of Acupuncture (NESA), where
            she studied Japanese and Chinese styles of acupuncture along with
            Chinese herbology. In December 2022, she will graduate with her
            clinical doctorate in acupuncture from the Pacific College of Health
            Sciences in San Diego.
          </Typography>
        </Stack>

        <Section id="certifications">
          <Typography variant="h2">Certifications</Typography>
          <List sx={{ listStyleType: 'disc', pl: 4 }}>
            {certifications.map((c, i) => (
              <ListItem key={i} sx={{ display: 'list-item', p: 0, m: 0 }}>
                <Typography variant="body1">{c.description}</Typography>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section id="education">
          <Typography variant="h2">Education</Typography>
          <List sx={{ listStyleType: 'disc', pl: 4 }}>
            {education.map((e, i) => (
              <ListItem key={i} sx={{ display: 'list-item', p: 0, m: 0 }}>
                <Typography variant="body1">{e.description}</Typography>
              </ListItem>
            ))}
          </List>
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
          <Typography variant="body1">
            Branch Acupuncture Center has been in existence in the Rochester
            area since 2001. Our original office was at 35 North Goodman Street
            in Rochester. Eventually, we found our way to an old chapel at 2
            Thornell Road in Bushnell’s Basin. This year, we opened our newest
            and last clinic at 633 Kreag Road, also in Bushnell’s Basin. This
            building was previously owned by Deeanne Bevin, an acupuncturist in
            the area, for the past 30 years. Molly is excited to work in this
            new to her space which Deeanne and so many of her clients have loved
            over the years.
          </Typography>
          <Box
            component={'img'}
            display={'block'}
            src={'office.jpg'}
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
            <NextLink href="/appointments#new-client-signup" passHref>
              <Link>new client signup</Link>
            </NextLink>{' '}
            form instead.
          </Typography>
          <ContactForm type="message" scrollToId="contact" />
        </Section>
      </Container>
    </Main>
  );
};

export async function getServerSideProps() {
  const certifications = JSON.parse(
    await fs.readFile(
      path.join(process.cwd(), 'data', 'certifications.json'),
      'utf8',
    ),
  );

  const education = JSON.parse(
    await fs.readFile(
      path.join(process.cwd(), 'data', 'education.json'),
      'utf8',
    ),
  );

  return {
    props: { certifications, education },
  };
}

export default About;
