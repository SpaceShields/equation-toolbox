import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { equation } from './equation'
import { equationItems } from './equationItems'
import { toolbox } from './toolbox'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, equation, equationItems, toolbox],
}
