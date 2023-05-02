import { PortableTextBlock } from 'sanity';
import { Quote } from '@/types/quote';

export type AboutPage = {
  name: string;
  bioImage: string;
  biography: PortableTextBlock[];
  certifications: PortableTextBlock[];
  education: PortableTextBlock[];
  history: PortableTextBlock[];
  officeImage: string;
  quote: Quote;
};
