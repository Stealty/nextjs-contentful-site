import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={styles.button + " " + props.className}
      style={props.style}
    >
      {props.children}
    </button>
  );
}
