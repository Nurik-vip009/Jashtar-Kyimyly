// Header.tsx
import React, { useState } from "react";
import styles from "./style.module.scss";
import logo from "../../shared/assets/icons/logo (1).svg";
import menu from "../../shared/assets/images/hamburger manu.svg";
import close from "../../shared/assets/images/close-line.svg";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguageStore } from "@/app/store/languageStore";
function Header() {
  const [activeButton, setActiveButton] = useState<number | null>(1);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const { currentLang, changeLang } = useLanguageStore();
  const links = [
    { key: "home", path: "/" },
    { key: "aboutTheMovement", path: "/movementpages" },
    { key: "direction", path: "/activitiesPage" },
    { key: "Events", path: "/events" },
    { key: "Projects", path: "/project" },
    { key: "Media", path: "/media" },
    // { key: "regionalOffice", path: "/branchnamepages" },
  ];
  const navOnClick = (index: number) => {
    setActiveButton(index + 1);
    setMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.burger} onClick={toggleMenu}>
            <img src={menuOpen ? close : menu} alt="Menu" />
          </div>
          <img src={logo} alt="Logo" className={styles.logo} />

          <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
            <ul>
              {links.map((item, index) => (
                <li
                  key={index}
                  className={activeButton === index + 1 ? styles.active : ""}
                  onClick={() => navOnClick(index)}
                >
                  <Link to={item.path}>{t(`header.${item.key}`)}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {!menuOpen && (
            <div className={styles.item}>
              <select
                value={currentLang}
                onChange={(e) => {
                  changeLang(e.target.value as "ky" | "ru" | "en");
                  i18n.changeLanguage(e.target.value);
                }}
              >
                <option value="ru">РУС</option>
                <option value="ky">KGZ</option>
                <option value="en">ENG</option>
              </select>

              <button
                // className={activeButton === 8 ? styles.activeButton : ''}
                // onClick={() => {
                //   setActiveButton(8)
                //   navigate('/register')
                // }}
                className={activeButton === 8 ? styles.activeButton : ""}
                onClick={() => {
                  setActiveButton(8);
                  navigate("/register");
                }}
              >
                {t("header.button")}
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
