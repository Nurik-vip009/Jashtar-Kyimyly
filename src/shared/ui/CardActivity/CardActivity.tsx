import { Typography } from '../Typography/Typography';
import scss from './CardActivity.module.scss';
import type { cardProps } from '@/shared/types/cardActivity/types';
import ArrowDown from '@/shared/assets/images/drop down.svg';
import ArrowUp from '@/shared/assets/icons/drop up.svg';
import Instagram from '@/shared/assets/images/instagram-line.svg';
import Telegram from '@/shared/assets/images/telegram-2-fill.svg';
import ArrowRight from '@/shared/assets/icons/Arrow.svg';

export const CardActivity = ({
  image,
  title,
  description,
  fullText,
  isOpen,
  onClick,
  Course,
}: cardProps) => {
  return (
    <div
      className={`${scss.card} ${isOpen ? scss.card_open : ''}  ${Course ? scss.card_course : ''}`}
    >
      {(Course || !isOpen) && image && (
        <div className={scss.imageWrapper}>
          <img src={image} alt='' />
        </div>
      )}

      <div className={scss.card_content}>
        <div
          className={`${scss.textContent} ${isOpen ? scss.textContent_open : ''}`}
        >
          <Typography variant='title' weight='600'>
            {title}
          </Typography>

          <Typography variant='card_desc' weight='400'>
            {description}
          </Typography>

          {isOpen && !Course && (
            <div className={scss.fullText}>
              <Typography variant='card_desc' weight='400'>
                {fullText}
              </Typography>
            </div>
          )}
        </div>

        <div className={scss.footer}>
          {!Course && (
            <div className={scss.socials}>
              <div className={scss.icon}>
                <img src={Telegram} alt='telegram' />{' '}
              </div>
              <div className={scss.icon}>
                <img src={Instagram} alt='instagram' />{' '}
              </div>
            </div>
          )}

          <button
            className={`${scss.toggleButton} ${isOpen ? scss.toggleButton_open : ''}  ${Course ? scss.toggleButton_course : ''}`}
            onClick={onClick}
          >
            <span>{Course ? 'Записаться' : isOpen ? '' : 'Подробнее'}</span>
            <span className={scss.arrow}>
              {Course ? (
                <img src={ArrowRight} alt='go' />
              ) : isOpen ? (
                <img src='ArrowUp' alt='close' />
              ) : (
                <img src={ArrowDown} alt='open' />
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
