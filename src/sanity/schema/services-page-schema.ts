const servicesPage = {
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [{ type: 'service' }],
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
        title: 'Services Page',
      };
    },
  },
};

export default servicesPage;
