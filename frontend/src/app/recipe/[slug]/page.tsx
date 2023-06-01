import client from "../../../../client";
import groq from "groq";


// pulls list of ingredient names: TO BE UPDATED WITH REFS FROM RELATIONAL DB
async function getRecipeIngredients() {
  const query = groq`*[_type == 'recipe' && _id == "0fafcc3f-fd01-4361-9db1-2ac0d971d39e"][0]{name, _id, ingredient[]{amount, unit, ingredient->{name}}}`;
  const ingredientList = await client.fetch(query);
  // console.log("INGREDIENT LIST", ingredientList.ingredient.name);
  return ingredientList;
}

// async function getRecipeName() {
//   const recipeName = await client.fetch(`*[_type == 'recipe' && defined(slug.current)][].name`);
//   console.log("RecipeName ****", recipeName.map((r: any) => ({name: r.name})))
//   return recipeName;
// }

// generate static params function used with dynamic route segments to statically generate routes at build time.
// replaces useStaticProps in NextJS 13

export async function generateStaticParams() {
  // const idQuery = groq`*[_type == "recipe" && defined(slug.current)][]{_id}`;
  const query = groq`*[_type == "recipe" && defined(slug.current)]{_id, "slug": slug.current}`;
  const paths = await client.fetch(query);

  console.log("PATHS: ", paths)
  return paths.map((path: any) => ({ slug: path.slug, recipeID: path.id }));
  // fallback: true,
}

export default async function Page({ params }: any) {
  const { slug, recipeID } = params;
  const ingredientData = await getRecipeIngredients();

  console.log({slug});

  // const [ingredientList] = await Promise.all([ingredientData]);
  // console.log("Recipe::::", recipe, "Ingredients *********", ingredientList.ingredient.map((obj:any) => obj.name));
  return (
    <article>
      {/* <h1>{slug}</h1> */}
      <h1>{ingredientData.name}</h1>
      <h2>Ingredients</h2>
      {ingredientData.ingredient.map((i: any) => {
        // console.log(i);
        return (
          <ul key={i.id}>
            <li>
              <span>
                {i.amount} {i.unit} of {i.ingredient.name}
              </span>
            </li>
          </ul>
        );
      })}
    </article>
  );
}
