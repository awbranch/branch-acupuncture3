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
          The information on this site is for educational purposes only. This
          information is not intended to diagnose, treat, cure, or prevent any
          disease and is not a substitute for professional medical advice,
          diagnosis, or treatment. Please see a licensed medical provider if you
          believe you may have a medical condition.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
