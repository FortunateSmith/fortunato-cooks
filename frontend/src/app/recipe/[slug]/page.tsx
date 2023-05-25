import client from "../../../../client";

// generate static params function used with dynamic route segments to statically generate routes at build time.
// replaces useStaticProps in NextJS 13

export async function generateStaticParams() {
  const paths = await client.fetch(
    `*[_type == "recipe" && defined(slug.current)][].slug.current`
  );
  console.log("Paths", paths);
  return paths.map((path: any) => ({ slug: path.slug }));
  // fallback: true,
}

export default function Page(props: any) {
  // const router = useRouter();
  const { name = "missing name" } = props.recipe;
  console.log("Ingredients *********", { name});
  return (
    <article>
      {/* <h1>{slug}</h1> */}
      <h1>{name}</h1>
      <p>{}</p>
    </article>
  );
}
