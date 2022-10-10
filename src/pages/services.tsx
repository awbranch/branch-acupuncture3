import type { NextPage } from 'next';
import Section from 'components/Section';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import path from 'path';
import { promises as fs } from 'fs';
import { useTheme } from '@mui/material/styles';

interface Props {
  services: Array<Service>;
}

const Services: NextPage = ({ services }: Props) => {
  const theme = useTheme();
  return (
    <Main>
      <Container>
        <Section>
          <Typography variant="h1">Services</Typography>
          <Typography variant="body1" paragraph>
            East Asian Medicine (EAM) is an ancient system of healing that
            evolved over thousands of years. It includes acupuncture, herbal
            medicine, manual techniques, moxibustion, and nutrition counseling.
            The emphasis in East Asian Medicine lies in understanding the root
            causes of illness and imbalances in our bodies.
          </Typography>
          <Typography variant="body1" paragraph>
            EAM treatments have been used for centuries to alleviate pain, treat
            disease, and improve general health. Clinical research shows that
            EAM treats physical ailments and can reduce the risk of developing
            them in the future. East Asian medicine is personalized – what works
            for one person may not work for another because our bodies and life
            experiences are unique. Because East Asian treatment is so tailored,
            safe, and minimally invasive, it benefits people of all ages and all
            health situations.
          </Typography>
        </Section>

        {services.map((service) => (
          <Section key={service.id} id={service.id}>
            <h2>{service.name}</h2>
            <Typography variant="body1">{service.description}</Typography>
            <Box
              sx={{
                width: '1000px',
                height: '400px',
                background: theme.palette.grey.A200,
              }}
            />
            <Typography variant="caption">{service.caption}</Typography>
          </Section>
        ))}
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
