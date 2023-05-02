import { PortableTextBlock } from 'sanity';

export type AboutPageMeta = {
  name: string;
  bioImage: string;
  biography: PortableTextBlock[];
  certifications: PortableTextBlock[];
  education: PortableTextBlock[];
  history: PortableTextBlock[];
  officeImage: string;
};
