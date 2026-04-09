import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./BannerSlider.module.scss";
import { useEffect } from "react";
import { BannerStore } from "@/app/store/banner/banner";
import FirstSlide from "./Slides/FirstSlide";

export default function BannerSlider() {
  const { banners, loading, error, fetchBanners } = BannerStore();
  const banner = [
    {
      id: 1,
      image:
        "https://www.cedarparktexas.gov/ImageRepository/Document?documentID=11249",
      title: "Banner",
      description:
        "Предварительные выводы неутешительны: высококачественный прототип будущего проекта создаёт необходимость включения ",
      cta_text: "Вступить в движение",
      cta_link: "link",
    },
    {
      id: 2,
      image:
        "https://www.cedarparktexas.gov/ImageRepository/Document?documentID=11249",
      title: "Banner",
      description:
        "Предварительные выводы неутешительны: высококачественный прототип будущего проекта создаёт необходимость включения ",
      cta_text: "Вступить в движение",
      cta_link: "link",
    },
    {
      id: 3,
      image:
        "https://www.cedarparktexas.gov/ImageRepository/Document?documentID=11249",
      title: "Banner",
      description:
        "Предварительные выводы неутешительны: высококачественный прототип будущего проекта создаёт необходимость включения ",
      cta_text: "Вступить в движение",
      cta_link: "link",
    },
  ];
  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  // if (loading) return <div className="loader"></div>;
  // if (error) return <div>Ошибка: {error}</div>;

  return (
    <div className={styles.bannerWrapper}>
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{ clickable: true, el: `.${styles.customPagination}` }}
        navigation
        loop
        className={styles.bannerSwiper}
      >
        {banner.map((banner) => (
          <SwiperSlide key={banner.id}>
            <FirstSlide
              image={banner.image}
              title={banner.title}
              description={banner.description}
              cta_text={banner.cta_text}
              cta_link={banner.cta_link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.customPagination}></div>
    </div>
  );
}
