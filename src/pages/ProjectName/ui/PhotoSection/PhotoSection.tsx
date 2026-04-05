import { MultiContainer } from '@/shared/ui';
import styles from './PhotoSection.module.scss';

export function PhotoSection() {
  return (
    <MultiContainer className={styles.photoGallery}>
      <div className={styles.gallery}>
        <img
          src='https://thumbs.dreamstime.com/b/%D1%80%D1%83%D0%BA%D0%BE%D0%BF%D0%BE%D0%B6%D0%B0%D1%82%D0%B8%D0%B5-%D0%B4%D0%B5%D0%BB%D0%B0-%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE%D0%BD%D0%B0%D1%86%D0%B8%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5-%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D1%8B%D0%B5-%D0%BB%D1%8E%D0%B4%D0%B8-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%B2-%D0%BE%D1%84%D0%B8%D1%81%D0%B5-101648951.jpg'
          alt='Team working'
          className={styles.p1}
        />

        <img
          src='https://img.freepik.com/premium-photo/young-people-work-office_97712-551.jpg'
          alt='Team collaboration 1'
          className={styles.p2}
        />
        <img
          src='https://img.freepik.com/free-photo/business-people-working-office_1098-17045.jpg'
          alt='Meeting room'
          className={styles.p3}
        />

        <img
          src='https://img.freepik.com/premium-photo/young-people-work-office_97712-551.jpg'
          alt='Team collaboration 2'
          className={styles.p4}
        />
      </div>
    </MultiContainer>
  );
}
