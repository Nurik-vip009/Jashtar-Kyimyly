import React, { useEffect } from "react";
import { ArrowRightIcon } from "lucide-react";
import { VideoCard } from "../VideoCard/VideoCard";
import styles from "./VideoGallery.module.scss";
import vidioIMG from "@/shared/assets/images/vidioimg.png";
import { useNavigate } from "react-router-dom";
import { useVideoStore } from "@/app/store/Media/video";
// import { log } from 'console';
import { useTranslation } from "react-i18next";

const VideoData = [
  {
    id: 1,
    date: "12.03.2025",
    title: "Название видео “Название”",
    videoUrl: "https://example.com/videos/react-tutorial.mp4",
    thumbnailUrl: vidioIMG,
  },
  {
    id: 2,
    date: "10.03.2025",
    title: "Название видео “Название”",
    videoUrl: "https://example.com/videos/performance.mp4",
    thumbnailUrl: vidioIMG,
  },
  {
    id: 3,
    date: "08.03.2025",
    title: "Название видео “Название”",
    videoUrl: "https://example.com/videos/typescript.mp4",
    thumbnailUrl: vidioIMG,
  },
  {
    id: 4,
    date: "05.03.2025",
    title: "Название видео “Название” ",
    videoUrl: "https://example.com/videos/animations.mp4",
    thumbnailUrl: vidioIMG,
  },
  {
    id: 5,
    date: "02.03.2025",
    title: "Название видео “Название”",
    videoUrl: "https://example.com/videos/api.mp4",
    thumbnailUrl: vidioIMG,
  },
  {
    id: 6,
    date: "28.02.2025",
    title: "Название видео “Название”",
    videoUrl: "https://example.com/videos/layout.mp4",
    thumbnailUrl: vidioIMG,
  },
];

export const VideoGallery: React.FC = () => {
  const { videos, loading, error, fetchVideos } = useVideoStore();
  useEffect(() => {
    fetchVideos();
  }, []);
  // console.log(videos);

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>{t("media.VideoLibrary")}</h1>

        <button
          className={styles.button}
          onClick={() => navigate("/videoGallery")}
          aria-label="Посмотреть все видео"
        >
          <span className={styles.buttonText}>{t("media.allVideo")}</span>
          <ArrowRightIcon className={styles.buttonIcon} />
        </button>
      </header>

      <main className={styles.gallery}>
        {loading && <p>Загрузка...</p>}
        {error && <p>Произошла ошибка</p>}
        {videos.length < 0 ? (
          <p>{videos.length} видео</p>
        ) : (
          videos.map((video) => (
            <VideoCard
              key={video.id}
              id={video.id}
              // date={video.date}
              title={video.title}
              videoUrl={video.video_url}
              // thumbnailUrl={video.thumbnailUrl}
            />
          ))
        )}
      </main>
    </div>
  );
};
