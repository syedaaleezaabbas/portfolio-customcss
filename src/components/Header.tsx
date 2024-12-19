"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import hamburger and close icons
import Link from "next/link";
import styles from "@/styles/header.module.css";
import AOS from "aos"
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    AOS.init({
      easing: "ease-out-back",
      duration: 1200,
      delay: 100,
      once: true,
      anchorPlacement: "bottom-bottom",
      offset: 160,
    });
    AOS.refresh();
  }), [];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h1>SAA</h1>
      </div>
      <button className={styles.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link href="/skills">Skills</Link>
          </li>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link href="/projects">Projects</Link>
          </li>
          <li className={styles.navItem} onClick={closeMenu}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;