import React from "react";
import { CalendarIcon } from "lucide-react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
import styles from "./VideoCard.module.scss";
import { log } from "console";

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
  console.log(videoUrl);

  return (
    <article className={styles.card}>
      <div className={styles.videoWrapper}>
        <Plyr
          source={{
            type: "video",
            sources: [
              {
                src: videoUrl,
                provider: videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")
                  ? "youtube"
                  : "html5",
              },
            ],
            poster: thumbnailUrl,
          }}
          options={{
            controls: [
              "play-large",
              "play",
              "progress",
              "current-time",
              "mute",
              "volume",
              "settings",
              "fullscreen",
            ],
            ratio: "16:9",
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