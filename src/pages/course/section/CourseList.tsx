"use client";
import type { FC } from "react";
import scss from "./CourseList.module.scss";

export const CourseList: FC = () => {
	return (
		<section className={scss.CourseList}>
			<div className="container">
				<div className={scss.content}>CourseList</div>
			</div>
		</section>
	);
};
