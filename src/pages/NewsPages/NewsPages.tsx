// src/pages/NewsPages/NewsPages.tsx
import NewsCard from "@/widgets/NewsCard/NewsCard";
import { NewsStore } from "@/app/store/news/news";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./NewPages.module.scss";
import { HeadingGroup } from "@/shared/ui/headingGroup/HeadingGroup";

function NewsPages() {
	const navigate = useNavigate();
	const { t } = useTranslation();
	const { news, loading, fetchnews } = NewsStore();
	const [count, setCount] = useState(3);

	useEffect(() => {
		fetchnews();
	}, [fetchnews]);
	useEffect(() => {
		const handleResize = () => {
			setCount(window.innerWidth <= 977 ? 2 : 3);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const newsList = news?.news_list || [];

	const transformedNews = newsList.map((item) => ({
		id: item.id,
		data: item.data,
		news_image: item.news_image,
		description: item.description,
	}));

	if (loading) {
		return <div className="container">Загрузка...</div>;
	}

	return (
		<div className="container">
			<div className={styles.news}>
				<div className={styles.newsTitle}>
					{/* <h1>{t("news.news") || "Новости"}</h1> */}
					<HeadingGroup title="Новости" />
					{/* <HeadingGroup description="helo" /> */}
				</div>
				<div className={styles.newsCards}>
					{transformedNews.slice(0, count).map((newsItem) => (
						<NewsCard
							key={newsItem.id}
							item={newsItem}
							onClick={() => navigate(`/news/${newsItem.id}`)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default NewsPages;
