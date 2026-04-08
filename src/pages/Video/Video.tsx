import { ArrowRightIcon, ChevronRight } from "lucide-react";
import { useState } from "react";
import styles from "./VideoGallry.module.scss";
import { AlbumCard } from "@/shared/ui/Media/MediaCard";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navpanel from "@/widgets/Navpanel/Navpanel";

const albums = Array.from({ length: 42 }, (_, i) => ({
    id: i + 1,
    title: `Альбом ${i + 1}`,
    event: `Событие ${Math.ceil((i + 1) / 3)}`,
    imageUrl: `https://picsum.photos/seed/${i + 1}/400/300`,
    count: Math.floor(Math.random() * 50) + 1,
}));

export function Video() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const navigate = useNavigate();
    const totalPages = Math.ceil(albums.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentAlbums = albums.slice(startIndex, startIndex + itemsPerPage);
    const {t , i18n} = useTranslation()
    return (
        <div className={styles.container}>
            {/* Навигация */}
            <div className={styles.breadcrumbs}>
                <Navpanel text={t('VideoLibrary.home')} link="/" text2={'VideoLibrary.media'} link2="/media" text3={t('VideoLibrary.VideoLibrary')}/>
            </div>

            {/* Заголовок */}
            <header className={styles.header}>
                <h1 className={styles.title}>{t('VideoLibrary.VideoLibrary')}</h1>
                <div className={styles.buttons}>
                    <button className={styles.button} aria-label="Посмотреть все фото">
                        <span className={styles.buttonText}>{t('VideoLibrary.selectDate')}</span>
                        <ArrowRightIcon className={styles.buttonIcon} />
                    </button>
                    <button  className={styles.button} onClick={()=>navigate("/media")}>
                        <span className={styles.buttonText}>{t('VideoLibrary.goBack')}</span>
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
                        onClick={() => navigate(`/allbom`)}
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
                            className={`${styles.pageNumber} ${currentPage === i + 1 ? styles.active : ""
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
