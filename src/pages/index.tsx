import type { NextPage, GetStaticProps } from 'next';
import Main from '@/layouts/main/Main';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ReviewCarousel from '@/components/ReviewCarousel';
import ServiceCard from '@/components/ServiceCard';
import ScheduleAppointment from '@/components/ScheduleAppointment';
import { smoothScrollTo } from '@/utils/utils';
import { getReviews, getServices } from '@/sanity/utils';
import { Review } from '@/types/review';
import { Service } from '@/types/service';

interface Props {
  services: Array<Service>;
  reviews: Array<Review>;
}

const Home: NextPage = ({ services, reviews }: Props) => {
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
            onClick={() => smoothScrollTo('welcome', 80)}
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
        <ScheduleAppointment />

        <Section>
          <Grid
            container
            justifyContent="space-around"
            spacing={2}
            direction="row"
          >
            {services.map((service) => (
              <Grid key={service._id} item xs={12} sm={6} md={4}>
                <ServiceCard
                  title={service.name}
                  image={service.image}
                  link={`/services#${service.slug}`}
                />
              </Grid>
            ))}
          </Grid>
        </Section>

        <Section id="testimonials">
          <Typography variant="h2" sx={{ textAlign: 'center', mt: 20 }}>
            What People Are Saying
          </Typography>
          <ReviewCarousel reviews={reviews} />
        </Section>
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const services = await getServices();
  const reviews = await getReviews();

  return {
    props: { services, reviews },
  };
};

export default Home;
