import React from "react";
import Slider, { CustomArrowProps } from "react-slick";
import locationIcon from "@/shared/assets/images/locastion.svg";
import arrowRight from "@/shared/assets/icons/arrow-right.svg";
import arrowLeft from "@/shared/assets/icons/arrow-left.svg";
import styles from "./BranchName.module.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Person {
	name: string;
	role: string;
	img: string;
}

const PEOPLE: Person[] = [
	{
		name: "Фамилия Имя Отчество",
		role: "Должность",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvFmRqNor_kpqxTegpEBOVGb32Ogw9QUzUGQ&s",
	},
	{
		name: "Фамилия Имя Отчество",
		role: "Должность",
		img: "https://i.pinimg.com/236x/a7/c4/65/a7c46576be1f0e66edb4a9cdf46b9a6c.jpg",
	},
	{
		name: "Фамилия Имя Отчество",
		role: "Должность",
		img: "https://i.pinimg.com/236x/7b/44/90/7b44903de8051361d8d03f6e82e2e7ae.jpg",
	},
	{
		name: "Фамилия Имя Отчество",
		role: "Должность",
		img: "https://i.pinimg.com/736x/c7/43/2b/c7432be44f54aef54c137722fa2b197e.jpg",
	},
];

const PrevArrow = ({ onClick }: CustomArrowProps) => (
	<button className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
		<img src={arrowLeft} alt="Next" />
	</button>
);

const NextArrow = ({ onClick }: CustomArrowProps) => (
	<button className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
		<img src={arrowRight} alt="Prev" />
	</button>
);

export const BranchName: React.FC = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		responsive: [
			{
				breakpoint: 1200,
				settings: { slidesToShow: 3 },
			},
			{
				breakpoint: 992,
				settings: { slidesToShow: 2 },
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: "40px",
				},
			},
		],
	};

	return (
		<section className={styles.branch}>
			<div className={styles.container}>
				<header className={styles.header}>
					<h2 className={styles.title}>Название отделения</h2>
					<p className={styles.subtitle}>
						Однозначно, интерактивные прототипы формируют глобальную
						экономическую сеть и при этом — заблокированы в рамках своих
						собственных рациональных ограничений.
					</p>
					<div className={styles.location}>
						<img src={locationIcon} alt="" />
						<span>Город, Улица, Дом</span>
					</div>
				</header>

				<div className={styles.sliderContainer}>
					<Slider {...settings}>
						{PEOPLE.map((person, index) => (
							<div key={index} className={styles.cardWrapper}>
								<article className={styles.card}>
									<img
										src={person.img}
										alt={person.name}
										className={styles.photo}
									/>
									<div className={styles.info}>
										<h4>{person.name}</h4>
										<p>{person.role}</p>
									</div>
								</article>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
};
