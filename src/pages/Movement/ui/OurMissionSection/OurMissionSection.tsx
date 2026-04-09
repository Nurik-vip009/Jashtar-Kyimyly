// import { useEffect } from 'react';
import styles from "./OurMissionSection.module.scss";
import { MultiContainer, Typography } from "@/shared/ui";
// import { useTranslation } from 'react-i18next';
import Image4 from "@/shared/assets/images/movementsection2.svg";
import Image5 from "@/shared/assets/images/movementsection3.svg";
import Image6 from "@/shared/assets/images/movementsection4.svg";
import Image7 from "@/shared/assets/images/movementsection5.svg";
import Image8 from "@/shared/assets/images/movementsection6.svg";
import { useAboutGoalStore } from "@/app/store/about-movement/ourmissionsection";
import { useLanguageStore } from "@/app/store/languageStore";
import { useEffect } from "react";
// import { useAboutGoalStore } from '@/app/store/about-movement/ourmissionsection';
// import { useLanguageStore } from '@/app/store/languageStore';

const data = {
  title: "Цели и миссии",
  description:
    "Принимая во внимание показатели успешности, консультация с широким активом говорит о возможностях системы обучения кадров, соответствующей насущным потребностям. Но существующая теория предполагает независимые способы реализации форм воздействия. Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: социально-экономическое развитие предопределяет высокую востребованность модели развития! Идейные соображения высшего порядка, а также повышение уровня гражданского сознания не даёт нам иного выбора, кроме определения экспериментов, поражающих по своей масштабности и грандиозности.",
  images: [Image4, Image5, Image6, Image7, Image8],
};

export const OurMissionSection = () => {
  const { data, loading, error, fetchAboutGoal } = useAboutGoalStore();
  const { currentLang } = useLanguageStore();

  useEffect(() => {
    fetchAboutGoal();
  }, [fetchAboutGoal, currentLang]);

  if (loading)
    return <div className={styles.loading}>Загрузка целей и миссий...</div>;
  if (error)
    return (
      <div className={styles.error}>Ошибка при загрузке данных: {error}</div>
    );
  if (!data) return <div className={styles.empty}>Нет данных о целях</div>;

  return (
    <section className={styles.ourMissionSection}>
      <MultiContainer>
        <div className={styles.content}>
          <Typography
            variant="title"
            color="black"
            weight="600"
            className={styles.title}
          >
            {/* {t('aboutTheMovement.goals')} */}
            {data?.title}
          </Typography>
          <Typography
            variant="desc"
            color="black"
            weight="400"
            className={styles.paragraph}
          >
            {data?.text}
          </Typography>

          <hr className={styles.divider} />

          <div className={styles.imageGrid}>
            <div className={styles.galleryTop}>
              {data?.missions_items?.slice(0, 3).map((img, index) => (
                <img
                  key={index}
                  src={img.image}
                  alt={`img${index + 1}`}
                  className={styles[`image${index + 2}`]}
                />
              ))}
            </div>
            <div className={styles.galleryBottom}>
              {data?.missions_items?.slice(3, 5).map((img, index) => (
                <img
                  key={index}
                  src={img.image}
                  alt={`img${index + 5}`}
                  className={styles[`image${index + 5}`]}
                />
              ))}
            </div>
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};
