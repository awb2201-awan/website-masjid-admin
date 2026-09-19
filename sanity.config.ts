import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './src/schemaTypes'
import {structure} from './src/structure'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID
const dataset = process.env.SANITY_STUDIO_DATASET

if (!projectId || !dataset) {
  throw new Error('Set SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET before starting Studio.')
}

export default defineConfig({
  name: 'website-masjid-admin',
  title: 'Masjid Lathifah Admin',
  projectId,
  dataset,
  basePath: '/',
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: '2026-09-17'}),
  ],
  schema,
})
