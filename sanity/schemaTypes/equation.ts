import { defineField, defineType } from "sanity";

export const equation = defineType({
    name: "equation",
    title: "Equation",
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'views',
            type: 'number',
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'category',
            type: 'string',
        }),
        defineField({
            name: 'tex',
            type: 'string',
        }),
        defineField({
            name: 'history',
            type: 'text',
        }),
        defineField({
            name: 'year_derived',
            type: 'string',
        }),
    ]
})