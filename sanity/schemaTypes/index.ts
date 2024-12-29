import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { equation } from './equation'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, equation],
}
