export default {
  name: 'meta',
  title: 'Meta',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'titleShort',
      title: 'Title Short',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'cookTime',
      title: 'Cook Time',
      type: 'string',
    },
    {
      name: 'prepTime',
      title: 'Prep Time',
      type: 'string',
    },
    {
      name: 'totalTime',
      title: 'Total Time',
      type: 'string',
    },
    {
      name: 'recipeCategory',
      title: 'Recipe Category',
      type: 'string',
    },
  ]
}
