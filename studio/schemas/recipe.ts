import {BiDockTop} from "react-icons/Bi"


export default {
  name: 'recipe',
  title: 'Recipe',
  type: 'document',
  icon: BiDockTop,
  fields: [
    {
      name: 'name',
      title: 'Recipe Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Recipe Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ingredient',
      title: 'Ingredient',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Ingredient',
              name: 'ingredient',
              type: 'reference',
              to: [{type: 'ingredient'}],
            },
            {
              name: 'amount',
              title: 'Amount',
              type: 'number',
            },
            {
              name: 'unit',
              title: 'Unit',
              type: 'string',
              options: {
                list: ['grams', 'cup', 'Tbsp', 'tsp'],
              },
            },
            {
              name: 'obscureAmounts',
              title: 'Obscure Amounts',
              type: 'string',
              options: {
                list: ['smidgen', 'pinch', 'dash'],
              },
            },
          ],
          preview: {
            select: {
              title: 'ingredient.name',
              name: 'ingredient.name',
              amount: 'amount',
              unit: 'unit',
            },
            prepare({title, subtitle, amount, unit}: any) {
              return {
                title,
                subtitle: `${amount} ${unit}`,
              }
            },
          },
        },
      ],
    },
    {
      name: 'method',
      title: 'Method',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
