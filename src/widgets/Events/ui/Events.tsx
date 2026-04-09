import { useEffect, useState } from "react";
import { useHomeStore } from "@/app/store/home/homeStore";
import styles from "./Events.module.scss";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const { events, loading, error, fetchHomeData } = useHomeStore();
  const navigate = useNavigate();
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    fetchHomeData();
  }, [fetchHomeData]);

  const handleImageError = (eventId: number) => {
    setImageErrors((prev) => ({ ...prev, [eventId]: true }));
  };

  if (loading) {
    return <div className={styles.loader}>Загрузка мероприятий...</div>;
  }

  if (error) {
    return <div className={styles.error}>Ошибка: {error}</div>;
  }

  const eventsList = Array.isArray(events) ? events : [];

  if (eventsList.length === 0) {
    return <div className={styles.noEvents}>Нет мероприятий</div>;
  }

  return (
    <div className={`${styles.events} container`}>
      <div className={styles.header}>
        <h2 className={styles.title}>Предстоящие мероприятия</h2>
        <button className={styles.moreBtn} onClick={() => navigate("/events")}>
          Подробнее
        </button>
      </div>

      <div className={styles.eventsList}>
        {eventsList.slice(0, 3).map((event) => {
          // Добавляем timestamp чтобы избежать кэширования
          const imageUrl = event.image ? `${event.image}?t=${Date.now()}` : "";
          const hasError = imageErrors[event.id];

          console.log(`Event ${event.id} image URL:`, imageUrl); // Отладка

          return (
            <div key={event.id} className={styles.eventCard}>
              <div className={styles.imageContainer}>
                {!hasError && imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={event.title}
                    className={styles.eventImage}
                    onError={() => handleImageError(event.id)}
                    loading="lazy"
                  />
                ) : (
                  <div className={styles.imagePlaceholder}>
                    <span>📷</span>
                    <p>Нет изображения</p>
                  </div>
                )}
              </div>

              <div className={styles.eventContent}>
                <div className={styles.eventRow}>
                  <div className={styles.eventDate}>
                    {new Date(event.data).toLocaleDateString("ru-RU", {
                      day: "numeric",
                      month: "short",
                    })}
                  </div>

                  <div className={styles.textBlock}>
                    <h3 className={styles.eventTitle}>{event.title}</h3>
                    <p className={styles.eventDescription}>
                      {event.short_text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Events;
