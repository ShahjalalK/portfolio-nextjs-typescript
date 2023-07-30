import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './sanityTheme'
import {colorInput} from '@sanity/color-input'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION!

export default defineConfig({
  basePath : "/studio",
  name: 'ShahjalalK',
  title: 'Shahjalalk',

  projectId,
  dataset,
  apiVersion,
  

  plugins: [deskTool(), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
  theme : myTheme
})
