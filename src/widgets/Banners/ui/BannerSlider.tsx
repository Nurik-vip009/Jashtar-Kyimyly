import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./BannerSlider.module.scss";
import { useEffect } from "react";
import { useHomeStore } from "../../../app/store/home/homeStore";
import FirstSlide from "./Slides/FirstSlide";

export default function BannerSlider() {
  const { banners, loading, error, fetchHomeData } = useHomeStore();

  useEffect(() => {
    fetchHomeData();
  }, [fetchHomeData]);

  // Отладка: выводим баннеры
  useEffect(() => {
    if (banners && banners.length > 0) {
      console.log(
        "Banners loaded:",
        banners.map((b) => ({
          id: b.id,
          title: b.title,
          imageUrl: b.images?.[0]?.image,
          fullImageObject: b.images?.[0],
        })),
      );
    }
  }, [banners]);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>Ошибка: {error}</p>
        <button onClick={() => fetchHomeData()} className={styles.retryButton}>
          Попробовать снова
        </button>
      </div>
    );
  }

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
        onSlideChange={(swiper) => {
          console.log("Slide changed to:", swiper.activeIndex);
          console.log("Current banner:", banners[swiper.realIndex]);
        }}
      >
        {banners.map((banner: any, index: number) => {
          const imageUrl = banner.images?.[0]?.image || "";

          console.log(`Rendering slide ${index}:`, {
            id: banner.id,
            title: banner.title,
            imageUrl: imageUrl,
            hasImage: !!imageUrl,
          });

          return (
            <SwiperSlide key={`${banner.id}-${imageUrl}-${index}`}>
              <FirstSlide
                image={imageUrl}
                title={banner.title || ""}
                description={banner.description || ""}
                cta_text={banner.cta_text || ""}
                cta_link={banner.cta_link || ""}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
