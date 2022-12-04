import * as yup from 'yup';

const message = {
  accounting: yup.string(),
  type: yup.string().trim().required(),
  name: yup.string().trim().required(),
  phone: yup.string().trim(),
  email: yup.string().trim().email().required(),
  message: yup.string().trim().required(),
};

const signup = {
  ...message,
  phone: yup.string().trim().required(),
};

export const messageSchema = yup.object(message);
export const signupSchema = yup.object(signup);
