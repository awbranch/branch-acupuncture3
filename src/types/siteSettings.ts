import { FormConfig } from '@/types/formConfig';

export type SiteSettings = {
  address: string;
  phone: string;
  mapLink: string;
  mapEmbedLink: string;
  contact: FormConfig;
  signup: FormConfig;
};
