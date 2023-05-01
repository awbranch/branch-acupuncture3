import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import aboutPage from '@/sanity/schema/about-page-schema';
import service from '@/sanity/schema/service-schema';
import review from '@/sanity/schema/review-schema';
import element from '@/sanity/schema/element-schema';
import question from '@/sanity/schema/question-schema';

const schemas = [aboutPage, service, review, element, question];
const singletons = { aboutPage: '0dc83a8e-469f-4579-9aa2-77b0a8663da1' };
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
            schemas.map((s) =>
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

    deskTool(),
    visionTool({
      defaultDataset: 'production',
      defaultApiVersion: 'v2021-10-21',
    }),
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
