import React from 'react';
import Box from '@mui/material/Box';

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Section = ({ children, ...rest }: Props): JSX.Element => (
  <Box component="section" sx={{ mt: '20px', pt: '60px' }} {...rest}>
    {children}
  </Box>
);

export default Section;
