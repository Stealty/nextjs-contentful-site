import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import Title from "@/components/atoms/Title/Title";
import ArticleCard from "@/components/molecules/ArticleCard/ArticleCard";
import Section from "@/components/Templates/Section/Section";
import { createClient, EntryFields } from "contentful";

interface BlogPost {
  image: {
    fields: {
      file: {
        url: EntryFields.Text;
      };
      description: EntryFields.Text;
    };
  };
  author: {
    fields: {
      name: EntryFields.Text;
    };
  };
  title: {
    content: [
      {
        content: [
          {
            value: EntryFields.Text;
          }
        ];
      }
    ];
  };
}

export default async function Page() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  const product = await client.getEntries<BlogPost>({ content_type: "post" });

  console.log(product);

  return (
    <main>
      <Section bgColor="dark">
        <Title text="Blog Articles" />
        <Paragraph
          text="Agency provides a full service range including technical skills,
          design, business understanding."
        />
      </Section>
      {product.items.map((item) => {
        return (
          <Section bgColor="light" key={item.sys.id}>
            <ArticleCard
              image={"https:" + item.fields.image.fields.file.url}
              alt={item.fields.image.fields.description}
              category={item.fields.author.fields.name}
              title={item.fields.title.content[0].content[0].value}
              date={item.sys.createdAt}
            />
          </Section>
        );
      })}
    </main>
  );
}
