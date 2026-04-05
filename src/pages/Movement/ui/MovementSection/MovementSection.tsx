import { useEffect } from 'react';
import styles from './MovementSection.module.scss';
import { MultiContainer, Typography } from '@/shared/ui';
import Imge1 from '@/shared/assets/images/movementsection.png';
import Imge2 from '@/shared/assets/images/movementsection1.png';
import { useAboutMovementStore } from '@/app/store/about-movement/aboutMovementStore';

export const MovementSection = () => {
  // const { data, loading, error, fetchAboutMovement } = useAboutMovementStore();

//   // useEffect(() => {
//   //   fetchAboutMovement();
//   // }, [fetchAboutMovement]);

//   // if (loading) {
//   //   return <div className={styles.loading}>Загрузка данных о движении...</div>;
//   // }

  // if (error) {
  //   return <div className={styles.error}>Ошибка при загрузке данных: {error}</div>;
  // }

  // if (!data) {
  //   return <div className={styles.empty}>Нет данных о движении</div>;
  // }

  const MOVEMENT_DATA = {
    title: "О движении",
    description:
      "Безусловно, высокотехнологичная концепция общественного уклада предопределяет высокую востребованность системы массового участия. Значимость этих проблем настолько очевидна, что синтетическое тестирование предопределяет высокую востребованность экспериментов, поражающих по своей масштабности и грандиозности. В своём стремлении повысить качество жизни, они забывают, что сложившаяся структура организации выявляет срочную потребность прогресса профессионального сообщества. ",
    imageRight: Imge1,
    ImageLeft: Imge2,
  };

  return (
    <section className={styles.movementSection}>
      <MultiContainer>
        <div className={styles.container}>
          <div className={styles.container__header}>
            <Typography color='black' variant='title' weight='600' className={styles.title}>
              {MOVEMENT_DATA.title}
            </Typography>
            <Typography
              color='black'
              variant='desc'
              weight='400'
              className={styles.description}
            >
              {MOVEMENT_DATA.description}
            </Typography>
          </div>

           <div className={styles.ImageWrapper}>
             <img
                 src={MOVEMENT_DATA.imageRight}
                 alt='People laughing'
                 className={styles.bigImage}
               />

            
              <img
                src={MOVEMENT_DATA.ImageLeft}
                alt='People laughing'
                className={styles.smallImage}
              />
            
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};
