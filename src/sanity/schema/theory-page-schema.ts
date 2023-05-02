import hero from './hero-schema';

const theoryPage = {
  name: 'theoryPage',
  title: 'Theory Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'elements',
      title: 'Elements',
      type: 'array',
      of: [{ type: 'element' }],
    },
    {
      name: 'quote',
      title: 'Quote',
      type: 'quote',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Theory Page',
      };
    },
  },
};

export default theoryPage;
