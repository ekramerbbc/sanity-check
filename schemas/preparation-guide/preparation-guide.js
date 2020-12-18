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
      type: 'localizedString',
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
      type: 'localizedString',
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
      type: 'banner'
    },
  ],
  preview: {
    select: {
      title: 'name.en',
      media: 'indexImage',
    },
  },
}
