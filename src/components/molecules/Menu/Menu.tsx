"use client";
import styles from "./Menu.module.css";

export default function MobileMenu() {
  return (
    <button type="button" className={styles.Menu__button}>
      <span className={styles.Menu__bar}></span>
      <span className={styles.Menu__bar}></span>
      <span className={styles.Menu__bar}></span>
    </button>
  );
}
