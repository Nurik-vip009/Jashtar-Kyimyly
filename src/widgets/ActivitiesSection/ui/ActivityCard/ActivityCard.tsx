// import React from 'react';
// import clsx from 'clsx';
// import styles from './ActivityCard.module.scss';
// import img from '../../../../shared/assets/images/drop down.svg'
// import img1 from '../../../../shared/assets/images/instagram-line.svg'
// import img2 from '../../../../shared/assets/images/telegram-2-fill.svg'
// interface ActivityCardProps {
//   title: string;
//   description: string;
//   imageSrc: string;
//   bgColor: string;
// }
// const ActivityCard: React.FC<ActivityCardProps> = ({ title, description, imageSrc, bgColor }) => {
//   const cardStyle = {
//     '--background-image-url': `url(${imageSrc})`,
//     boxSizing: 'border-box',
//     background: `linear-gradient(to left, rgba(0, 0, 0, 0) 0%, ${bgColor} 43%), var(--background-image-url) no-repeat right bottom / auto 100%`,
//   } as React.CSSProperties;
//   return (
//     <div className={clsx(styles.activityCard)} style={cardStyle}>
//       <div className={styles.content}>
//         <h3 className={styles.title}>{title}</h3>
//         <p className={styles.description}>{description}</p>
//         <div className={styles.buttons}>
//           <span><img src={img2} alt="" /></span>
//           <span><img src={img1} alt="" /></span>
//         <button className={styles.button}>Подробнее <img src={img} alt="" /></button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default ActivityCard;
import React from 'react';
import clsx from 'clsx';
import styles from './ActivityCard.module.scss';
import dropDownImg from '../../../../shared/assets/images/drop down.svg';
import instagramImg from '../../../../shared/assets/images/instagram-line.svg';
import telegramImg from '../../../../shared/assets/images/telegram-2-fill.svg';
import img from '../../../../shared/assets/images/drop down.svg';
import img1 from '../../../../shared/assets/images/instagram-line.svg';
import img2 from '../../../../shared/assets/images/telegram-2-fill.svg';
import { Typography } from '@/shared/ui';
interface ActivityCardProps {
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
  onClick?: () => void;
}
const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  imageSrc,
  bgColor,
  onClick,
}) => {
  const cardStyle = {
    backgroundColor: bgColor,
  } as React.CSSProperties;

  return (
    <div className={clsx(styles.activityCard)} style={cardStyle}>
      <div className={styles.content}>
        <Typography
          variant='title'
          color='white'
          weight='600'
          className={styles.title}
        >
          {title}
        </Typography>

        <Typography
          variant='desc'
          color='white'
          weight='500'
          className={styles.description}
        >
          {description}
        </Typography>

        <div className={styles.buttons}>
          <span className={styles.icons}>
            <img src={img2} alt='telegram' />
          </span>
          <span className={styles.icons}>
            <img src={img1} alt='instagram' />
          </span>
          <button onClick={onClick} className={styles.button}>
            <Typography variant='card_button' color='black' weight='400'>
              Подробнее
            </Typography>
            <img src={img} alt='' />
          </button>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img src={imageSrc} alt='' className={styles.image} />

        
      </div>
    </div>
  );
};

export default ActivityCard;
