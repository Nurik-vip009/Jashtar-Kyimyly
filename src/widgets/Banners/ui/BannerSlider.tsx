import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import styles from "./BannerSlider.module.scss";
import { useEffect, useCallback } from "react";
import { BannerStore } from "@/app/store/banner/banner";
import FirstSlide from "./Slides/FirstSlide";

export default function BannerSlider() {
  const { banners, loading, error, fetchBanners } = BannerStore();

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  // Мемоизация пропсов для Swiper (опционально)
  const paginationConfig = useCallback(
    () => ({
      clickable: true,
      dynamicBullets: false,
    }),
    []
  );

  // Состояния загрузки
  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  // Состояния ошибки
  if (error) {
    return (
      <div className={styles.error}>
        <p>Ошибка: {error}</p>
        <button onClick={() => fetchBanners()} className={styles.retryButton}>
          Попробовать снова
        </button>
      </div>
    );
  }

  // Нет баннеров
  if (!banners || banners.length === 0) {
    return (
      <div className={styles.noBanners}>
        <p>Нет доступных баннеров</p>
      </div>
    );
  }

  return (
    <div className={styles.bannerWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true }}
        navigation
        loop={banners.length > 1}
        speed={800}
        spaceBetween={0}
        slidesPerView={1}
        className={styles.bannerSwiper}
        autoplay={
          banners.length > 1
            ? {
                delay: 5000,
                disableOnInteraction: false,
              }
            : false
        }
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <FirstSlide
              image={banner.images?.[0]?.image || "not found"}
              title={banner.title || ""}
              description={banner.description || ""}
              cta_text={banner.cta_text || ""}
              cta_link={banner.cta_link || ""}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
