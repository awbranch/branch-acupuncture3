import React from 'react';
import Box from '@mui/material/Box';
import Hero from '@/components/Hero';
import Typography from '@mui/material/Typography';
import RichText from '@/components/RichText';
import Button from '@mui/material/Button';
import { smoothScrollTo } from '@/utils/utils';
import { PortableTextBlock } from 'sanity';

interface Props {
  image: string;
  title: string;
  description: PortableTextBlock[];
  colorInvert: boolean;
  scrollTo: string;
}

const HeroHeader = ({
  image,
  title,
  description,
  colorInvert,
  scrollTo,
}: Props): JSX.Element => {
  return (
    <Hero image={image}>
      <Typography
        variant="h1"
        sx={colorInvert ? { color: 'common.white' } : undefined}
      >
        {title}
      </Typography>
      <Box>
        <RichText document={description} colorInvert={true} />
      </Box>
      <Box component="div" sx={{ m: 5, textAlign: 'center' }}>
        <Button
          component={'a'}
          variant="contained"
          color="secondary"
          size="large"
          sx={{ textTransform: 'uppercase' }}
          onClick={() => smoothScrollTo(scrollTo, 80)}
        >
          More
        </Button>
      </Box>
    </Hero>
  );
};

export default HeroHeader;
