import styles from "./Navigation.module.css";

import Menu from "../Menu/Menu";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Menu />
    </nav>
  );
}
