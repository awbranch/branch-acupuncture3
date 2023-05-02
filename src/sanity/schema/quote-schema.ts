const quote = {
  name: 'quote',
  title: 'Quote',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 4,
      description: 'The text of the quote.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
      description: 'The author of the quote.',
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'author',
    },
  },
};

export default quote;
