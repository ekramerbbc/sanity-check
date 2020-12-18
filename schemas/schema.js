// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import localizedString from './localizedString'

// We import object and document schemas
import banner from './banner'
import blockContent from './blockContent'
import equipment from './preparation-guide/equipment'
import ingredient from './preparation-guide/ingredient'
import meta from './preparation-guide/meta'
import preparationGuide from './preparation-guide/preparation-guide'
import recommendedProduct from './preparation-guide/recommended-product'
import step from './preparation-guide/step'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    localizedString,
    equipment,
    ingredient,
    preparationGuide,
    recommendedProduct,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    banner,
    blockContent,
    meta,
    step,
  ]),
})
