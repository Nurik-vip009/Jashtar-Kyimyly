import { Typography } from "@/shared/ui";
import style from "./Movement.module.scss";
import { useTranslation } from "react-i18next";
import { useAboutMovementStore2 } from "@/app/store/aboutMovement/aboutMovement";
import { useEffect } from "react";
import { useAdvantagesStore } from "@/app/store/advantages/advantages";

const Movement = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);
  const { data, loading, error, fetchAboutMovement } = useAboutMovementStore2();
  useEffect(() => {
    fetchAboutMovement();
  }, []);
  const {
    data: advantages,
    loading: loader,
    error: advenError,
    fetchAdvantages,
  } = useAdvantagesStore();
  useEffect(() => {
    fetchAdvantages();
  }, []);
  const cards = [
    {
      id: 1,
      title: "Преимущество",
      text: "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
    },
    {
      id: 2,
      title: "Преимущество",
      text: "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
    },
    {
      id: 3,
      title: "Преимущество",
      text: "Значимость этих проблем настолько очевидна, что постоянный количественный рост и сфера нашей активности",
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
            <h4>Преимущество</h4>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movement;
