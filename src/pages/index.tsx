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

const Home: NextPage = () => {
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
          variant="h5"
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
            <Grid item sm={4}>
              <ServiceCard
                title="Acupuncture"
                image="acupuncture.jpg"
                link="/services#acupuncture"
              />
            </Grid>

            <Grid item sm={4}>
              <ServiceCard
                title="Herbal Medicine"
                image="herbal-medicine.jpg"
                link="/services#herbal-medicine"
              />
            </Grid>
            <Grid item sm={4}>
              <ServiceCard
                title="Cupping and Gua Sha"
                image="cupping-gua-sha.jpg"
                link="/services#cupping-gua-sha"
              />
            </Grid>
            <Grid item sm={4}>
              <ServiceCard
                title="Moxibustion"
                image="moxibustion.jpg"
                link="/services#moxibustion"
              />
            </Grid>
            <Grid item sm={4}>
              <ServiceCard
                title="Nutrition"
                image="nutrition.jpg"
                link="/services#nutrition"
              />
            </Grid>
            <Grid item sm={4}>
              <ServiceCard
                title="Laser Acupuncture"
                image="laser-acupuncture.jpg"
                link="/services#laser-acupuncture"
              />
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Typography variant="h2" sx={{ textAlign: 'center', mt: 20 }}>
            What People Are Saying
          </Typography>
          <Reviews />
        </Section>
      </Container>
    </Main>
  );
};

export default Home;
