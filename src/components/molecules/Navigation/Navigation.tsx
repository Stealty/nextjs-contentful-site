"use client";

import styles from "./Navigation.module.css";
import HamburguerMenu from "../HamburguerMenu/HamburguerMenu";
import Link from "next/link";
import Button from "@/components/atoms/Button/Button";
import { useCallback, useEffect, useState } from "react";

export default function Navigation() {
  const linkToPages = ["about", "services", "pricing", "blog"];
  const [isActive, setIsActive] = useState(false);
  const [actualRoute, setActualRoute] = useState("");

  useEffect(() => {
    return setActualRoute(window.location.pathname.replace("/", ""));
  }, []);

  const handleMenu = useCallback(() => {
    setIsActive(!isActive);
  }, [isActive]);

  return (
    <nav className={styles.navigation}>
      <HamburguerMenu isActive={isActive} setIsActive={() => handleMenu} />
      <ol
        className={
          isActive
            ? styles.navigation__list + " " + styles["navigation__list--active"]
            : styles.navigation__list
        }
      >
        {linkToPages.map((link) => {
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
                  handleMenu(), setActualRoute(link);
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
