const appointmentsPage = {
  name: 'appointmentsPage',
  title: 'Appointments Page',
  type: 'document',
  fields: [
    {
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    },
    {
      name: 'closed',
      title: 'Office Closed',
      type: 'boolean',
    },
    {
      name: 'closedMessage',
      title: 'Closed Message',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [],
          lists: [],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      hidden: ({ document }) => !document?.closed,
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{ type: 'question' }],
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
        title: 'Appointments Page',
      };
    },
  },
};

export default appointmentsPage;
