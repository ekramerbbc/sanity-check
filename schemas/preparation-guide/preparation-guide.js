export default {
  name: 'preparationGuide',
  title: 'Preparation Guide',
  type: 'document',
  fields: [
    {
      name: 'visible',
      title: 'Visible',
      type: 'boolean',
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'meta',
      title: 'Meta',
      type: 'meta',
    },
    {
      name: 'indexImage',
      title: 'Index Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'string',
    },
    {
      name: 'vimeoId',
      title: 'Vimeo Id',
      type: 'string',
    },
    {
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'ingredient' } }]
    },
    {
      name: 'ingredientsNotes',
      title: 'Ingredients Notes',
      type: 'blockContent',
    },
    {
      name: 'equipment',
      title: 'Equipment',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'equipment' } }]
    },
    {
      name: 'background',
      title: 'Background',
      type: 'blockContent',
    },
    {
      name: 'recommendedProducts',
      title: 'Recommended Products',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'recommendedProduct' } }]
    },
    {
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [{ type: 'step' }]
    },
    {
      name: 'footer',
      title: 'Footer',
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
          name: 'copy',
          title: 'Copy',
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
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'indexImage',
    },
  },
}
