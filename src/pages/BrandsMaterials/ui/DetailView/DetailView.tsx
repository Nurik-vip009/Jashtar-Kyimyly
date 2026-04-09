import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailView.module.scss";
import Materials from "../Materials1/Materials";
import { useDetailStore } from "@/app/store/detail/detailStore";
import Navpanel from "@/widgets/Navpanel/Navpanel";
import { useTranslation } from "react-i18next";
function DetailView() {
  const { id } = useParams<{ id: string }>();
  // const { selectedMaterial, fetchMaterialById, loading, error } =
  //   useDetailStore();
  const { t } = useTranslation();

  // useEffect(() => {
  //   if (id) fetchMaterialById(Number(id));
  // }, [id, fetchMaterialById]);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p style={{ color: "red" }}>{error}</p>;
  // if (!selectedMaterial) return <p>No material found</p>;

  const selectedMaterial = {
    id: 1,
    image:
      "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
    title: "Название мерча 1",
    price: "1000",
    description:
      "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
  };
  return (
    <div className="">
      <div className={styles.detailview}>
        <div className={styles.text}>
          <Navpanel
            text={t("brandMaterials.home")}
            link="/"
            text2={t("brandMaterials.brandMaterials")}
            link2="/main"
            text3={selectedMaterial.title}
          />
        </div>
        <div className={`${styles.view} container`}>
          <div className={styles.titleMobile}>
            <h1>{selectedMaterial.title}</h1>
            <h4>{selectedMaterial.description}</h4>
          </div>
          <div className={styles.gallerry}>
            <img src={selectedMaterial.image} alt={selectedMaterial.title} />
            <div className={styles.images}>
              <img src={selectedMaterial.image} alt={selectedMaterial.title} />
              <img src={selectedMaterial.image} alt={selectedMaterial.title} />
              <img src={selectedMaterial.image} alt={selectedMaterial.title} />
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.title}>
              <h1>{selectedMaterial.title}</h1>
              <h4>{selectedMaterial.description}</h4>
            </div>
            <div className={styles.price}>
              <h2>{t("brandMaterials.price")}:</h2>
              <p>{selectedMaterial.price} KGZ</p>
            </div>
          </div>
        </div>
        <div className={styles.materials}>
          <Materials />
        </div>
      </div>
    </div>
  );
}

export default DetailView;
