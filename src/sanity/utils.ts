import { createClient, groq } from 'next-sanity';
import { HomePage } from '@/types/homePage';
import { AboutPage } from '@/types/aboutPage';
import { ServicesPage } from '@/types/servicesPage';
import { TheoryPage } from '@/types/theoryPage';
import { AppointmentsPage } from '@/types/appointmentsPage';
import { SiteSettings } from '@/types/siteSettings';

function getClient() {
  return createClient({
    projectId: '5wlp5gt3',
    dataset: 'production',
    apiVersion: '2021-10-21',
  });
}

export async function getHomePage(): Promise<HomePage> {
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

export async function getServicesPage(): Promise<ServicesPage> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "servicesPage"][0]{
          hero{
            title,
            description,
            "image":image.asset->url,
          },
          services[]{
            _id,
            name,
            slug,
            description,
            "image": image.asset->url,
            caption
          },
          quote{
            text,
            author
          }
        }`,
  );
}

export async function getTheoryPage(): Promise<TheoryPage> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "theoryPage"][0]{
          hero{
            title,
            description,
            "image":image.asset->url,
          },
          elements[]{
            _id,
            name,
            slug,
            description,
            "image": image.asset->url,
            caption
          },
          quote{
            text,
            author
          }
        }`,
  );
}

export async function getAboutPage(): Promise<AboutPage> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "aboutPage"][0]{
          name,
          "bioImage": bioImage.asset->url,
          biography,
          certifications,
          education,
          history,
          "officeImage": officeImage.asset->url,
          quote{
            text,
            author
          }
        }`,
  );
}

export async function getAppointmentsPage(): Promise<AppointmentsPage> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "appointmentsPage"][0]{
          hero{
            title,
            description,
            "image":image.asset->url,
          },
          closed,
          closedMessage,
          questions[]{
            _id,
            question,
            slug,
            answer
          },
          quote{
            text,
            author
          }
        }`,
  );
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const client = getClient();
  return client.fetch(
    groq`*[_type == "settings"][0]{
          address,
          phone,
          mapLink,
          mapEmbedLink,
          contact{
            instructions,
            confirmation,
            salutation
          },
          signup{
            instructions,
            confirmation,
            salutation
          }
        }`,
  );
}
