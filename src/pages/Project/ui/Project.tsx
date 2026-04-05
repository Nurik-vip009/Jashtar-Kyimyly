// import { useEffect } from "react";
import { Link } from 'react-router-dom';
import Navpanel from '@/widgets/Navpanel/Navpanel';
import styles from './Project.module.scss';
import { useTranslation } from 'react-i18next';
import { Typography } from '@/shared/ui';
import Image1 from '@/shared/assets/images/image (4).png';
// import { useProjectStore } from "@/app/store/project/project";

const describetion =
  'Ясность нашей позиции очевидна: новая модель организационной деятельности позволяет оценить значение позиций, занимаемых участниками в отношении поставленных задач.';
const name = 'Проект “Название”';
const data = [
  {
    id: 1,
    title: name,
    description: describetion,
    image: Image1,
  },
  {
    id: 2,
    title: name,
    description: describetion,
    image: Image1,
  },
  {
    id: 3,
    title: name,
    description: describetion,
    image: Image1,
  },
  {
    id: 4,
    title: name,
    description: describetion,
    image: Image1,
  },
  {
    id: 5,
    title: name,
    description: describetion,
    image: Image1,
  },
];

export const Project = () => {
  // const { data, loading, error, fetchProjects } = useProjectStore();
  const { t, i18n } = useTranslation();
  // useEffect(() => {
  //   fetchProjects();
  // }, [fetchProjects]);

  // if (loading) return <div className={styles.loading}>Загрузка проектов...</div>;
  // if (error) return <div className={styles.error}>Ошибка при загрузке данных: {error}</div>;
  // if (!data.length) return <div className={styles.empty}>Проекты не найдены</div>;

  return (
    <div className={styles.projectSection}>
      <Navpanel
        text={t('projects.home')}
        link='/'
        text2={t('projects.projects')}
      />
      <Typography
        variant='title'
        weight='600'
        color='black'
        className={styles.sectionTitle}
      >
        {t('projects.projects')}
      </Typography>
      <div className={styles.projectGrid}>
        {data.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <img
              src={project.image}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.cardContent}>
              <Typography
                variant='card_title'
                weight='600'
                color='black'
                className={styles.cardTitle}
              >
                {project.title}
              </Typography>
              <Typography
                variant='card_desc'
                weight='400'
                color='black'
                className={styles.cardDescription}
              >
                {project.description}
              </Typography>
              <Link to={`/project/${project.id}`}>
                <button className={styles.learnMoreButton}>
                  Узнать больше
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
