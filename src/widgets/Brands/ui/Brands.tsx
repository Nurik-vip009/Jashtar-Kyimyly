import { useEffect, useState } from "react";
import { useHomeStore } from "@/app/store/home/homeStore";
import styles from "./Brands.module.scss";

const Brands = () => {
  const { merch, loading, error, fetchHomeData } = useHomeStore();
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetchHomeData();
  }, [fetchHomeData]);

  const getImageUrl = (url: string) => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    if (url.startsWith("/")) return `http://157.230.235.0${url}`;
    return `http://157.230.235.0/${url}`;
  };

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  if (loading) return <div className={styles.loader}>Загрузка мерча...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  const merchList = Array.isArray(merch) ? merch : [];

  if (merchList.length === 0) {
    return <div className={styles.noMerch}>Нет товаров</div>;
  }

  return (
    <div className={`${styles.brands} container`}>
      <h2 className={styles.title}>Бренд материалы</h2>
      <div className={styles.merchList}>
        {merchList.map((item) => {
          const imageUrl = getImageUrl(item.image);
          const hasError = imageErrors[item.id];

          return (
            <div key={item.id} className={styles.merchCard}>
              <div className={styles.imageWrapper}>
                {!hasError && imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className={styles.merchImage}
                    onError={() => handleImageError(item.id)}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.placeholderIcon}>🛍️</div>
                  </div>
                )}
              </div>
              <div className={styles.merchContent}>
                <h3 className={styles.merchTitle}>{item.title}</h3>
                <p className={styles.merchPrice}>{item.price} KGS</p>
                <button className={styles.merchButton}>Купить</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Brands;
