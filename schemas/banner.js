export default {
  name: 'banner',
  title: 'Banner',
  type: 'object',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'cta',
      title: 'Call To Action',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    }
  ]
}
