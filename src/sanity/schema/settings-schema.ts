const settings = {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
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
