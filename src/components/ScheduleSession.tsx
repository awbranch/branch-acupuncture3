import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Section from 'components/Section';
import NextLink from 'next/link';

const ScheduleSession = (): JSX.Element => (
  <Section>
    <Box component="div" sx={{ textAlign: 'center' }}>
      <NextLink href={'/appointments#schedule-session'} passHref>
        <Button
          component={'a'}
          variant="contained"
          color="primary"
          size="large"
          sx={{ textTransform: 'uppercase' }}
        >
          Schedule a Session
        </Button>
      </NextLink>
    </Box>
  </Section>
);

export default ScheduleSession;
