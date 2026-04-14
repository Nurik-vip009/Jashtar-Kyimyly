import { Typography } from '../Typography/Typography';
import { Link } from 'react-router-dom';
import scss from './CardProject.module.scss';
import type { CardProps } from '@/shared/types/cardProject/types';

export const CardProject = ({ image, title, desc, id }: CardProps) => {
  return (
    <div className={scss.card__container}>
      <div className={scss.ImageWrapper}>
        <img className={scss.image} src={image} alt='card Image' />
      </div>

      <div className={scss.mainContent}>
        <Typography variant='card_title' weight='600' color='black'>
          {title}
        </Typography>

        <Typography variant='card_title' weight='600' color='black'>
          {desc}
        </Typography>

        <Link to={`/project/${id}`}>
          <button className={scss.learnMoreButton}>Узнать больше</button>
        </Link>
      </div>
    </div>
  );
};
