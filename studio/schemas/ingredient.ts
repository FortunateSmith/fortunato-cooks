import {BsListColumns} from "react-icons/Bs"

export default {
  title: "Ingredient",
  name: "ingredient",
  type: "document",
  icon: BsListColumns,
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
    },
    {
      title: "Options",
      name: "options",
      type: "string",
    }

  ]
}