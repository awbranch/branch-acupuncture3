import { Hero } from './hero';
import { Element } from './element';
import { Quote } from '@/types/quote';

export type TheoryPage = {
  hero: Hero;
  elements: Element[];
  quote: Quote;
};
