import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from 'components/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import contactInfoSchema from 'utils/contactInfoSchema';

type Status = 'start' | 'processing' | 'ok' | 'error';

const ContactUs = (): JSX.Element => {
  const theme = useTheme();
  const router = useRouter();
  const [status, setStatus] = useState<Status>('start');
  const [statusMessage, setStatusMessage] = useState('');

  const initialValues: ContactInfo = {
    accounting: '',
    name: '',
    email: '',
    message: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: contactInfoSchema,
    onSubmit: async (values) => {
      await onSubmit(values as ContactInfo);
    },
  });

  const onSubmit = async (values: ContactInfo) => {
    setStatus('processing');
    let res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
    try {
      if (res.ok) {
        setStatus('ok');
      } else {
        setStatus('error');
      }
      let json = await res.json();
      if (json && json.message) {
        setStatusMessage(json.message);
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage(err.toString());
    }
  };

  const onRetry = async () => {
    setStatus('start');
  };

  const onCancel = async () => {
    await router.push('/');
  };

  return (
    <Box sx={{ background: theme.palette.grey.A200 }}>
      <Container>
        <Typography variant="h2">Contact Us</Typography>
        <Typography variant="body1">
          Pellentesque urna nulla, tincidunt quis tempus sed, lacinia vel urna.
          Duis orci justo, ultricies et gravida ac, porttitor et nulla.
          Suspendisse eget dignissim massa, at rutrum ex. Integer ut ante at
          libero dictum dapibus condimentum ac sapien.{' '}
        </Typography>

        <Box sx={{ display: status === 'start' ? 'block' : 'none', mt: 4 }}>
          <form onSubmit={formik.handleSubmit}>
            {/* This is a honeypot field to catch bots. If text gets enetered here, something is wrong */}
            <Box sx={{ position: 'fixed', top: 3000 }}>
              <TextField
                sx={{ height: 54 }}
                label="Accounting *"
                {...getFieldProps('accounting', formik)}
              />
            </Box>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <TextField
                  label="Name *"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  fullWidth
                  {...getFieldProps('name', formik)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email *"
                  variant="outlined"
                  color="primary"
                  size="medium"
                  fullWidth
                  {...getFieldProps('email', formik)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Message *"
                  multiline
                  rows={10}
                  variant="outlined"
                  color="primary"
                  size="medium"
                  fullWidth
                  {...getFieldProps('message', formik)}
                />
              </Grid>

              <Grid item container justifyContent={'right'} xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
        {status === 'processing' ? (
          <Box>Processing</Box>
        ) : status === 'error' ? (
          <Box>
            <Typography variant={'h1'}>Error Message</Typography>
            <Typography variant={'body1'}>{statusMessage}</Typography>
          </Box>
        ) : status === 'ok' ? (
          <Box>
            <Typography variant={'h1'}>Success Message</Typography>
            <Typography variant={'body1'}>Sent Message</Typography>
          </Box>
        ) : (
          <></>
        )}
      </Container>
    </Box>
  );
};

const getFieldProps = (name: string, formik: any) => {
  return {
    id: name,
    name: name,
    value: formik.values[name],
    onChange: formik.handleChange,
    error: formik.touched[name] && Boolean(formik.errors[name]),
    helperText: formik.touched[name] && formik.errors[name],
  };
};

export default ContactUs;
