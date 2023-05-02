import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy';
import homePage from '@/sanity/schema/home-page-schema';
import servicesPage from '@/sanity/schema/services-page-schema';
import theoryPage from '@/sanity/schema/theory-page-schema';
import aboutPage from '@/sanity/schema/about-page-schema';
import appointmentsPage from '@/sanity/schema/appointments-page-schema';
import hero from '@/sanity/schema/hero-schema';
import service from '@/sanity/schema/service-schema';
import review from '@/sanity/schema/review-schema';
import element from '@/sanity/schema/element-schema';
import question from '@/sanity/schema/question-schema';
import quote from '@/sanity/schema/quote-schema';
import settings from '@/sanity/schema/settings-schema';
import formConfig from '@/sanity/schema/form-config-schema';

const schemas = [
  homePage,
  servicesPage,
  theoryPage,
  aboutPage,
  appointmentsPage,
  settings,
  hero,
  service,
  review,
  element,
  question,
  quote,
  formConfig,
];

const singletons = {
  homePage: 'af1cafb9-24fb-4b64-864e-781175f9e96f',
  servicesPage: 'bbed81a3-c4d7-4663-95a9-e12852cf3c14',
  theoryPage: 'ebfcc38f-418a-4504-be1a-777779814d5a',
  aboutPage: '0dc83a8e-469f-4579-9aa2-77b0a8663da1',
  appointmentsPage: 'f2e11413-fa54-4ba3-81d0-f8607baf641b',
  settings: '4740d643-9dea-452c-9e45-5044aec45f0b',
};

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const isSingleton = (schemaName) => !!singletons[schemaName];

const config = defineConfig({
  projectId: '5wlp5gt3',
  dataset: 'production',
  title: 'Branch Acupuncture Admin',
  apiVersion: '2023-04-24',

  // We can set to false since we're compiling statically
  // see https://www.sanity.io/help/js-client-cdn-configuration
  useCdn: false,

  basePath: '/admin',
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items(
            schemas
              .filter((s) => s.type === 'document')
              .map((s) =>
                isSingleton(s.name)
                  ? S.listItem()
                      .title(s.title)
                      .id(s.name)
                      .child(
                        S.document()
                          .schemaType(s.name)
                          .documentId(singletons[s.name]),
                      )
                  : S.documentTypeListItem(s.name).title(s.title),
              ),
          ),
    }),
    visionTool({
      defaultDataset: 'production',
      defaultApiVersion: 'v2021-10-21',
    }),
    vercelDeployTool(),
  ],
  schema: {
    types: schemas,

    templates: (templates) =>
      templates.filter(({ schemaType }) => !isSingleton(schemaType)),
  },
  document: {
    actions: (input, context) =>
      isSingleton(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});

export default config;
