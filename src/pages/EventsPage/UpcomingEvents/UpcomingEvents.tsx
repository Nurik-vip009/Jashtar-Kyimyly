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
import { useEventsStore, Events } from "@/app/store/events/events"; 

const UpcomingEvents: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  

  const { event, loading, fetchevents } = useEventsStore();

  useEffect(() => {
    if (typeof fetchevents === 'function') {
      fetchevents();
    }
  }, [fetchevents]);

  if (loading) return <div>Загрузка...</div>;

  const upcomingEvents = event.filter((item: Events) => item.event_status === "upcoming");

  return (
    <div className={`${styles.UpcomingEvents}`}>
      <h1 className={styles.title}>
        {t("events.upcomingEvents")}
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
            {upcomingEvents.map((item: Events) => ( 
              <SwiperSlide key={item.id}>
                <Card
                  onClick={() => navigate(`/events/${item.id}`)}
                  item={item} 
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