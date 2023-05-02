import { PortableTextBlock } from 'sanity';

export type Hero = {
  title: string;
  description: PortableTextBlock[];
  image: string;
};
