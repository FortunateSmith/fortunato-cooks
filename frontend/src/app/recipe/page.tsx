import { useRouter } from "next/router";

const Recipe = () => {
  const router = useRouter();

  return (
    <article>
      <h1>{router.query.slug}</h1>
    </article>
  );
}

export default Recipe;
