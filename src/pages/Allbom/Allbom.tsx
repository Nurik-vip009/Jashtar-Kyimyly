import React, { useState } from 'react';
import { Gallery } from './ui/Gallery/Gallery';
import { Pagination } from './ui/Pagination/Pagination';
import styles from './Allbom.module.scss';
import { ChevronRight } from 'lucide-react';

interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    title: string;
}

export const Allbom = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Генерируем больше данных для демонстрации пагинации
    const allItems: GalleryItem[] = Array.from({ length: 48 }, (_, index) => ({
        id: index + 1,
        src: index === 0 ? '/image.png' : '/image-1.svg',
        alt: `Изображение ${index + 1}`,
        title: `Карточка ${index + 1}`,
    }));

    const totalPages = Math.ceil(allItems.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Прокрутка к началу галереи при смене страницы
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={styles.main}>
            <div className={styles.breadcrumbs}>
                Главная
                <ChevronRight />
                Медиа
                <ChevronRight />
                Фотогалерея
                <ChevronRight />
                <span>Альбом "Изображение"</span>
            </div>
            <div className={styles.container}>
                <header className={styles.header}>
                    <h1 className={styles.title}>Галерея изображений</h1>
                </header>

                <Gallery items={currentItems} />

                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />

                <div className={styles.info}>
                    <p className={styles.infoText}>
                        Страница {currentPage} из {totalPages} •
                        Показано {currentItems.length} из {allItems.length} элементов
                    </p>
                </div>
            </div>
        </div>
    );
};