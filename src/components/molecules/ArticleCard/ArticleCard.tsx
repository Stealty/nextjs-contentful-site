import Paragraph from "@/components/atoms/Paragraph/Paragraph";
import styles from "./ArticleCard.module.css";
import Image from "next/image";
import Title from "@/components/atoms/Title/Title";

export type ArticleCardProps = {
  image: string;
  alt: string;
  category: string;
  title: string;
  date: string;
};

export default function ArtcileCard({
  image,
  alt,
  category,
  title,
  date,
}: ArticleCardProps) {
  const formatedDate = new Date(date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div className={styles.articleCard}>
      <Image
        src={image}
        width={329}
        height={224}
        alt={alt}
        className={styles.articleCard__image}
      />
      <Paragraph text={category} className={styles.articleCard__category} />
      <Title text={title} className={styles.articleCard__title} />
      <time className={styles.articleCard__date} dateTime={formatedDate}>
        {formatedDate}
      </time>
    </div>
  );
}
