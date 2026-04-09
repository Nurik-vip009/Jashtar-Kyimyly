import React from "react";
import { CalendarIcon } from "lucide-react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import styles from "./VideoCard.module.scss";
// import { log } from "console";

interface VideoCardProps {
  id: number;
  date?: string;
  title: string;
  thumbnailUrl?: string;
  videoUrl: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  date,
  title,
  thumbnailUrl,
  videoUrl,
}) => {
  const getEmbedUrl = (url: string) => {
    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|live\/)|youtu\.be\/)([^&?\n]+)/;
    const match = url.match(regExp);
    return match ? `https://www.youtube.com/embed/${match[1]}` : "";
  };
  const embedUrl = getEmbedUrl(videoUrl);
  if (!embedUrl) {
    return <div className={styles.card}>Неверная ссылка на видео</div>;
  }
  return (
    <article className={styles.card}>
      <div className={styles.videoWrapper}>
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: getEmbedUrl(videoUrl),
                provider: "youtube",
              },
            ],
          }}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.dateContainer}>
          <CalendarIcon className={styles.calendarIcon} />
          <time className={styles.date}>{date}</time>
        </div>

        <h2 className={styles.title}>{title}</h2>
      </div>
    </article>
  );
};
