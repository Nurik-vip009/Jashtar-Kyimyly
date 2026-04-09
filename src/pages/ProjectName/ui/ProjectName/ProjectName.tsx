import { MultiContainer, Typography } from '@/shared/ui';
import styles from './ProjectName.module.scss';

export const ProjectName = () => {
  return (
    <MultiContainer className={styles.projectBlock}>
      <div className={styles.projectHeader}>
        <Typography variant='title' color='black' weight='600'>
          Проект "Название"
        </Typography>
      </div>
      <div className={styles.projectContent}>
        <Typography variant='desc' color='black' weight='400'>
          Однозначно, интерактивные прототипы формируют глобальную экономическую
          сеть и при этом — заблокированы в рамках своих собственных
          рациональных ограничений. Значимость этих проблем настолько очевидна,
          что повышение уровня гражданского сознания создаёт необходимость
          включения в производственный план целого ряда внеочередных мероприятий
          с учётом комплекса приоретизации разума над эмоциями.
        </Typography>
      </div>
      <img
        src='https://elements-resized.envatousercontent.com/elements-video-cover-images/9f39a1d3-c1df-4c20-80c3-1f32748bd111/video_preview/video_preview_0000.jpg?w=500&cf_fit=cover&q=85&format=auto&s=99e57aaec4af6cdfbeb981f134c2db4bd8337557836c1e70dd4bbe5034d392cc'
        alt=''
      />
    </MultiContainer>
  );
};
