import {
  orderRankField,
  orderRankOrdering,
} from '@sanity/orderable-document-list';

const review = {
  name: 'review',
  title: 'Review',
  type: 'document',
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
    prepare(selection) {
      const { title, subtitle } = selection;
      return {
        title: title.substr(0, 20) + '...',
        subtitle,
      };
    },
  },
  // orderings: [
  //   {
  //     title: 'Name',
  //     name: 'nameAsc',
  //     by: [{ field: 'name', direction: 'asc' }],
  //   },
  //   {
  //     title: 'Name Desc',
  //     name: 'nameDesc',
  //     by: [{ field: 'name', direction: 'desc' }],
  //   },
  // ],
};

export default review;
