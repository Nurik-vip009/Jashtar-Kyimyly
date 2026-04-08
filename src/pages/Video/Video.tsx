import { ArrowRightIcon, ArrowLeftIcon, ChevronRight } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import styles from "./VideoGallry.module.scss";
import { AlbumCard } from "@/shared/ui/Media/MediaCard";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import Navpanel from "@/widgets/Navpanel/Navpanel";
import { useVideoStore } from "@/app/store/Media/video";
import { VideoCard } from "../Media/ui/VideoCard/VideoCard";
const ITEMS_PER_PAGE = 9;

export function Video() {
  const { videos, fetchVideos } = useVideoStore();
  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { totalPages, currentVideos } = useMemo(() => {
    const total = Math.ceil(videos.length / ITEMS_PER_PAGE);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const current = videos.slice(start, start + ITEMS_PER_PAGE);
    return { totalPages: total, currentVideos: current };
  }, [currentPage]);
  const handleGoHome = () => navigate("/");
  const handleGoMedia = () => navigate("/media");
  const handlePageChange = (page: number) => setCurrentPage(page);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handleGoBack = () => navigate("/media");
  const handleGoPhotoGallery = () => navigate("/photoGallery");
  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <span onClick={handleGoHome} className={styles.clickable}>
          Главная
        </span>
        <ChevronRight size={14} />
        <span onClick={handleGoMedia} className={styles.clickable}>
          Медиа
        </span>
        <ChevronRight size={14} />
        <span onClick={handleGoPhotoGallery} className={styles.clickable}>
          Фотогалерея
        </span>
      </div>

      {/* Заголовок */}
      <header className={styles.header}>
        <h1 className={styles.title}>{t("VideoLibrary.VideoLibrary")}</h1>
        <div className={styles.buttons}>
          <button className={styles.button} aria-label="Посмотреть все фото">
            <span className={styles.buttonText}>
              {t("VideoLibrary.selectDate")}
            </span>
            <ArrowRightIcon className={styles.buttonIcon} />
          </button>
          <button className={styles.button} onClick={() => navigate("/media")}>
            <span className={styles.buttonText}>
              {t("VideoLibrary.goBack")}
            </span>
            <ArrowRightIcon className={styles.buttonIcon} />
          </button>
        </div>
      </header>

      <div className={styles.gallery}>
        {currentVideos?.map((video) => (
          <VideoCard
            key={video.id}
            id={video.id}
            title={video.title}
            date={video.date}
            videoUrl={video.video_url}
            thumbnailUrl={video.thumbnail}
          />
        ))}
      </div>

      {/* Пагинация */}
      <div className={styles.pagination}>
        <button
          className={styles.pageButton}
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          ← Назад
        </button>

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
        >
          Вперёд →
        </button>
      </div>
    </div>
  );
}
