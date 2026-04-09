// News.tsx
import Navpanel from "@/widgets/Navpanel/Navpanel";
import NewsCard from "@/widgets/NewsCard/NewsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import img from "../../shared/assets/images/photo.png";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { NewsStore } from "@/app/store/news/news";
import { NewsDetailStore } from "@/app/store/news/newsDetail";
import { useNavigate } from "react-router-dom";
// interface New {
//   id: number
//   img: string
//   title: string
//   description: string
// }

function News() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  // const Data: New[] = Array.from({ length: 95 }, (_, i) => ({
  //   id: i + 1,
  //   img: img,
  //   title: `Событие номер ${i + 1}`,
  //   description: 'Описание Описание Описание Описание Описание Описание Описание',
  // }))
  // const { news, loading, error, fetchnews } = NewsStore();
  // useEffect(() => {
  //   fetchnews();
  // }, [fetchnews]);
  // const { fetchNewsDetail } = NewsDetailStore();
  const data = [
    {
      id: 1,
      image:
        "https://groups.google.com/group/digital-services-2024/attach/25a9aa043ccfb/6.jpg?part=0.1&view=1",
      title: "Как уже неоднократно упомянуто",
      description:
        "Как уже неоднократно упомянуто, интерактивные прототипы, вне зависимости от их уровня, должны быть преданы социально-демократической анафеме.",
      date: Date(),
    },
    {
      id: 2,
      image:
        "https://groups.google.com/group/digital-services-2024/attach/25a9aa043ccfb/6.jpg?part=0.1&view=1",
      title: "Как уже неоднократно упомянуто",
      description:
        "Как уже неоднократно упомянуто, интерактивные прототипы, вне зависимости от их уровня, должны быть преданы социально-демократической анафеме.",
      date: Date(),
    },
    {
      id: 3,
      image:
        "https://groups.google.com/group/digital-services-2024/attach/25a9aa043ccfb/6.jpg?part=0.1&view=1",
      title: "Как уже неоднократно упомянуто",
      description:
        "Как уже неоднократно упомянуто, интерактивные прототипы, вне зависимости от их уровня, должны быть преданы социально-демократической анафеме.",
      date: Date(),
    },
  ];
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const currentEvents = data.slice(startIndex, startIndex + pageSize);

  const getPaginationRange = () => {
    let range: (number | string)[] = [];

    if (totalPages <= 4) {
      range = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      if (currentPage <= 2) {
        range = [1, 2, "...", totalPages];
      } else if (currentPage >= totalPages - 1) {
        range = [1, "...", totalPages - 2, totalPages - 1, totalPages];
      } else {
        range = [1, "...", currentPage, "...", totalPages];
      }
    }

    return range;
  };

  return (
    <div className={`${styles.NewsPage} `}>
      <Navpanel link="/" text={t("news.home")} text2={t("news.news")} />
      <h1>{t("news.news")}</h1>
      <div className="container">
        <div className={styles.eventsArchive2}>
          {currentEvents.map((event) => (
            <NewsCard
              onClick={() => navigate(`/news/${event.id}/`)}
              key={event.id}
              item={event}
            />
          ))}
        </div>
      </div>

      {/* 👉 Пагинация */}
      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft size={14} />
          </button>

          {getPaginationRange().map((page, index) =>
            page === "..." ? (
              <span key={index} className={styles.ellipsis}>
                ...
              </span>
            ) : (
              <button
                key={index}
                onClick={() => setCurrentPage(Number(page))}
                className={currentPage === page ? styles.activePage : ""}
              >
                {page}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}

export default News;
