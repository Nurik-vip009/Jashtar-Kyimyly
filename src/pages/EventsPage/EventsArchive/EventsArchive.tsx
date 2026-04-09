import Card from "@/widgets/Card/Card";
import React, { useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEventsStore, Events } from "@/app/store/events/events";
import { Typography } from "@/shared/ui";

function EventsArchive() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  

  const { event, loading, error, fetchevents } = useEventsStore();


  useEffect(() => {
    fetchevents();
  }, [fetchevents]);

  const pastEvents = event.filter((item: Events) => item.event_status === "past");


  if (loading) {
    return <div className="loader">Загрузка...</div>;
  }

  if (error) {
    return <p style={{ color: "red", textAlign: "center" }}>{error}</p>;
  }

  return (
    <div className="events container">
      <div className="events-text">
        <Typography variant='title' weight='600' color='black' >{t("events.eventArchive")}</Typography>
        <button onClick={() => navigate("/eventsArchivePage")}>
          {t("events.button")}
        </button>
      </div>

      <div className="EventsArchive">
        {pastEvents.length > 0 ? (
          pastEvents.map((item: Events) => (
            <Card
              onClick={() => navigate(`/events/${item.id}/`)}
              key={item.id}
              item={{
                ...item,

                images: item.images?.length 
                  ? item.images 
                  : [{ id: item.id, image: (item as any).image, event: item.id }]
              }}
            />
          ))
        ) : (
          <p>{t("events.noEvents") || "Архив пуст"}</p>
        )}
      </div>
    </div>
  );
}

export default EventsArchive;