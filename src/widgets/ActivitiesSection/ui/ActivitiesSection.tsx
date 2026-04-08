import React from 'react';
import ActivityCard from '../ui/ActivityCard/ActivityCard';
import img from '../../../shared/assets/images/friends.png';
import styles from './ActivitiesSection.module.scss'; 
import { useTranslation } from 'react-i18next';

function ActivitiesSection() {
  const {t, i18n} = useTranslation()
  const activitiesData = [
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#5889F6" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#57D175" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#AC7F5E" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#6155F5" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#EC5E61" },
    { title: "Волонтерство", description: "Поможем друг другу и дари добро", imageSrc: img, bgColor: "#E7BC5E" },
  ];

  return (
    <section className={styles.activitiesSection}>
      <h2 className={styles.sectionTitle}>{t('areaOfActivity.direction')}</h2>
      <div className={styles.cardsContainer}>
        {activitiesData.map((activity, index) => (
          <ActivityCard
            key={index}
            title={activity.title}
            description={activity.description}
            imageSrc={activity.imageSrc}
            bgColor={activity.bgColor}
          />
        ))}
      </div>
    </section>
  );
}

export default ActivitiesSection;

// import React, { useEffect, useState } from 'react';
// import ActivityCard from '../ui/ActivityCard/ActivityCard';
// import styles from './ActivitiesSection.module.scss';
// import { useActivityStore } from '@/app/store/activity/activity';
// import { AnimatePresence, motion } from 'framer-motion'; 
// import { DownCard } from './DownCard/DownCard';

// function ActivitiesSection() {
//   const { activities, loading, error, fetchActivities } = useActivityStore();
//   const [isShown, setIsShown] = useState<number>(-1);

//   useEffect(() => {
//     fetchActivities();
//   }, [fetchActivities]);

//   if (loading) {
//     return <div className={styles.loading}>Загрузка данных...</div>;
//   }

//   if (error) {
//     return <div className={styles.error}>Ошибка при загрузке: {error}</div>;
//   }
  
//   return (
//     <section className={styles.activitiesSection}>
//       <h2 className={styles.sectionTitle}>Направление деятельности</h2>
//       <div className={styles.cardsContainer}>
//         {activities.map((activity, index) => (
//           <React.Fragment key={activity.id}>
//             <ActivityCard
//               title={activity.title}
//               description={activity.description}
//               imageSrc={activity.image}
//               bgColor={activity.color}
//               onClick={() => setIsShown(index)}
//             />

//             <AnimatePresence>
//               {isShown === index && (
//                 <motion.div
//                   key={`downcard-${index}`}
//                   initial={{ opacity: 0, y: -30 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -30 }}
//                   transition={{ duration: 0.5, ease: "easeInOut" }}
//                 >
//                   <DownCard
//                     onClick={() => setIsShown(-1)}
//                     bgColor={activity.color}
//                     index={index}
//                     show={isShown}
//                   />
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </React.Fragment>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ActivitiesSection;
