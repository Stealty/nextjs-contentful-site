import Logo from "@/components/atoms/Logo/Logo";
import Navigation from "@/components/molecules/Navigation/Navigation";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo width={152} height={48} />
      <Navigation />
    </header>
  );
}