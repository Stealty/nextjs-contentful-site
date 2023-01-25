"use client";

import styles from "./Navigation.module.css";
import Link from "next/link";
import Button from "../../atoms/Button/Button";
import { useEffect, useState } from "react";
import MobileMenuButton from "../MobileMenuButton/MobileMenuButton";
import { usePathname } from "next/navigation";

type NavigationProps = {
  pageLinks: string[];
};

export default function Navigation({ pageLinks }: NavigationProps) {
  const [isActive, setIsActive] = useState(false);
  const [actualRoute, setActualRoute] = useState("");

  useEffect(() => {
    console.log(window.location.pathname);
    if (window) setActualRoute(window.location.pathname.replace("/", ""));
  }, [window]);

  const toggleMenu = () => {
    if (window.innerWidth < 768) {
      setIsActive(!isActive);
      !isActive
        ? document.body.classList.add(styles["prevent-scroll"])
        : document.body.classList.remove(styles["prevent-scroll"]);
    }
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
