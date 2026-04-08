import { AlbumCard } from "@/shared/ui/Media/MediaCard";
import Navpanel from "@/widgets/Navpanel/Navpanel";
import { ArrowRightIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PhotoGallry.module.scss";
import { useTranslation } from "react-i18next";
import { useImagesStore } from "@/app/store/Media/images";

const albums = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  title: `Альбом ${i + 1}`,
  event: `Событие ${Math.ceil((i + 1) / 3)}`,
  imageUrl: `https://picsum.photos/seed/${i + 1}/400/300`,
  count: Math.floor(Math.random() * 50) + 1,
}));

export function PhotoGallry() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const navigate = useNavigate();
  const totalPages = Math.ceil(albums.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAlbums = albums.slice(startIndex, startIndex + itemsPerPage);
  const { t, i18n } = useTranslation();
  const { loading, error, imagesCards, fetchImages } = useImagesStore();
  if (loading) {
    return <div className="loader"></div>;
  }
  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }
  return (
    <div className={styles.container}>
      {/* Навигация */}
      <div className={styles.breadcrumbs}>
        <Navpanel
          text={t("PhotoGallery.home")}
          text2={t("PhotoGallery.media")}
          text3={t("PhotoGallery.PhotoGallery")}
          link="/"
          link2="/media"
        />
      </div>

      {/* Заголовок */}
      <header className={styles.header}>
        <h1 className={styles.title}>{t("PhotoGallery.PhotoGallery")}</h1>
        <div className={styles.buttons}>
          <button className={styles.button} aria-label="Посмотреть все фото">
            <span className={styles.buttonText}>
              {t("PhotoGallery.selectDate")}
            </span>
            <ArrowRightIcon className={styles.buttonIcon} />
          </button>
          <button className={styles.button} onClick={() => navigate("/media")}>
            <span className={styles.buttonText}>
              {t("PhotoGallery.goBack")}
            </span>
            <ArrowRightIcon className={styles.buttonIcon} />
          </button>
        </div>
      </header>

      {/* Галерея */}
      <div className={styles.gallery}>
        {currentAlbums.map((album) => (
          <AlbumCard
            key={album.id}
            title={album.title}
            event={album.event}
            imageUrl={album.imageUrl}
            count={album.count}
          />
        ))}
      </div>

      {/* Пагинация */}
      <div className={styles.pagination}>
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        ></button>

        <div className={styles.pageNumbers}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`${styles.pageNumber} ${
                currentPage === i + 1 ? styles.active : ""
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        ></button>
      </div>
    </div>
  );
}
