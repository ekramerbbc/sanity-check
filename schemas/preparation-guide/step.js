export default {
  name: 'step',
  title: 'Step',
  type: 'object',
  fields: [
    {
      name: 'description',
      title: 'Description',
      type: 'blockContent',
    },
    {
      name: 'stepImage',
      title: 'Step Image',
      type: 'image',
    },
  ],
  preview: {
    select: {
      title: 'description',
      media: 'stepImage',
    },
  },
}
