import { PortableTextBlock } from 'sanity';

export type Question = {
  _id: string;
  _createdAt: Date;
  question: string;
  slug: string;
  answer: PortableTextBlock[];
};
