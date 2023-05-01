import { FormType } from '@/types/formType';

export type ContactInfo = {
  type: FormType;
  accounting: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
};
