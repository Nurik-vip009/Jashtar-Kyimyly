import { Typography } from '../Typography/Typography';
import scss from './CardActivity.module.scss';
import type { cardProps } from '@/shared/types/cardActivity/types';

export const CardActivity = ({
  image,
  title,
  description,
  fullText,
  isOpen,
  onClick,
}: cardProps) => {
  return (
    <div className={`${scss.card} ${isOpen ? scss.card_open : ''}`}>
      <div className={scss.card_container}>
        {!isOpen && (
          <div className={scss.ImageWrapper}>
            <img src={image} alt='card image' />
          </div>
        )}

        <div className={scss.mainContent}>
          <div className={scss.Content}>
            <Typography variant='title' weight='600'>
              {title}
            </Typography>

            <Typography variant='card_desc' weight='400'>
              {description}
            </Typography>

            {isOpen && (
              <div className={scss.fullText}>
                <Typography variant='card_desc' weight='400'>
                  {fullText}
                </Typography>
              </div>
            )}

            <div className={scss.buttons}>
              <div className={scss.socials}>
                {!isOpen && (
                  <div className={scss.iconsContainer}>
                    <div className={scss.telegram}>
                      {/* <img src={telegram} alt='telegram' /> */}
                    </div>
                    <div className={scss.instagram}>
                      {/* <img src={instagram} alt='instagram' /> */}
                    </div>
                  </div>
                )}
              </div>
              <button className={scss.button} onClick={onClick}>
                <Typography variant='card_button' color='black' weight='400'>
                  {isOpen ? '' : 'Подробнее'}
                </Typography>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
