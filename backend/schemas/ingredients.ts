// ingredients schema

export default {
  title: "Ingredient",
  name: "ingredients",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string"
    },
    {
      title: "1 Cup in Grams",
      name: "cupsToGrams",
      type: "number",
    }

  ]
}