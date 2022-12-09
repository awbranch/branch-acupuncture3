import type { NextPage } from 'next';
import Section from 'components/Section';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import path from 'path';
import { promises as fs } from 'fs';
import Hero from 'components/Hero';
import QuoteBox from 'components/QuoteBox';
import Button from '@mui/material/Button';
import { smoothScrollTo } from '../utils/utils';

interface Props {
  services: Array<Service>;
}

const Services: NextPage = ({ services }: Props) => {
  return (
    <Main colorInvert={true}>
      <Hero image="/hero/services.jpg">
        <Typography variant="h1" sx={{ color: 'common.white' }}>
          East Asian Medicine
        </Typography>
        <Typography variant="body1" sx={{ color: 'common.white' }} paragraph>
          East Asian Medicine (EAM) is an ancient system of healing that evolved
          over thousands of years. It includes acupuncture, herbal medicine,
          manual techniques, moxibustion, and nutrition counseling. The emphasis
          in East Asian Medicine lies in understanding the root causes of
          illness and imbalances in our bodies.
        </Typography>
        <Typography variant="body1" sx={{ color: 'common.white' }} paragraph>
          EAM treatments have been used for centuries to alleviate pain, treat
          disease, and improve general health. Clinical research shows that EAM
          treats physical ailments and can reduce the risk of developing them in
          the future. East Asian medicine is personalized – what works for one
          person may not work for another because our bodies and life
          experiences are unique. Because East Asian treatment is so tailored,
          safe, and minimally invasive, it benefits people of all ages and all
          health situations.
        </Typography>

        <Box component="div" sx={{ m: 5, textAlign: 'center' }}>
          <Button
            component={'a'}
            variant="contained"
            color="secondary"
            size="large"
            sx={{ textTransform: 'uppercase' }}
            onClick={() => smoothScrollTo('services', 0)}
          >
            More
          </Button>
        </Box>
      </Hero>
      <Container id="services">
        {services.map((service) => (
          <Section key={service.id} id={service.id}>
            <Typography variant="h2">{service.name}</Typography>
            <Typography variant="body1">{service.description}</Typography>
            <Box
              component={'img'}
              display={'block'}
              src={`services/${service.image}`}
              height={1}
              width={1}
            />
            <Typography
              variant="caption"
              display={'block'}
              sx={{ mt: '2px', p: 0 }}
            >
              {service.caption}
            </Typography>
          </Section>
        ))}

        <QuoteBox
          text="Every human being is the author of their own health or disease"
          author="Buddha"
        />
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

export default Services;
