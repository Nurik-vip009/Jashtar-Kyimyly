// src/pages/News/News.tsx
import Navpanel from "@/widgets/Navpanel/Navpanel";
import NewsCard from "@/widgets/NewsCard/NewsCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { NewsStore } from "@/app/store/news/news";
import { useNavigate } from "react-router-dom";

function News() {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const { news, loading, error, fetchnews } = NewsStore();

	const pageSize = 12;
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		fetchnews();
	}, [fetchnews]);

	// Получаем данные из API
	const newsList = news?.news_list || [];

	const totalPages = Math.ceil(newsList.length / pageSize);
	const startIndex = (currentPage - 1) * pageSize;
	const currentNews = newsList.slice(startIndex, startIndex + pageSize);

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

	if (loading) {
		return (
			<div className={`${styles.NewsPage}`}>
				<Navpanel link="/" text={t("news.home")} text2={t("news.news")} />
				<h1>{t("news.news")}</h1>
				<div className="container">
					<div className={styles.loader}>Загрузка...</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className={`${styles.NewsPage}`}>
				<Navpanel link="/" text={t("news.home")} text2={t("news.news")} />
				<h1>{t("news.news")}</h1>
				<div className="container">
					<div className={styles.error}>Ошибка: {error}</div>
				</div>
			</div>
		);
	}

	return (
		<div className={`${styles.NewsPage}`}>
			<Navpanel link="/" text={t("news.home")} text2={t("news.news")} />
			<h1>{t("news.news")}</h1>
			<div className="container">
				<div className={styles.eventsArchive2}>
					{currentNews.map((newsItem) => (
						<NewsCard
							onClick={() => navigate(`/news/${newsItem.id}`)}
							key={newsItem.id}
							item={newsItem}
						/>
					))}
				</div>
			</div>

			{/* Пагинация */}
			{totalPages > 1 && (
				<div className={styles.pagination}>
					<button
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}>
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
								className={currentPage === page ? styles.activePage : ""}>
								{page}
							</button>
						),
					)}

					<button
						onClick={() =>
							setCurrentPage((prev) => Math.min(prev + 1, totalPages))
						}
						disabled={currentPage === totalPages}>
						<ChevronRight size={14} />
					</button>
				</div>
			)}
		</div>
	);
}

export default News;
