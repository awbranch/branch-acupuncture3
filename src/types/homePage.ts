import { Hero } from './hero';
import { Review } from './review';
import { PortableTextBlock } from 'sanity';

export type HomePage = {
  hero: Hero;
  text: PortableTextBlock[];
  reviewHeader: string;
  reviews: Review[];
};
