import { PortableTextBlock } from 'sanity';

export type AboutPage = {
  _id: string;
  _createdAt: Date;
  name: string;
  bioImage: string;
  biography: PortableTextBlock[];
  certifications: PortableTextBlock[];
  education: PortableTextBlock[];
  history: PortableTextBlock[];
  officeImage: string;
};
