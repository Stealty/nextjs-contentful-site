import Button from "@/components/atoms/Button/Button";
import styles from "./MobileMenuButton.module.css";

type MobileMenuProps = {
  isActive: boolean;
  setIsActive: Function;
};

export default function MobileMenuButton({
  isActive,
  setIsActive,
}: MobileMenuProps) {
  return (
    <Button
      type="button"
      onClick={setIsActive(!isActive)}
      className={
        isActive
          ? styles.MobileMenuButton + " " + styles["MobileMenuButton--active"]
          : styles.MobileMenuButton
      }
    >
      <span className={styles.MobileMenuButton__bar}></span>
      <span className={styles.MobileMenuButton__bar}></span>
      <span className={styles.MobileMenuButton__bar}></span>
    </Button>
  );
}
