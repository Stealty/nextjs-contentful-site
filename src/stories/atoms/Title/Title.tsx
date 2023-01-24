import styles from "./Title.module.css";

type TitleProps = {
  text: string;
  className?: string;
};

export default function Title({ text, className }: TitleProps) {
  return <h1 className={className ? className : styles.title}>{text}</h1>;
}
