import React from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'components/Container';

interface Props {
  image: string;
  children: React.ReactNode;
}

const Hero = ({ image, children }: Props): JSX.Element => {
  return (
    <Box
      position="relative"
      sx={{
        objectFit: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundImage: `url(${image})`,
      }}
      marginTop={-9}
      paddingTop={9}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: 1,
          height: 1,
          background: alpha('#161c2d', 0.4),
          zIndex: 1,
        }}
      />
      <Container position={'relative'} zIndex={2}>
        <Box>{children}</Box>
      </Container>
    </Box>
  );
};

export default Hero;
