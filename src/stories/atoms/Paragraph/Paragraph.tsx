import styles from "./Paragraph.module.css";

type ParagraphProps = {
  text: string;
  className?: string;
};

export default function Paragraph({ text, className }: ParagraphProps) {
  return <p className={className ? className : styles.paragraph}>{text}</p>;
}
