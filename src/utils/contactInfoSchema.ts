import * as yup from 'yup';

const contactInfoSchema = yup.object({
  accounting: yup.string(),
  name: yup.string().trim().required(),
  email: yup.string().trim().email().required(),
  message: yup.string().trim().required(),
});

export default contactInfoSchema;
