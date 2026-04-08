import React from 'react';
import styles from './Gallery.module.scss';

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
}

interface GalleryProps {
  items: GalleryItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ items }) => {
  return (
    <div className={styles.gallery}>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.id} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img 
                src={item.src} 
                alt={item.alt}
                className={styles.image}
              />
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};