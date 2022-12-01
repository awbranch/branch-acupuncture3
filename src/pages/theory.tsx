import type { NextPage } from 'next';
import Main from 'layouts/main/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import path from 'path';
import { promises as fs } from 'fs';
import Section from '../components/Section';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Hero from 'components/Hero';

interface Props {
  elements: Array<Element>;
}

const Theory: NextPage = ({ elements }: Props) => {
  const theme = useTheme();

  return (
    <Main colorInvert={true}>
      <Hero image="/hero/theory.jpg">
        <Typography variant="h1" sx={{ color: 'common.white' }}>
          Five Element Theory
        </Typography>
        <Typography variant="body1" sx={{ color: 'common.white' }} paragraph>
          East Asian Medicine views the body as a small universe with five major
          interconnected systems. Each system is represented by an element:
          Wood, Fire, Earth, Metal, and Water. Five elements theory is a
          framework used in East Asian Medicine to explain how the world world
          and weather around us influence us and how body organs Each element is
          associated with specific body organs, color, taste, emotion, and year
          season, among other things.{' '}
        </Typography>
        <Typography variant="body1" sx={{ color: 'common.white' }} paragraph>
          From an East Asian Medicine perspective, understanding which of the
          five elements has a dominant effect on you can give you insight into
          your strengths and weaknesses. When our body is in balance, these
          systems flow smoothly. When one or more systems fall out of balance,
          symptoms emerge, resulting in illness. Acupuncture and East Asian
          modalities can restore the proper flow between systems, relieving
          ailments and imbalances.{' '}
        </Typography>
      </Hero>
      <Container>
        {elements.map((element) => (
          <Section key={element.id} id={element.id}>
            <Typography variant="h2">{element.name}</Typography>
            <Typography variant="body1">{element.description}</Typography>
            <Box
              sx={{
                width: '1000px',
                height: '400px',
                background: theme.palette.grey.A200,
              }}
            />
            <Typography variant="caption">{element.caption}</Typography>
          </Section>
        ))}
      </Container>
    </Main>
  );
};

export async function getServerSideProps() {
  const file = path.join(process.cwd(), 'data', 'elements.json');
  const elements = JSON.parse(await fs.readFile(file, 'utf8'));

  return {
    props: { elements },
  };
}

export default Theory;
