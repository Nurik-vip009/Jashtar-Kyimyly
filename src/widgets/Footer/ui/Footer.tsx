"use client";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
	Instagram,
	Phone,
	Mail,
	MapPin,
	Facebook,
	Youtube,
} from "lucide-react";
import { getFooterData, IFooterData } from "../api";
import scss from "./Footer.module.scss";

const FOOTER_NAV = [
	{
		title: "О движении",
		links: [
			{ label: "Список курсов", url: "/course" },
			{ label: "Направления деятельности", url: "/activities" },
			{ label: "Проекты", url: "/projects" },
			{ label: "Мероприятия", url: "/events" },
			{ label: "Региональные отделения", url: "/branchnamepages" },
		],
	},
	{
		title: "Новости",
		links: [
			{ label: "Бренд материалы", url: "/main" },
			{ label: "Медиа", url: "/media" },
		],
	},
];

export const Footer: FC = () => {
	const [data, setData] = useState<IFooterData | null>(null);

	useEffect(() => {
		getFooterData()
			.then((res) => setData(res))
			.catch((err) => console.error("Ошибка загрузки футера:", err));
	}, []);

	if (!data) return <footer className={scss.Footer}></footer>;

	const contactColumns = [
		{
			title: "Наши соцсети:",
			links: [
				{ label: "Instagram", url: data.instagram },
				{ label: "Facebook", url: data.facebook },
				{ label: "YouTube", url: data.youtube },
			].filter((item) => item.url),
		},
		{
			title: "Контакты:",
			links: [{ label: data.phone_one, url: `tel:${data.phone_one}` }],
		},
		{
			title: "Электронная почта:",
			links: [{ label: data.email, url: `mailto:${data.email}` }],
		},
		{
			title: "Адрес:",
			links: [{ label: data.address, url: null }],
		},
	];

	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.leftBox}>
						<div className={scss.left}>
							<div className={scss.mobileIcons}>
								{data.instagram && (
									<a href={data.instagram} target="_blank" rel="noreferrer">
										<Instagram size={35} />
									</a>
								)}

								{data.phone_one && (
									<a href={`tel:${data.phone_one}`}>
										<Phone size={35} />
									</a>
								)}

								{data.email && (
									<a href={`mailto:${data.email}`}>
										<Mail size={35} />
									</a>
								)}

								{data.address && (
									<span className={scss.icon}>
										<MapPin size={35} />
									</span>
								)}
							</div>

							{data.logo && (
								<img
									className={scss.img}
									src={data.logo}
									alt={data.site_name}
								/>
							)}

							<h1 className={scss.description}>
								{data.copyright_text} <br />
								Privacy Policy | Terms of Service | Cookies Settings
							</h1>
						</div>
					</div>

					<div className={scss.rightBox}>
						<div className={scss.right}>
							{FOOTER_NAV.map((item, index) => (
								<div key={index} className={scss.column}>
									<h4>{item.title}</h4>
									<ul className={scss.navList}>
										{item.links.map((link, i) => (
											<li className={scss.link} key={i}>
												<Link to={link.url}>{link.label}</Link>
											</li>
										))}
									</ul>
								</div>
							))}

							{contactColumns.map(
								(col, index) =>
									col.links.length > 0 && (
										<div
											key={index}
											className={`${scss.column} ${scss.desktopOnly}`}>
											<h4>{col.title}</h4>
											<ul className={scss.navList}>
												{col.links.map((link, i) => (
													<li className={scss.link} key={i}>
														{link.url ? (
															<a
																href={link.url}
																target="_blank"
																rel="noreferrer">
																{link.label}
															</a>
														) : (
															<span>{link.label}</span>
														)}
													</li>
												))}
											</ul>
										</div>
									),
							)}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
