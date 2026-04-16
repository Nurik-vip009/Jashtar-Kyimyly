"use client";
import type { FC } from "react";
import scss from "./Card.module.scss";

interface CardProps {
	image: string;
	date: string;
	description: string;
	title?: string;
	onClick?: () => void;
}

export const Card: FC<CardProps> = ({
	image,
	date,
	description,
	title,
	onClick,
}) => {
	return (
		<article className={scss.Card} onClick={onClick}>
			<div className={scss.imageWrapper}>
				<img
					src={image}
					alt={title || "card image"}
					className={scss.image}
					loading="lazy"
				/>
			</div>

			<div className={scss.content}>
				<div className={scss.meta}>
					<span className={scss.calendarIcon}>📅</span>
					<time className={scss.date}>{date}</time>
				</div>

				{title && <h3 className={scss.title}>{title}</h3>}

				<p className={scss.description}>{description}</p>
			</div>
		</article>
	);
};
