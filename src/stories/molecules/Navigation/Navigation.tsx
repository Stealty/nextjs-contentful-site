"use client";

import styles from "./Navigation.module.css";
import Link from "next/link";
import Button from "../../atoms/Button/Button";
import { useEffect, useState } from "react";
import MobileMenuButton from "../MobileMenuButton/MobileMenuButton";

type NavigationProps = {
  pageLinks: string[];
};

export default function Navigation({ pageLinks }: NavigationProps) {
  const [isActive, setIsActive] = useState(false);
  const [actualRoute, setActualRoute] = useState("");

  useEffect(() => {
    return setActualRoute(window.location.pathname.replace("/", ""));
  }, []);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={styles.navigation}>
      <MobileMenuButton isActive={isActive} setIsActive={() => toggleMenu} />
      <ol
        className={
          isActive
            ? styles.navigation__list + " " + styles["navigation__list--active"]
            : styles.navigation__list
        }
      >
        {pageLinks.map((link) => {
          return (
            <li className={styles.navigation__listItem} key={link}>
              <Link
                className={
                  actualRoute === link
                    ? styles.navigation__link +
                      " " +
                      styles["navigation__link--active"]
                    : styles.navigation__link
                }
                href={"/" + link}
                onClick={() => {
                  toggleMenu(), setActualRoute(link);
                }}
              >
                {link}
              </Link>
            </li>
          );
        })}

        <li className={styles.navigation__listItem}>
          <Button className={styles.contact__button}>Contact</Button>
        </li>
      </ol>
    </nav>
  );
}
