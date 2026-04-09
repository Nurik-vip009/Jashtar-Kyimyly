import React from "react";
import styles from "./Gallery.module.scss";

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
      {items.map((item) => (
        <div key={item.id} className={styles.galleryItem}>
          <img
            src={item.src}
            alt={item.alt}
            className={styles.galleryImage}
            loading="lazy"
          />
          <div className={styles.galleryOverlay}>
            <p className={styles.galleryTitle}>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
