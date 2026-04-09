import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PhotoCard } from "../PhotoCard/PhotoCard";
import styles from "./PhotoGallery.module.scss";
import { useTranslation } from "react-i18next";


const mockImages = [
  {
    id: 1,
    title: "Название фото “Название”",
    date: "12.03.2025",
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
  },
  {
    id: 2,
    title: "Название фото “Название”",
    date: "12.03.2025",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
  },
  {
    id: 3,
    title: "Название фото “Название”",
    date: "12.03.2025",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 4,
    title: "Название фото “Название”",
    date: "12.03.2025",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
  },
  {
    id: 5,
    title: "Название фото “Название”",
    date: "12.03.2025",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  },
  {
    id: 6,
    title: "Название фото “Название”",
    date: "12.03.2025",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  },
];

export const PhotoGallery: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          {t("media.PhotoGallery") || "Фотогалерея"}
        </h1>

        <button
          onClick={() => navigate("/photoGallery")}
          className={styles.button}
        >
          <span className={styles.buttonText}>
            {t("media.allPhoto") || "Все фото"}
          </span>
          <ArrowRightIcon className={styles.buttonIcon} />
        </button>
      </header>

      <main className={styles.gallery}>
        {mockImages.slice(0, 6).map((item) => (
          <PhotoCard
            key={item.id}
            id={item.id}
            date={item.date}
            title={item.title}
            imageUrl={item.image}
          />
        ))}
      </main>
    </div>
  );
};
