import type { NextPage, GetStaticProps } from 'next';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Main from '@/layouts/main/Main';
import Container from '@/components/Container';
import Section from '@/components/Section';
import QuoteBox from '@/components/QuoteBox';
import RichText from '@/components/RichText';
import { getTheoryPage } from '@/sanity/utils';
import { TheoryPage } from '@/types/theoryPage';
import HeroHeader from '@/components/HeroHeader';

const Theory: NextPage = ({ hero, elements, quote }: TheoryPage) => {
  return (
    <Main colorInvert={true}>
      <HeroHeader colorInvert={true} scrollTo={elements[0].slug} {...hero} />

      <Container>
        {elements.map((element) => (
          <Section key={element._id} id={element.slug}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h2">{element.name}</Typography>
              <RichText document={element.description} />
              <Box
                sx={{ mx: 'auto', mt: 2 }}
                component={'img'}
                display={'block'}
                src={element.image}
                width={250}
                height={250}
              />
              <Box sx={{ maxWidth: '250px', mx: 'auto', mb: 4 }}>
                <Typography component="div" variant="caption">
                  {element.caption}
                </Typography>
              </Box>
            </Box>
          </Section>
        ))}

        <QuoteBox text={quote.text} author={quote.author} />
      </Container>
    </Main>
  );
};

export const getStaticProps: GetStaticProps<TheoryPage> = async () => {
  const props = await getTheoryPage();

  return {
    props,
  };
};

export default Theory;
