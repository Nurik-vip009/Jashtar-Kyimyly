import styles from "./Movement.module.scss";
import { useTranslation } from "react-i18next";
import { useHomeStore } from "@/app/store/home/homeStore";
import { useEffect } from "react";

const Movement = () => {
  const { t } = useTranslation();
  const { aboutBlock, loading, error, fetchHomeData } = useHomeStore();

  useEffect(() => {
    fetchHomeData();
  }, [fetchHomeData]);

  const advantages = aboutBlock?.advantages || [];

  if (loading) {
    return (
      <div className={`${styles.movement} container`}>
        <div className={styles.loader}>Загрузка...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${styles.movement} container`}>
        <div className={styles.error}>Ошибка: {error}</div>
      </div>
    );
  }

  return (
    <div className={`${styles.movement} container`}>
      <h2 className={styles.title}>{t("landing.aboutTheMovement")}</h2>

      <p className={styles.bodyText}>
        {aboutBlock?.description || t("landing.aboutTheMovementDescription")}
      </p>

      <div className={styles.cards}>
        {advantages.map((advantage) => (
          <div key={advantage.id} className={styles.card}>
            <div className={styles.circleCard}>
              <div></div>
            </div>
            <h4>{advantage.title}</h4>
            <p>{advantage.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movement;
