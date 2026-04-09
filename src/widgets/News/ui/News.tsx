import { useEffect, useState } from "react";
import { useHomeStore } from "@/app/store/home/homeStore";
import styles from "./News.module.scss";
import { useNavigate } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsItem {
  id: number;
  news_image: string;
  description: string;
  data: string;
}

const News = () => {
  const { news, loading, error, fetchHomeData } = useHomeStore();
  const navigate = useNavigate();
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetchHomeData();
  }, [fetchHomeData]);

  const getImageUrl = (url: string): string => {
    if (!url) return "";
    if (url.startsWith("http")) return url;
    if (url.startsWith("/")) return `http://157.230.235.0${url}`;
    return `http://157.230.235.0/${url}`;
  };

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const truncateText = (text: string, maxLength: number = 120): string => {
    if (!text) return "";
    return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
  };

  if (loading) return <div className={styles.loader}>Загрузка новостей...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  const newsList: NewsItem[] = Array.isArray(news) ? news : [];

  if (newsList.length === 0) {
    return <div className={styles.noNews}>Нет новостей</div>;
  }

  return (
    <div className={`${styles.news} container`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Новости и события</h2>
        <button className={styles.viewAllBtn} onClick={() => navigate("/news")}>
          Все новости <ArrowRight size={18} />
        </button>
      </div>

      <div className={styles.newsList}>
        {newsList.slice(0, 3).map((item) => {
          const imageUrl = getImageUrl(item.news_image);
          const hasError = imageErrors[item.id] ?? false;

          return (
            <div
              key={item.id}
              className={styles.newsCard}
              onClick={() => navigate(`/news/${item.id}`)}
            >
              <div className={styles.imageWrapper}>
                {!hasError && imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={item.description}
                    className={styles.newsImage}
                    onError={() => handleImageError(item.id)}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <div className={styles.placeholderIcon}>📰</div>
                  </div>
                )}
              </div>

              <div className={styles.newsContent}>
                <div className={styles.dateBadge}>
                  <Calendar size={14} />
                  <span>{formatDate(item.data)}</span>
                </div>

                <p className={styles.newsDescription}>
                  {truncateText(item.description, 120)}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default News;
