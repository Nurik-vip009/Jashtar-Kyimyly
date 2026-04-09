import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Card from '@/widgets/Card/Card';
import Navpanel from '@/widgets/Navpanel/Navpanel';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEventsStore } from '@/app/store/events/events';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@/shared/ui';

// ... (все твои импорты)

function EventsArchivePage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { event, loading, error, fetchevents } = useEventsStore();

  const pageSize = 6;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchevents();
  }, [fetchevents]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const safeEvents = event || [];
  const totalPages = Math.ceil(safeEvents.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const currentEvents = safeEvents.slice(startIndex, startIndex + pageSize);

  const handleCardClick = (id: number) => {
    navigate(`/events/${id}`);
  };

  if (loading)
    return (
      <div className='container'>
        <div className='loader'></div>
      </div>
    );
  if (error)
    return (
      <div className='container'>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
    );

  return (
    <div className={`${styles.eventsArchivePage} container`}>
      <Navpanel
        text={t('events.home')}
        link='/'
        text2={t('events.events')}
        link2='/events'
        text3={t('events.eventArchive')}
      />

      <div className={styles.eventsText2}>
        <Typography variant='title' color='black' weight='600'>
          {t('events.eventArchive')}
        </Typography>
      </div>

      <div className={styles.eventsArchive2}>
        {currentEvents.length > 0 ? (
          currentEvents.map((item) => (
            <Card
              onClick={() => handleCardClick(item.id)}
              key={item.id}
              item={item}
            />
          ))
        ) : (
          <p>{t('events.noEvents') || 'Архив пуст'}</p>
        )}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          {/* ... твой код кнопок пагинации ... */}
        </div>
      )}
    </div>
  );
}

export default EventsArchivePage;
