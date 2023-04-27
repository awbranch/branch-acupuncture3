import React from 'react';
import Container from 'components/Container';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link';
import Link from '@mui/material/Link';

const Menu = [
  [
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Testimonials',
      href: '/#testimonials',
    },
    {
      name: 'Services',
      href: '/services',
    },
  ],
  [
    {
      name: 'Questions',
      href: '/appointments#questions',
    },
    {
      name: 'Contact',
      href: '/about#contact',
    },
    {
      name: 'Appointments',
      href: '/appointments',
    },
  ],
];

const Footer = (): JSX.Element => {
  return (
    <Box
      sx={{
        mt: 'auto',
      }}
    >
      <Container>
        <Box
          sx={{
            display: {
              sm: 'block',
              md: 'none',
              textAlign: 'center',
              margin: '0 auto',
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{ textTransform: 'uppercase', m: 0, p: 0 }}
          >
            Branch Acupuncture Center
          </Typography>
          <Box
            component={'img'}
            src={'/logo-red.svg'}
            width={50}
            sx={{ mt: 3 }}
          />
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ my: 3 }}>
            <Box component={'img'} src={'/logo-red.svg'} width={50} />
            <Typography
              variant="h3"
              sx={{ textTransform: 'uppercase', m: 0, p: 0 }}
            >
              Branch Acupuncture Center
            </Typography>
          </Stack>
          <Box sx={{ ml: 8.3 }}>
            <Grid container spacing={2} width="100%">
              {Menu.map((column, c) => (
                <Grid item xs={4} key={c}>
                  <Stack direction="column">
                    {column.map((row, r) => (
                      <Typography variant="body1" key={r}>
                        <Link
                          component={NextLink}
                          href={row.href}
                          sx={{
                            textDecoration: 'none',
                          }}
                        >
                          {row.name}
                        </Link>
                      </Typography>
                    ))}
                  </Stack>
                </Grid>
              ))}

              <Grid item xs={4}>
                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <Box
                    component="img"
                    src="/icons/globe-light.svg"
                    width={20}
                    sx={{ mt: '8px' }}
                  />
                  <Box>
                    <Link
                      sx={{ cursor: 'pointer' }}
                      underline="hover"
                      href="https://www.google.com/maps/place/633+Kreag+Rd,+Pittsford,+NY+14534/@43.061427,-77.473222,16z/data=!4m5!3m4!1s0x89d1347e53095137:0xd48f480a600885cf!8m2!3d43.061427!4d-77.4732222?hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Typography variant="body1">633 Kreag Road</Typography>
                      <Typography variant="body1">
                        Pittsford, NY 14534
                      </Typography>
                    </Link>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="flex-start">
                  <Box
                    component="img"
                    src="/icons/phone-light.svg"
                    width={20}
                    sx={{ mt: '8px' }}
                  />
                  <Box>
                    <Typography variant="body1">(585) 256-3980</Typography>
                  </Box>
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Typography
                  variant={'caption'}
                  color="text.secondary"
                  component={'p'}
                >
                  The information on this site is for educational purposes only.
                  This information is not intended to diagnose, treat, cure, or
                  prevent any disease and is not a substitute for professional
                  medical advice, diagnosis, or treatment. Please see a licensed
                  medical provider if you believe you may have a medical
                  condition.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
