import funChildImage from "@/shared/assets/images/fun-child.jpg";
import styles from "./../BannerSlider.module.scss";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { getImageUrl } from "@/shared/utils/imageHelper";

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

  useEffect(() => {
    setImgError(false);
  }, [image]);

  const handleClick = () => {
    if (cta_link) {
      if (cta_link.startsWith("http")) {
        window.open(cta_link, "_blank");
      } else {
        navigate(cta_link);
      }
    }
  };

  const handleImageError = () => {
    console.error("Image failed to load:", image);
    setImgError(true);
  };

  const imageUrl = getImageUrl(image);
  const finalImageUrl = !imgError && imageUrl ? imageUrl : funChildImage;

  console.log("Original image path:", image);
  console.log("Final image URL:", finalImageUrl);

  return (
    <div className={styles.banner}>
      <img
        src={finalImageUrl}
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
