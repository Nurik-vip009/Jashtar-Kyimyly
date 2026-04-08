import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./style.module.scss";
import Card from "@/widgets/Card/Card";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const UpcomingEvents: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const data = [
    {
      id: 1,
      title: "Название мероприятия",
      description: "Описание мероприятия",
      event_status: "2",
      date: Date(),
      images: [
        {
          id: 1,
          event: 1,
          title: "Photo",
          image:
            "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Название мероприятия",
      description: "Описание мероприятия",
      event_status: "2",
      date: Date(),
      images: [
        {
          id: 2,
          event: 2,
          title: "Photo",
          image:
            "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Название мероприятия",
      description: "Описание мероприятия",
      event_status: "2",
      date: Date(),
      images: [
        {
          id: 2,
          event: 2,
          title: "Photo",
          image:
            "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Название мероприятия",
      description: "Описание мероприятия",
      event_status: "2",
      date: Date(),
      images: [
        {
          id: 2,
          event: 2,
          title: "Photo",
          image:
            "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Название мероприятия",
      description: "Описание мероприятия",
      event_status: "2",
      date: Date(),
      images: [
        {
          id: 2,
          event: 2,
          title: "Photo",
          image:
            "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "Название мероприятия",
      description: "Описание мероприятия",
      event_status: "2",
      date: Date(),
      images: [
        {
          id: 2,
          event: 2,
          title: "Photo",
          image:
            "https://www.gem-center.ru/data/image/NGA/Conf2025-440x300.jpg",
        },
      ],
    },
  ];

  return (
    <div className={styles.UpcomingEvents}>
      <h1 className={styles.title}>{t("events.upcomingEvents")}</h1>

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
            0: { slidesPerView: 2.12 },
            769: { slidesPerView: 3.1 },
          }}
        >
          {data.map((event) => (
            <SwiperSlide key={event.id} className={styles.slide}>
              <Card
                onClick={() => navigate(`/events/${event.id}`)}
                item={event}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className={`next ${styles.customArrow}`}>
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvents;
