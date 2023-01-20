import styles from "./Section.module.css";

type SectionProps = {
  bgColor: "light" | "dark";
  children: React.ReactNode;
};

export default function Section({ children, bgColor }: SectionProps) {
  return (
    <section
      className={
        bgColor
          ? styles.section + " " + styles[`section--${bgColor}`]
          : styles.section
      }
    >
      {children}
    </section>
  );
}
