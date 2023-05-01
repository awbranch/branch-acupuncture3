import { PortableTextBlock } from 'sanity';

export type Service = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  description: PortableTextBlock[];
  image: string;
  caption: string;
};
