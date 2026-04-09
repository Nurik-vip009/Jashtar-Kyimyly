import funChildImage from "@/shared/assets/images/fun-child.jpg";
import styles from "./../BannerSlider.module.scss";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

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
  const [imgError, setImgError] = useState(false);

  const handleClick = () => {
    if (cta_link) {
      if (cta_link.startsWith("http")) {
        window.open(cta_link, "_blank");
      } else {
        navigate(cta_link);
      }
    }
  };
  // Полный URL изображения (если приходит относительный)
  const getImageUrl = (url: string) => {
    if (!url) return funChildImage;
    if (url.startsWith("http")) return decodeURIComponent(url); // <-- кодируем URL
    return encodeURI(
      `http://157.230.235.0${url.startsWith("/") ? "" : "/"}${url}`
    );
  };

  const handleImageError = () => {
    console.error("Failed to load image:", image);
    setImgError(true);
  };
  console.log(getImageUrl(image));

  return (
    <div className={styles.banner}>
      <img
        src={imgError ? funChildImage : getImageUrl(image)}
        alt={title || "banner"}
        className={styles.bannerBg}
        onError={handleImageError}
        loading="lazy"
      />
      <div className={styles.bannerOverlay}></div>

      <div className={styles.bannerContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={handleClick}>
          {cta_text} <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FirstSlide;
