"use client";
import type { FC } from "react";
import scss from "./Footer.module.scss";
import { Link } from "react-router-dom";
import footerImg from "@/shared/assets/images/logo.png";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";

const FOOTER_NAV = [
	{
		title: "О движении",
		links: [
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

const CONTACTS = [
	{ icon: <Instagram size={24} />, label: "Instagram", title: "Наши соцсети:" },
	{ icon: <Phone size={24} />, label: "0700022042", title: "Контакты:" },
	{
		icon: <Mail size={24} />,
		label: "jashtarkyimyly@gmail.com",
		title: "Электронная почта:",
	},
	{ icon: <MapPin size={24} />, label: "Бишкек, кырг", title: "Адрес:" },
];

export const Footer: FC = () => {
	return (
		<footer className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.leftBox}>
						<div className={scss.left}>
							<div className={scss.mobileIcons}>
								{CONTACTS.map((c, i) => (
									<span key={i} className={scss.icon}>
										{c.icon}
									</span>
								))}
							</div>

							<img className={scss.img} src={footerImg} alt="logo" />

							<h1 className={scss.description}>
								© 2025 All rights reserved. <br />
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

							{CONTACTS.map((item, index) => (
								<div
									key={index}
									className={`${scss.column} ${scss.desktopOnly}`}>
									<h4>{item.title}</h4>
									<ul className={scss.navList}>
										<li className={scss.link}>
											<span>{item.label}</span>
										</li>
									</ul>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};
