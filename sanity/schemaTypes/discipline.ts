import { defineField, defineType } from "sanity";

export const discipline = defineType({
    name: "discipline",
    title: "Discipline",
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
            name: 'image',
            type: 'url',
        }),
    ]
})