import { Hero } from './hero';
import { Service } from './service';
import { Quote } from '@/types/quote';

export type ServicesPage = {
  hero: Hero;
  services: Service[];
  quote: Quote;
};
