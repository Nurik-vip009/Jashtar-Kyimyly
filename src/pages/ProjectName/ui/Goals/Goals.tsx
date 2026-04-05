import type { FC } from 'react';
import styles from './Goals.module.scss';
import { MultiContainer, Typography } from '@/shared/ui';

export const Goals: FC = () => {
  return (
    <MultiContainer className={styles.goalsBlock}>
      <div className={styles.goalsHeader}>
        <Typography variant='title' color='black' weight='600'>
          Цели и задачи проекта
        </Typography>
      </div>
      <div className={styles.goalsContent}>
        <ul>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              Есть над чем задуматься:
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              тщательные исследования
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              конкурентов направят популярность
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              среди определенных слоев населения,
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              а значит, должны быть заблокированы
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              в рамках своих собственных
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              рациональных и ограничений.
            </Typography>
          </li>
        </ul>
        <ul>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              Есть над чем задуматься:
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              тщательные исследования
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              конкурентов направят популярность
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              среди определенных слоев населения,
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              а значит, должны быть заблокированы
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              в рамках своих собственных
            </Typography>
          </li>
          <li>
            <Typography variant='desc' color='black' weight='400'>
              рациональных и.
            </Typography>
          </li>
        </ul>
      </div>
    </MultiContainer>
  );
};
