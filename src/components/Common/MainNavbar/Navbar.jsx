import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import TopNavbar from "../TopNavbar";
import styles from "./Navbar.module.css";

function MainNavbar({ mainBg, subBg, noStatic, curve }) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <TopNavbar />
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.navScroll : ""} ${
          curve ? styles.navCrev : ""
        } ${noStatic ? "" : styles.static} ${mainBg ? styles.mainBg : ""} ${
          subBg ? styles.subBg : ""
        }`}
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className={styles.container}>
          <Link
            className={styles.logo}
            href="/home"
            aria-label="Elephant Group - Ir a inicio"
          >
            <Image
              src="/images/logo/logo-eg-new.webp"
              alt="Elephant Group - Imprenta y servicios gráficos en Valparaíso"
              width={140}
              height={45}
              priority
              className={styles.logoImg}
            />
          </Link>

          <button
            className={`${styles.navbarToggler} ${isOpen ? styles.active : ""}`}
            type="button"
            aria-controls="navbarContent"
            aria-expanded={isOpen}
            aria-label="Abrir menú de navegación"
            onClick={toggleNavbar}
          >
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
            <span className={styles.iconBar}></span>
          </button>

          <div
            className={`${styles.navbarCollapse} ${isOpen ? styles.show : ""}`}
            id="navbarContent"
          >
            <ul className={styles.navbarNav} role="menubar">
              <li className={styles.navItem} role="none">
                <Link
                  className={`${styles.navLink} ${
                    router.pathname === "/home" ? styles.isActive : ""
                  }`}
                  href="/home"
                  role="menuitem"
                  aria-label="Ir a página de inicio"
                  aria-current={
                    router.pathname === "/home" ? "page" : undefined
                  }
                >
                  <span className={styles.rollingText}>INICIO</span>
                </Link>
              </li>

              <li
                className={`${styles.navItem} ${styles.dropdown}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                role="none"
              >
                <Link
                  className={styles.navLink}
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                >
                  <span className={styles.rollingText}>PRODUCTOS</span>
                </Link>
                <ul
                  className={`${styles.dropdownMenu} ${
                    isDropdownOpen ? styles.showDropdown : ""
                  }`}
                  role="menu"
                >
                  <li role="none">
                    <Link
                      className={`${styles.dropdownItem} ${
                        router.pathname === "/services/letreros"
                          ? styles.isActive
                          : ""
                      }`}
                      href="/services/letreros"
                      role="menuitem"
                      aria-current={
                        router.pathname === "/services/letreros"
                          ? "page"
                          : undefined
                      }
                    >
                      Letreros
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      className={`${styles.dropdownItem} ${
                        router.pathname === "/services/senaleticas"
                          ? styles.isActive
                          : ""
                      }`}
                      href="/services/senaleticas"
                      role="menuitem"
                      aria-current={
                        router.pathname === "/services/senaleticas"
                          ? "page"
                          : undefined
                      }
                    >
                      Señaléticas
                    </Link>
                  </li>
                  <li role="none">
                    <Link
                      className={`${styles.dropdownItem} ${
                        router.pathname === "/services/adhesivos"
                          ? styles.isActive
                          : ""
                      }`}
                      href="/services/adhesivos"
                      role="menuitem"
                      aria-current={
                        router.pathname === "/services/adhesivos"
                          ? "page"
                          : undefined
                      }
                    >
                      Adhesivos
                    </Link>
                  </li>
                </ul>
              </li>

              <li className={styles.navItem} role="none">
                <Link
                  className={`${styles.navLink} ${
                    router.pathname === "/quote" ? styles.isActive : ""
                  }`}
                  href="/quote"
                  role="menuitem"
                  aria-label="Solicitar cotización de servicios"
                  aria-current={
                    router.pathname === "/quote" ? "page" : undefined
                  }
                >
                  <span className={styles.rollingText}>COTIZACIÓN</span>
                </Link>
              </li>
              <li className={styles.navItem} role="none">
                <Link
                  className={`${styles.navLink} ${
                    router.pathname === "/contact" ? styles.isActive : ""
                  }`}
                  href="/contact"
                  role="menuitem"
                  aria-label="Contactar con Elephant Group"
                  aria-current={
                    router.pathname === "/contact" ? "page" : undefined
                  }
                >
                  <span className={styles.rollingText}>CONTACTO</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default MainNavbar;
