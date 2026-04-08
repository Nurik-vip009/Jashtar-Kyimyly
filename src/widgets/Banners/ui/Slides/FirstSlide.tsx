import funChildImage from "@/shared/assets/images/fun-child.jpg";
import { SwiperSlide } from "swiper/react";
import styles from "./../BannerSlider.module.scss";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

interface FirstSlideProps {
  image: string;
  title: string;
  description: string;
  cta_text: string;
  cta_link: string;
}

const FirstSlide = ({
  image,
  title,
  description,
  cta_text,
  cta_link,
}: FirstSlideProps) => {
  const navigate = useNavigate();
  return (
    <SwiperSlide>
      <div className={styles.banner}>
        <img
          src={image ? image : funChildImage}
          alt="banner"
          className={styles.bannerBg}
        />
        <div className={styles.bannerOverlay}></div>

        <div className={styles.bannerContent}>
          <h2>{title}</h2>
          <p>{description}</p>
          <button>
            {cta_text} <FaArrowRight />
          </button>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default FirstSlide;
