import { useRouter } from "next/router";

const Recipe = (slug: string) => {
  const router = useRouter();

  return (
    <article>
      <h1>{slug}</h1>
    </article>
  );
}

export default Recipe;
