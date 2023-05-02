import { Hero } from './hero';
import { Question } from './question';
import { PortableTextBlock } from 'sanity';
import { Quote } from '@/types/quote';

export type AppointmentsPage = {
  hero: Hero;
  closed: boolean;
  closedMessage: PortableTextBlock[];
  questions: Question[];
  quote: Quote;
};
