import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.scss";
import Card from "@/widgets/Card/Card";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEventsStore } from "@/store/eventsStore"; // Путь к вашему стору

const UpcomingEvents: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  // Достаем данные и метод из Zustand
  const { eventsPage, loading, fetchEvents } = useEventsStore();

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  if (loading) return <div>Загрузка...</div>;
  
  // Берем только предстоящие события
  const upcomingEvents = eventsPage?.upcoming_events || [];

  return (
    <div className={`${styles.UpcomingEvents}`}>
      {/* Используем заголовок из API или перевод по умолчанию */}
      <h1 className={styles.title}>
        {eventsPage?.upcoming_title || t("events.upcomingEvents")}
      </h1>
      
      <div className={`${styles.content} container`}>
        <div className={styles.swiperWrapper}>
          <button className={`prev ${styles.customArrow}`}>
            <ChevronLeft />
          </button>
          
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".prev",
              nextEl: ".next",
            }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
            }}
          >
            {upcomingEvents.map((event) => (
              <SwiperSlide key={event.id} className={styles.slide}>
                <Card
                  onClick={() => navigate(`/events/${event.id}`)}
                  // Важно: проверьте, чтобы компонент Card принимал объект EventItem
                  // Возможно, внутри Card придется заменить .description на .short_text
                  item={{
                    ...event,
                    description: event.short_text, // маппинг полей если Card ждет description
                    images: [{ image: event.image }] // адаптация под старую структуру картинок
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          
          <button className={`next ${styles.customArrow}`}>
            <ChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;