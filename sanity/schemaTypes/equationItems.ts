import { defineType } from "sanity";

export const equationItems = defineType({
    name: 'equationItems',
    type: 'array',
    title: 'Equation Items',
    of: [
        {
            type: 'reference',
            to: {type: 'equation'}
        }
    ]
});