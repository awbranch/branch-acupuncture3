import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Section from 'components/Section';
import ScheduleSession from 'components/ScheduleSession';
import ServiceCard from 'components/ServiceCard';
import Hero from 'components/Hero';
import Reviews from 'components/Reviews';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import path from 'path';
import { promises as fs } from 'fs';

interface Props {
  services: Array<Service>;
}

const Home: NextPage = ({ services }: Props) => {
  const scrollTo = (id: string): void => {
    setTimeout(() => {
      const element: HTMLElement = document.querySelector(`#${id}`);
      if (!element) {
        return;
      }

      window.scrollTo({
        left: 0,
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
    });
  };
  return (
    <Main colorInvert={true}>
      <Hero image="/hero/home.jpg">
        <Typography variant="h1" sx={{ color: 'common.white' }}>
          Branch Acupuncture Center
        </Typography>
        <Typography
          component="p"
          variant="subtitle1"
          paragraph
          sx={{ mt: 2, color: 'common.white' }}
        >
          Wisdom of East Asian Medicine for Every Unique Individual
        </Typography>
        <Typography variant="body1" sx={{ color: 'common.white' }} paragraph>
          Whatever your health goals may be, East Asian Medicine can help you
          achieve them. At Branch Acupuncture Center, we offer the wisdom of
          East Asian Medicine to help restore balance to your whole being. Molly
          Branch, owner, and licensed acupuncturist, provides natural healing
          modalities in a calm space to support mental and emotional health and
          well-being, pain management, preventative medicine, and oncology
          support.
        </Typography>
        <Box component="div" sx={{ m: 5, textAlign: 'center' }}>
          <Button
            component={'a'}
            variant="contained"
            color="secondary"
            size="large"
            sx={{ textTransform: 'uppercase' }}
            onClick={() => scrollTo('welcome')}
          >
            More
          </Button>
        </Box>
      </Hero>
      <Container>
        <Section id="welcome">
          <Typography variant="h2">Welcome</Typography>
          <Typography variant="body1" paragraph>
            At Branch Acupuncture Center, we consider each unique client as an
            individual - full of special knowledge, innate wisdom, and
            compassion. My love for traditional medicine stems from its basis
            that patients are viewed individually with physical, mental, and
            spiritual states – not just a single symptom or malfunctioning body
            part. Traditional medicine views any symptom, injury, or condition
            as a sign that the body is out of harmony. Acupuncture and East
            Asian Medicine enable the body to return to balance effectively and
            safely, with fewer symptoms and better future conditions.
          </Typography>
        </Section>
        <ScheduleSession />

        <Section>
          <Grid
            container
            justifyContent="space-around"
            spacing={2}
            direction="row"
          >
            {services.map((service) => (
              <Grid key={service.id} item xs={12} sm={6} md={4}>
                <ServiceCard
                  title={service.name}
                  image={service.image}
                  link={`/services#${service.id}`}
                />
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section id="testimonials">
          <Typography variant="h2" sx={{ textAlign: 'center', mt: 20 }}>
            What People Are Saying
          </Typography>
          <Reviews />
        </Section>
      </Container>
    </Main>
  );
};

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'data', 'services.json');
  const services = JSON.parse(await fs.readFile(file, 'utf8'));

  return {
    props: { services },
  };
}

export default Home;
