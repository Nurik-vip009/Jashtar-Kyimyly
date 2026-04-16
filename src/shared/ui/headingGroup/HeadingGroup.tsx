"use client";
import type { FC } from "react";
import scss from "./HeadingGroup.module.scss";

interface HeadingGroupProps {
	title: string;
	description?: string; // необязательный проп
	buttonText?: string; // необязательный проп
	onButtonClick?: () => void; // функция для клика по кнопке
}

export const HeadingGroup: FC<HeadingGroupProps> = ({
	title,
	description,
	buttonText,
	onButtonClick,
}) => {
	return (
		<section className={scss.HeadingGroup}>
			<div className={scss.content}>
				<div className={scss.textContent}>
					<h2 className={scss.title}>{title}</h2>
					{description && <p className={scss.description}>{description}</p>}
				</div>

				{/* Если buttonText передан — показываем кнопку */}
				{buttonText && (
					<button className={scss.button} onClick={onButtonClick}>
						{buttonText}
					</button>
				)}
			</div>
		</section>
	);
};
