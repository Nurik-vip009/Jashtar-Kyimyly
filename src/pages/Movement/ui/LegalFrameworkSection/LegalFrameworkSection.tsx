import { MultiContainer, Typography } from '@/shared/ui';
import styles from './LegalFrameworkSection.module.scss';
import CalendarIcon from '@/shared/assets/images/Legalframeworksection1.svg';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const LegalFrameworkSection: FC = () => {
  const { t, i18n } = useTranslation();
  const laws = [
    {
      date: '04.06.2024',
      title: 'Закон “О молодёжи”',
      description: 'Закон Кыргызской Республики №157',
      link: '#',
    },
    {
      date: '04.06.2024',
      title: 'Закон “О молодёжи”',
      description: 'Закон Кыргызской Республики №157',
      link: '#',
    },
    {
      date: '04.06.2024',
      title: 'Закон “О молодёжи”',
      description: 'Закон Кыргызской Республики №157',
      link: '#',
    },
  ];

  return (
    <section className={styles.legalFrameworkSection}>
      <MultiContainer>
        <div className={styles.content}>
          <Typography variant='title' color='white' className={styles.title}>
            {/* {t('aboutTheMovement.laws')} */}
            Законодательная база
          </Typography>
          <div className={styles.cardsWrapper}>
            {laws.map((law, idx) => (
              <div key={idx} className={styles.card}>
                <div className={styles.date}>
                  <span className={styles.icon}>
                    <img src={CalendarIcon} alt='calendar icon' />
                  </span>
                  <Typography variant='card_date' color='black400' weight='500'>
                    {law.date}
                  </Typography>
                </div>
                <div className={styles.lawTitle}>
                  <Typography variant='card_title' color='black' weight='600'>
                    {law.title}
                  </Typography>
                </div>
                <div className={styles.lawDesc}>
                  <Typography variant='card_desc' color='black' weight='400'>
                    {law.description}
                  </Typography>
                </div>
                <div className={styles.buttonWrapper}>
                  <a className={styles.downloadBtn} href={law.link}>
                    <Typography
                      variant='card_button'
                      color='white'
                      weight='400'
                    >
                      Скачать PDF
                    </Typography>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </MultiContainer>
    </section>
  );
};
