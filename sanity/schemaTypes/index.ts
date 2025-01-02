import { type SchemaTypeDefinition } from 'sanity'
import { author } from './author'
import { equation } from './equation'
import { toolbox } from './toolbox'
import { variable } from './variable'
import { category } from './category'
import { discipline } from './discipline'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, equation, toolbox, variable, category, discipline],
}
