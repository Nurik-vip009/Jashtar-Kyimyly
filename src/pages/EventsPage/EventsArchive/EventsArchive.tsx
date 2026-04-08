// EventsArchive.tsx
import Card from "@/widgets/Card/Card";
import React, { useEffect } from "react";
import img from "../../../shared/assets/images/photo.png";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { eventsStore } from "@/app/store/events/events";

function EventsArchive() {
  const usenavigate = useNavigate();
  const { t, i18n } = useTranslation();
  const { event, loading, error, fetchevents } = eventsStore();
  const PastEvents = event.filter((event) => event.event_status === "past");
  //  useEffect(() => {
  //    fetchevents();
  //  }, []);
  //   if (loading) {
  //    return <div className='loader'></div>;
  //  }
  //  if (error) {
  //    return <p style={{ color: "red" }}>{error}</p>;
  //  }
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
    <div className="events container">
      <div className="events-text">
        <h1>{t("events.eventArchive")}</h1>
        <button onClick={() => usenavigate("/eventsArchivePage")}>
          {t("events.button")}
        </button>
      </div>
      <div className="EventsArchive">
        {data.map((event) => (
          <Card
            onClick={() => usenavigate(`/events/${event.id}/`)}
            key={event.id}
            item={event}
          />
        ))}
      </div>
    </div>
  );
}

export default EventsArchive;
