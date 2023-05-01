const question = {
  name: 'question',
  title: 'Question',
  type: 'document',
  fields: [
    {
      name: 'question',
      title: 'Question',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'question' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Quote', value: 'blockquote' }],
          lists: [{ title: 'Bulleted List', value: 'bullet' }],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  orderings: [
    {
      title: 'Oldest to Newest',
      name: 'createdAsc',
      by: [{ field: '_createdAt', direction: 'asc' }],
    },
  ],
};

export default question;
