import Button from "@/components/atoms/Button/Button";
import styles from "./HamburguerMenu.module.css";

export default function MobileMenu({ isActive, setIsActive }: any) {
  return (
    <>
      <Button
        type="button"
        onClick={setIsActive(!isActive)}
        className={
          isActive
            ? styles.HamburguerMenu__button +
              " " +
              styles["HamburguerMenu__button--active"]
            : styles.HamburguerMenu__button
        }
      >
        <span className={styles.HamburguerMenu__bar}></span>
        <span className={styles.HamburguerMenu__bar}></span>
        <span className={styles.HamburguerMenu__bar}></span>
      </Button>
    </>
  );
}
