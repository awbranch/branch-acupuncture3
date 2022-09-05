import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Footer = (): JSX.Element => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant={'subtitle2'} color="text.secondary" gutterBottom>
          &copy; Branch Acupuncture Center. {new Date().getFullYear()}. All
          rights reserved
        </Typography>
        <Typography variant={'caption'} color="text.secondary" component={'p'}>
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
