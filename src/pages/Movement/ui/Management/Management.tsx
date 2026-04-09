import styles from "./Management.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import { MultiContainer, Typography } from "@/shared/ui";
import Image0 from "@/shared/assets/images/authImage.png";
import { useManagementStore } from "@/app/store/about-movement/managementPerson";
import { useLanguageStore } from "@/app/store/languageStore";

//test push

// const data = [
//   {
//     id: 1,
//     full_name: "Иван Иванов",
//     position: "Глава движения",
//     image: Image0,
//   },
//   {
//     id: 2,
//     full_name: "Иван Иванов",
//     position: "Глава движения",
//     image: Image0,
//   },
//   {
//     id: 3,
//     full_name: "Иван Иванов",
//     position: "Глава движения",
//     image: Image0,
//   },
//   {
//     id: 4,
//     full_name: "Иван Иванов",
//     position: "Глава движения",
//     image: Image0,
//   },
//   {
//     id: 5,
//     full_name: "Иван Иванов",
//     position: "Глава движения",
//     image: Image0,
//   },
//   {
//     id: 6,
//     full_name: "Иван Иванов",
//     position: "Глава движения",
//     image: Image0,
//   },
// ];

export const Management = () => {
  const { data, loading, error, fetchManagement } = useManagementStore();
  const { currentLang } = useLanguageStore();
  const { t } = useTranslation();

  useEffect(() => {
    fetchManagement();
  }, [fetchManagement, currentLang]);

  if (loading) return <div className={styles.loading}>Загрузка...</div>;
  if (error) return <div className={styles.error}>Ошибка: {error}</div>;

  return (
    <section className={styles.management}>
      <MultiContainer>
        <div className={styles.content}>
          <Typography
            variant="title"
            color="black"
            weight="600"
            className={styles.title}
          >
            {data?.title}
          </Typography>

          <Swiper
            modules={[Mousewheel, FreeMode]}
            spaceBetween={24}
            slidesPerView={1}
            grabCursor={true}
            mousewheel={{
              forceToAxis: true,
              sensitivity: 1,
            }}
            freeMode={true}
            className={styles.swiperContainer}
            breakpoints={{
              480: { slidesPerView: 1.5, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
              1200: { slidesPerView: 4, spaceBetween: 24 },
            }}
          >
            {data?.leaders?.map((person) => (
              <SwiperSlide key={person.id}>
                <div className={styles.personCard}>
                  <img
                    src={person.image}
                    alt={person.full_name}
                    className={styles.personImage}
                  />
                  <div className={styles.personInfo}>
                    <div className={styles.shadowOverlay}></div>
                    <Typography
                      variant="desc"
                      color="white"
                      className={styles.personName}
                    >
                      {person.full_name}
                    </Typography>
                    <Typography
                      variant="desc"
                      color="white"
                      className={styles.personPosition}
                    >
                      "{person.position}"
                    </Typography>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </MultiContainer>
    </section>
  );
};
