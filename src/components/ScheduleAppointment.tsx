import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Section from 'components/Section';
import NextLink from 'next/link';

const ScheduleAppointment = (): JSX.Element => (
  <Section id="schedule-appointment">
    <Box component="div" sx={{ textAlign: 'center' }}>
      <NextLink href="/appointments">
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ textTransform: 'uppercase' }}
        >
          Schedule an Appointment
        </Button>
      </NextLink>
    </Box>
  </Section>
);

export default ScheduleAppointment;
