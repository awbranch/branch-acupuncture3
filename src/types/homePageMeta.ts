import { Hero } from './hero';
import { Review } from './review';
import { PortableTextBlock } from 'sanity';

export type HomePageMeta = {
  hero: Hero;
  text: PortableTextBlock[];
  reviewHeader: string;
  reviews: Review[];
};
