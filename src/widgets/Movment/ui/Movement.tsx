import { Typography } from "@/shared/ui";
import style from "./Movement.module.scss";
import { useTranslation } from "react-i18next";
import { useAboutMovementStore2 } from "@/app/store/aboutMovement/aboutMovement";
import { useEffect } from "react";
import { useAdvantagesStore } from "@/app/store/advantages/advantages";
import { BannerStore } from "@/app/store/banner/banner";

const Movement = () => {
  const { t, i18n } = useTranslation();
  // const { data, loading, error, fetchAboutMovement } = useAboutMovementStore2();
  // useEffect(() => {
  //   fetchAboutMovement();
  // }, []);
  // const {
  //   data: advantages,
  //   loading: loader,
  //   error: advenError,
  //   fetchAdvantages,
  // } = useAdvantagesStore();
  // useEffect(() => {
  //   fetchAdvantages();
  // }, []);
  const cards = [
    {
      id: 1,
      title: "Техническое обновление",
      text: "Наше движение объединяет активных и целеустремленных людей, стремящихся к постоянному самосовершенствованию.",
    },
    {
      id: 2,
      title: "Нас стало больше!",
      text: "Мы — сообщество тех, кто не привык стоять на месте. Наше движение — это площадка для реализации идей",
    },
    {
      id: 3,
      title: "Новое поступление",
      text: "Единство. Развитие. Результат. Наше движение создано для того, чтобы помогать талантам находить свой путь",
    },
    {
      id: 4,
      title: "Преимущество",
      text: "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
    },
  ];

  return (
    <div className={`${style.movement} container`}>
      <Typography className={style.title} variant="card_title" color="black">
        {t("landing.aboutTheMovement")}
      </Typography>

      <Typography className={style.bodyText} variant="card_title" color="black">
        {t("landing.aboutTheMovementDescription")}
      </Typography>

      <div className={style.cards}>
        {cards.map((card) => (
          <div key={card.id} className={style.card}>
            <div className={style.circleCard}>
              <div></div>
            </div>
            <h4>{card.title}</h4>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movement;
