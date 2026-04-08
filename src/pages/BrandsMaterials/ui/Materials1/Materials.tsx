import React, { useState, useEffect } from "react";
import styles from "./Materials.module.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Materials2: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState<number>(4);
  const { t, i18n } = useTranslation();
  const updateVisibleCount = () => {
    const width = window.innerWidth;
    if (width <= 977) setVisibleCount(3);
    else if (width <= 1200) setVisibleCount(4);
    else setVisibleCount(4);
  };
  useEffect(() => {
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);
  const materials = [
    {
      id: 1,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
    {
      id: 1,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
    {
      id: 1,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
  ];

  return (
    <div className="container">
      <div className={styles.brand}>
        <div className={styles.headMaterials}>
          <h1>{t("brandMaterials.SimilarProducts")}</h1>
        </div>
        <div className={styles.itemMaterialCards}>
          {materials.slice(0, visibleCount).map((item) => (
            <Link key={item.id} to={`/detailview`}>
              <div className={styles.materialCard}>
                <img src={item.image} alt={item.title} />
                <div className={styles.cardTitle}>
                  <h4>{item.title}</h4>
                  <p className={styles.price}>{item.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Materials2;
