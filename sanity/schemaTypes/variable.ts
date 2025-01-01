import { defineField, defineType } from "sanity";

export const variable = defineType({
    name: "variable",
    title: "Variable",
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'tex',
            type: 'string',
        }),
        defineField({
            name: 'units',
            type: 'string',
        }),
        defineField({
            name: 'constant',
            type: 'boolean',
        }),
        defineField({
            name: 'value',
            type: 'string',
        }),
    ]
})