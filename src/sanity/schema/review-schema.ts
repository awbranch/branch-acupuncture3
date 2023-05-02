const review = {
  name: 'review',
  title: 'Review',
  type: 'object',
  fields: [
    {
      name: 'text',
      title: 'Text',
      type: 'text',
      rows: 6,
      description: 'The text of the review.',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The person giving the review.',
      validation: (Rule) => Rule.required(),
    },
    // orderRankField({ type: 'category' }),
  ],
  preview: {
    select: {
      title: 'text',
      subtitle: 'name',
    },
  },
};

export default review;
