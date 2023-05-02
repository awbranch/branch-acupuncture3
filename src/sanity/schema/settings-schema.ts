const settings = {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mapLink',
      title: 'Google Maps URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mapEmbedLink',
      title: 'Google Maps Embed URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contact',
      title: 'Contact',
      type: 'formConfig',
    },
    {
      name: 'signup',
      title: 'Signup',
      type: 'formConfig',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Settings Page',
      };
    },
  },
};

export default settings;
