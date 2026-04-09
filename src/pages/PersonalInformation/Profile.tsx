import React from "react";
import styles from "./Profile.module.scss";
import { OpenProject } from "./ui/OpenProject/OpenProject";
import { FinishedProject } from "./ui/FinishedProject/FinishedProject";
import { Education } from "./ui/Education/Education";
import logo from "@/shared/assets/icons/logo.svg"
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const navigationItems = [
    "Редактировать",
    "Проекты",
    "Обучающие материалы",
    "Telegram-канал",
    "Ваши заявки",
  ];
  const [activeItem, setActiveItem] = React.useState(1);
  const data = localStorage.getItem("user");

  const userData = data ? JSON.parse(data) : null;
  console.log(userData);
  
const navigate = useNavigate();
  // Функция для рендера контента
  const renderContent = () => {
    switch (activeItem) {
      case 1:
        return (
          <>
            <OpenProject />
            <FinishedProject />
          </>
        );
      case 2:
        return <Education />;
      default:
        return <p>Выберите раздел</p>;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img className={styles.logo} alt="Logo" src={logo} />

        <h1 className={styles.title}>Личный кабинет</h1>

        <button onClick={() => navigate("/")} className={styles.logoutButton}>
          <span>Выйти</span>
          <svg
            className={styles.logoutIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </header>

      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarCard}>
            <div className={styles.avatar}>
              <img src="/image.png" alt="User avatar" />
            </div>

            <div className={styles.userInfo}>
              <h2 className={styles.userName}>{userData?.full_name || userData?.name || ""}</h2>

              <p className={styles.userEmail}>{userData.email}</p>
            </div>
            <nav className={styles.navigation}>
              {navigationItems.map((item, index) => (
                <button
                  key={index}
                  className={`${styles.navItem} ${
                    index === activeItem ? styles.active : ""
                  }`}
                  onClick={() => setActiveItem(index)}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className={styles.contentArea}>{renderContent()}</main>
      </div>
    </div>
  );
};
