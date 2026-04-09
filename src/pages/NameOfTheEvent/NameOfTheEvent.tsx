import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navpanel from '@/widgets/Navpanel/Navpanel';
import { useEventDetailStore } from '@/app/store/eventDetail/eventsDetails';
import { useLanguageStore } from '@/app/store/languageStore';
import styles from './style.module.scss';
import img3 from '../../shared/assets/icons/time-line.svg';
import img4 from '../../shared/assets/icons/calendar-line.svg';
import img5 from '../../shared/assets/icons/map-pin-line.svg';
import { Typography } from '@/shared/ui';
function NameOfTheEvent() {
  const { t } = useTranslation();
  const { id } = useParams();

  const { eventDetail, fetchEventDetail, loading, error, clearDetail } =
    useEventDetailStore();
  const { currentLang } = useLanguageStore();

  useEffect(() => {
    if (id) {
      fetchEventDetail(Number(id));
    }

    return () => {
      if (clearDetail) clearDetail();
    };
  }, [id, currentLang, fetchEventDetail, clearDetail]);

  if (loading)
    return (
      <div className='container'>
        <div className={styles.loaderWrapper}>
          <div className='loader'></div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className='container'>
        <p className={styles.errorMessage}>
          {t('errors.fetchError') || 'Ошибка при загрузке данных'}: {error}
        </p>
      </div>
    );

  if (!eventDetail) return null;

  const eventDate = new Date(eventDetail.date);
  const formattedDate = eventDate.toLocaleDateString(
    currentLang === 'ru' ? 'ru-RU' : 'ky-KG',
    {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    },
  );

  const images = [];
  if (eventDetail.detail_image) images.push(eventDetail.detail_image);

  return (
    <div className={`${styles.wrapper} container`}>
      <Navpanel
        text={t('events.home')}
        link='/'
        text2={t('events.events')}
        link2='/events'
        text3={eventDetail.title}
      />

      <div className={styles.event}>
        <Typography
          variant='title'
          weight='600'
          color='black'
          className={styles.title}
        >
          {eventDetail.title}
        </Typography>

        <Typography
          variant='desc'
          weight='400'
          color='black'
          className={styles.description}
        >
          {eventDetail.full_text || eventDetail.short_text}
        </Typography>

        <div className={styles.imagesBlock}>
          <div
            className={`${styles.imagesGrid} ${images.length === 1 ? styles.singleImage : ''}`}
          >
            {images.map((img, index) => (
              <img key={index} src={img} alt={eventDetail.title} />
            ))}
          </div>
        </div>

        <div className={styles.details}>
          <Typography
            variant='title'
            weight='600'
            color='black'
            className={styles.detailsTitle}
          >
            {t('events.detailevent')}
          </Typography>

          <div className={styles.detailList}>
            <span className={styles.detail}>
              <img src={img3} alt='Time' />
              {eventDetail.date.includes('T')
                ? eventDate.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : '10:00'}
            </span>

            <span className={styles.detail}>
              <img src={img4} alt='Calendar' /> {formattedDate}
            </span>

            <span className={styles.detail}>
              <img src={img5} alt='Location' />
              {t('events.location') || 'г. Бишкек'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameOfTheEvent;
