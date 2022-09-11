import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Section from 'components/Section';
import ScheduleSession from 'components/ScheduleSession';
import ServiceCard from 'components/ServiceCard';
import Hero from 'components/Hero';
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
      <Hero image="/hero/gettyimages-678836035-170667a.jpg">
        <Typography variant="h1" sx={{ color: 'common.white' }}>
          Branch Acupuncture Center
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ mt: 2, fontSize: '120%', color: 'common.white' }}
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
                image="gettyimages-97538838-170667a.jpg"
                link="/services#acupuncture"
              />
            </Grid>

            <Grid item sm={4}>
              <ServiceCard
                title="Herbal Medicine"
                image="gettyimages-1316967405-170667a.jpg"
                link="/services#herbal-medicine"
              />
            </Grid>
            <Grid item sm={4}>
              <ServiceCard
                title="Cupping and Gua Sha"
                image="gettyimages-523356878-170667a.jpg"
                link="/services#cupping-gua-sha"
              />
            </Grid>
            <Grid item sm={4}>
              <ServiceCard
                title="Moxibustion"
                image="gettyimages-1145617216-170667a.jpg"
                link="/services#moxibustion"
              />
            </Grid>
            <Grid item sm={4}>
              <ServiceCard
                title="Nutrition"
                image="gettyimages-1345368999-170667a.jpg"
                link="/services#nutrition"
              />
            </Grid>
            <Grid item sm={4}>
              <ServiceCard
                title="Laser Acupuncture"
                image="gettyimages-1214880959-170667a.jpg"
                link="/services#laser-acupuncture"
              />
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Typography variant="h2">What People Are Saying</Typography>
          <Box sx={{ my: 4 }}>
            <Typography variant="body1">
              “Molly&lsquo;s insight and knowledge of her craft and the human
              body are impressive. I have been able to take my painful days and
              reduce them significantly, hoping to go even further. She always
              provides results and addresses the whole picture in reference to
              mind/body/spirit.“
            </Typography>
            <Typography variant="caption">— BAC Client</Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="body1">
              “Results. Molly has a wisdom about many problems, and I have been
              fortunate to have several conditions improved because of her
              knowledge and methods to treat medical problems.”
            </Typography>
            <Typography variant="caption">— BAC Client</Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="body1">
              “Molly is a true healer – she holistically looks at you as a
              person and treats you accordingly. After each treatment, I am
              floating. Certainly, would recommend her time and again.”
            </Typography>
            <Typography variant="caption">— BAC Client</Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="body1">
              “The very best!! She is so very cognizant of all your concerns!!”
            </Typography>
            <Typography variant="caption">— BAC Client</Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="body1">
              “Thank you for all the years of caring for me. You have done for
              me things no one else in my life has. You came to me when I was
              very sick, and you always have had faith that I would get better.
              You are the most special person I know.”
            </Typography>
            <Typography variant="caption">— BAC Client</Typography>
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="body1">
              “You have been a light to me in my quest to be and stay healthy as
              I know you have been to others. Your gentle ways, the manner in
              which you listen to your patients and your warmth and caring
              nature and that of your staff could be a model for any medical
              staff. I always felt healing begin immediately as I put my hand on
              the entry door.”
            </Typography>
            <Typography variant="caption">— BAC Client</Typography>
          </Box>
        </Section>
      </Container>
    </Main>
  );
};

export default Home;
