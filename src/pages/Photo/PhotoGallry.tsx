import { AlbumCard } from "@/shared/ui/Media/MediaCard";
// import Navpanel from "@/widgets/Navpanel/Navpanel";
import { ArrowRightIcon, ArrowLeftIcon, ChevronRight } from "lucide-react";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useImagesStore } from "@/app/store/Media/images";
import styles from "./PhotoGallry.module.scss";

const ITEMS_PER_PAGE = 16;

// Мок-данные для альбомов
const albums = Array.from({ length: 42 }, (_, i) => ({
  id: i + 1,
  title: `Альбом ${i + 1}`,
  event: `Событие ${Math.ceil((i + 1) / 3)}`,
  imageUrl: `https://picsum.photos/seed/${i + 1}/400/300`,
  count: Math.floor(Math.random() * 50) + 1,
}));

export function PhotoGallry() {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { loading, error, fetchImages } = useImagesStore();

  const { totalPages, currentAlbums } = useMemo(() => {
    const total = Math.ceil(albums.length / ITEMS_PER_PAGE);
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const current = albums.slice(start, start + ITEMS_PER_PAGE);
    return { totalPages: total, currentAlbums: current };
  }, [currentPage]);

  const handlePageChange = (page: number) => setCurrentPage(page);
  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const handleGoHome = () => navigate("/");
  const handleGoMedia = () => navigate("/media");
  // const handleAlbumClick = (id: number) => navigate(`/media/albums/${id}`);

  // Обработчик клика на альбом
  const handleAlbumClick = (albumId: number) => {
    navigate(`/media/photo-gallery/${albumId}`);
  };

  // Состояния загрузки и ошибки
  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
        <p>{t("PhotoGallery.loading")}</p>
      </div>
    );
    // if (error)
    //   return (
    //     <div className={styles.errorContainer}>
    //       <p>{error}</p>
    //       <button onClick={() => fetchImages()} className={styles.retryButton}>
    //         {t("PhotoGallery.retry")}
    //       </button>
    //     </div>
    //   );
  }
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

      <header className={styles.header}>
        <h1 className={styles.title}>
          {t("PhotoGallery.PhotoGallery") || "Фотогалерея"}
        </h1>
      </header>

      <div className={styles.gallery}>
        {currentAlbums.map((album) => (
          <AlbumCard
            key={album.id}
            title={album.title}
            event={album.event}
            imageUrl={album.imageUrl}
            count={album.count}
            onClick={() => handleAlbumClick(album.id)}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={styles.pageButton}
          >
            <ArrowLeftIcon className={styles.pageIcon} />
          </button>
          <div className={styles.pageNumbers}>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`${styles.pageNumber} ${
                  currentPage === i + 1 ? styles.active : ""
                }`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={styles.pageButton}
          >
            <ArrowRightIcon className={styles.pageIcon} />
          </button>
        </div>
      )}
    </div>
  );
}
