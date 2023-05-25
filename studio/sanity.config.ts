import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Fortunato Cooks',

  projectId: 'upgqio2c',
  dataset: 'recipes',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
