import { createClient, groq } from 'next-sanity';
import { HomePageMeta } from '@/types/homePageMeta';
import { AboutPageMeta } from '@/types/aboutPageMeta';
import { Service } from '@/types/service';
import { Review } from '@/types/review';
import { Element } from '@/types/element';
import { Qualification } from '@/types/qualification';
import { Question } from '@/types/question';

function getClient() {
  return createClient({
    projectId: '5wlp5gt3',
    dataset: 'production',
    apiVersion: '2021-10-21',
  });
}

export async function getServices(): Promise<Service[]> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "service"]{
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          description,
          "image": image.asset->url,
          caption
        } | order(_createdAt asc)`,
  );
}

export async function getReviews(): Promise<Review[]> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "review"]{
          _id,
          _createdAt,
          name,
          text
        }`,
  );
}

export async function getElements(): Promise<Element[]> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "element"]{
          _id,
          _createdAt,
          name,
          "slug": slug.current,
          description,
          "image": image.asset->url,
          caption
        } | order(_createdAt asc)`,
  );
}

export async function getQualifications(): Promise<Qualification[]> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "qualification"]{
          _id,
          _createdAt,
          text,
          type,
        } | order(_createdAt asc)`,
  );
}

export async function getQuestions(): Promise<Question[]> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "question"]{
          _id,
          _createdAt,
          question,
          "slug": slug.current,
          answer
        } | order(_createdAt asc)`,
  );
}

export async function getHomePageMeta(): Promise<HomePageMeta> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "homePage"][0]{
          hero{
            title,
            description,
            "image":image.asset->url,
          },
          text,
          reviewHeader,
          reviews[]{
            name,
            text
          }
        }`,
  );
}

export async function getAboutPageMeta(): Promise<AboutPageMeta> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "aboutPage"][0]{
          name,
          "bioImage": bioImage.asset->url,
          biography,
          certifications,
          education,
          history,
          "officeImage": officeImage.asset->url
        }`,
  );
}
