import Logo from "@/components/atoms/Logo/Logo";
import Navigation from "../../molecules/Navigation/Navigation";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo width={152} height={48} />
      <Navigation pageLinks={["about", "services", "pricing", "blog"]} />
    </header>
  );
}
