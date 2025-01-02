import { defineField, defineType } from "sanity";

export const category = defineType({
    name: "category",
    title: "Category",
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
            name: 'discipline',
            type: 'reference',
            to: {type: 'discipline'}
        }),
        defineField({
            name: 'image',
            type: 'url',
        }),
        defineField({
            name: 'top_contributors',
            type: 'array',
            of: [{type: 'string'}],
        }),
    ]
})