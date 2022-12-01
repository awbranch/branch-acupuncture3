import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Section from 'components/Section';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import ContactUs from 'components/ContactUs';
import path from 'path';
import { promises as fs } from 'fs';
import ScheduleAppointment from '../components/ScheduleAppointment';

interface Props {
  certifications: Array<Certification>;
  education: Array<Education>;
}

const About: NextPage = ({ certifications, education }: Props) => {
  return (
    <Main>
      <Container>
        <Typography variant="h1">Molly Branch</Typography>
        <Typography variant="body1">
          Molly Branch Shill is a licensed acupuncturist in New York State and
          board-certified by the National Certification Commission for
          Acupuncture and Oriental Medicine. Molly holds a Master of
          Professional Studies degree in Community Services Administration from
          Alfred University. She also has a master&apos;s degree in acupuncture
          from the New England School of Acupuncture (NESA), where she studied
          Japanese and Chinese styles of acupuncture along with Chinese
          herbology. In December 2022, she will graduate with her clinical
          doctorate in acupuncture from the Pacific College of Health Sciences
          in San Diego.
        </Typography>

        <Section id="certifications">
          <Typography variant="h2">Certifications</Typography>
          <List>
            {certifications.map((c, i) => (
              <ListItem key={i} sx={{ display: 'block', p: 0, m: 0 }}>
                <Typography variant="body1">{c.description}</Typography>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section id="education">
          <Typography variant="h2">Education</Typography>
          <List>
            {education.map((e, i) => (
              <ListItem key={i} sx={{ display: 'block', p: 0, m: 0 }}>
                <Typography variant="body1">{e.description}</Typography>
              </ListItem>
            ))}
          </List>
        </Section>

        <Section id="office">
          <Typography variant="h2">Our Office</Typography>
          <Typography variant="body1">Office Address</Typography>
          <Box sx={{ width: '200px', height: '200px' }} />
        </Section>

        <ScheduleAppointment />

        <Section id="contact">
          <ContactUs />
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
