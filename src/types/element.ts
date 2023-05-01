import { PortableTextBlock } from 'sanity';

export type Element = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  description: PortableTextBlock[];
  image: string;
  caption: string;
};
