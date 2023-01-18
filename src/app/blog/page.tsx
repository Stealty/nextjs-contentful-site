import Header from "@/components/organisms/Header/Header";
import { createClient } from "contentful";

export default async function Page() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const product = await client.getEntries("post");
  console.log(product);
  return (
    <>
      <Header />
    </>
  );
}
