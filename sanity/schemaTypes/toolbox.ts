import { defineField, defineType } from "sanity";

export const toolbox = defineType({
    name: 'toolbox',
    title: 'Toolbox',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
              source: "title",
            },
          }),
        defineField({
            name: 'description',
            type: 'text'
        }),
        defineField({
            name: 'image',
            type: 'url',
        }),
        defineField({
            name: 'author',
            type: 'reference',
            to: { type: 'author' }
        }),
        defineField({
            name: 'views',
            type: 'number'
        }),
        defineField({
            name: 'equations',
            type: 'equationItems',
            title: 'Items'
        }),
    ]
})