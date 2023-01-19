import Button from "../../atoms/Button/Button";
import styles from "./MobileMenuButton.module.css";

type MobileMenuButtonProps = {
  isActive: boolean;
  setIsActive: Function;
};

export default function MobileMenuButton({
  isActive,
  setIsActive,
}: MobileMenuButtonProps) {
  return (
    <Button
      type="button"
      onClick={setIsActive(!isActive)}
      className={
        isActive
          ? styles.MobileMenuButton__button +
            " " +
            styles["MobileMenuButton__button--active"]
          : styles.MobileMenuButton__button
      }
    >
      <span className={styles.MobileMenuButton__bar}></span>
      <span className={styles.MobileMenuButton__bar}></span>
      <span className={styles.MobileMenuButton__bar}></span>
    </Button>
  );
}
