import type { NextPage, GetStaticProps } from 'next';
import Main from '@/layouts/main/Main';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import QuoteBox from '@/components/QuoteBox';
import RichText from '@/components/RichText';
import { getServicesPage } from '@/sanity/utils';
import { ServicesPage } from '@/types/servicesPage';
import HeroHeader from '@/components/HeroHeader';

const Services: NextPage = ({ hero, services, quote }: ServicesPage) => {
  return (
    <Main colorInvert={true}>
      <HeroHeader colorInvert={true} scrollTo={services[0].slug} {...hero} />

      <Container>
        {services.map((service) => (
          <Section key={service._id} id={service.slug}>
            <Typography variant="h2">{service.name}</Typography>
            <RichText document={service.description} />
            <Box
              component={'img'}
              display={'block'}
              src={`${service.image}`}
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

        <QuoteBox text={quote.text} author={quote.author} />
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<ServicesPage> = async () => {
  const props = await getServicesPage();

  return {
    props,
  };
};

export default Services;
