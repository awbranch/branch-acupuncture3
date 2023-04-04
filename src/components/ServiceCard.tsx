import React from 'react';
import NextLink from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from '@mui/material/Link';

interface Props {
  title: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, image, link }: Props): JSX.Element => (
  <NextLink href={link} passHref>
    <Link sx={{ textDecoration: 'none !important' }}>
      <Box
        padding={2}
        bgcolor={'background.paper'}
        borderRadius={2}
        overflow={'hidden'}
        boxShadow={3}
        marginBottom={2}
      >
        <Box
          component={LazyLoadImage}
          effect="blur"
          src={image}
          alt={title}
          height={1}
          width={1}
          sx={{
            transition: 'opacity, transform ease 0.3s !important',
            filter: 'grayscale(100%)',
            '&:hover': {
              transform: 'scale(1.02)',
              filter: 'none',
            },
          }}
        />
        <Box display={'flex'} justifyContent={'center'}>
          <Typography variant={'body1'}>{title}</Typography>
        </Box>
      </Box>
    </Link>
  </NextLink>
);

export default ServiceCard;
