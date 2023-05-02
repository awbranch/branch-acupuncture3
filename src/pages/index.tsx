import type { NextPage, GetStaticProps } from 'next';
import Main from '@/layouts/main/Main';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@/components/Container';
import HeroHeader from '@/components/HeroHeader';
import Section from '@/components/Section';
import ReviewCarousel from '@/components/ReviewCarousel';
import RichText from '@/components/RichText';
import ServiceCard from '@/components/ServiceCard';
import ScheduleAppointment from '@/components/ScheduleAppointment';
import { getHomePageMeta, getServices } from '@/sanity/utils';
import { Service } from '@/types/service';
import { HomePageMeta } from '@/types/homePageMeta';

interface Props {
  meta: HomePageMeta;
  services: Array<Service>;
}

const Home: NextPage = ({ meta, services }: Props) => {
  return (
    <Main colorInvert={true}>
      <HeroHeader colorInvert={true} scrollTo={'welcome'} {...meta.hero} />

      <Container>
        <Section id="welcome">
          <RichText document={meta.text} />
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
            {meta.reviewHeader}
          </Typography>
          <ReviewCarousel reviews={meta.reviews} />
        </Section>
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const meta = await getHomePageMeta();
  const services = await getServices();

  return {
    props: { meta, services },
  };
};

export default Home;
