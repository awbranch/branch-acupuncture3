import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { messageSchema, signupSchema } from 'utils/contactInfoSchema';
import type { FormType } from '@/types/formType';
import type { ContactInfo } from '@/types/contact';

interface Props {
  type: FormType;
  onSubmit: (info: ContactInfo, clearForm: () => void) => Promise<void>;
}

const Form = ({ type, onSubmit }: Props): JSX.Element => {
  const initialValues: ContactInfo = {
    accounting: '',
    type: type,
    name: '',
    phone: '',
    email: '',
    message: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: type === 'message' ? messageSchema : signupSchema,
    onSubmit: async (values, { resetForm }) => {
      await onSubmit(values as ContactInfo, () => {
        resetForm({ values: { ...initialValues } });
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* Move both the honeypot and form type fields offscreen */}
      <Box sx={{ position: 'fixed', top: 3000 }}>
        {/* This is a honeypot field to catch bots. If text gets enetered here, something is wrong */}
        <TextField
          sx={{ height: 54 }}
          label="Accounting *"
          {...getFieldProps('accounting', formik)}
        />
        {/* This field just identifies if this is a contact or new client signup form */}
        <TextField
          sx={{ height: 54 }}
          label="Type"
          {...getFieldProps('type', formik)}
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
        {type == 'signup' && (
          <Grid item xs={12}>
            <TextField
              label="Phone *"
              variant="outlined"
              color="primary"
              size="medium"
              fullWidth
              {...getFieldProps('phone', formik)}
            />
          </Grid>
        )}
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

export default Form;
