// src/pages/BrandsMaterials/ui/DetailView/DetailView.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./DetailView.module.scss";
import { useDetailStore } from "@/app/store/detail/detailStore";
import Navpanel from "@/widgets/Navpanel/Navpanel";
import { useTranslation } from "react-i18next";

function DetailView() {
  const { id } = useParams<{ id: string }>();
  const { selectedMaterial, fetchMaterialById, loading, error } =
    useDetailStore();
  const { t } = useTranslation();
  const [mainImage, setMainImage] = useState<string>("");

  useEffect(() => {
    if (id) {
      fetchMaterialById(Number(id));
    }
  }, [id, fetchMaterialById]);

  useEffect(() => {
    if (selectedMaterial) {
      setMainImage(selectedMaterial.main_image);
    }
  }, [selectedMaterial]);

  if (loading) {
    return (
      <div className={styles.detailview}>
        <div className={styles.text}>
          <Navpanel
            text={t("brandMaterials.home")}
            link="/"
            text2={t("brandMaterials.brandMaterials")}
            link2="/main"
            text3="Загрузка..."
          />
        </div>
        <div className="container">
          <div className={styles.loader}>Загрузка...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.detailview}>
        <div className={styles.text}>
          <Navpanel
            text={t("brandMaterials.home")}
            link="/"
            text2={t("brandMaterials.brandMaterials")}
            link2="/main"
            text3="Ошибка"
          />
        </div>
        <div className="container">
          <div className={styles.error}>Ошибка: {error}</div>
        </div>
      </div>
    );
  }

  if (!selectedMaterial) {
    return (
      <div className={styles.detailview}>
        <div className={styles.text}>
          <Navpanel
            text={t("brandMaterials.home")}
            link="/"
            text2={t("brandMaterials.brandMaterials")}
            link2="/main"
            text3="Товар не найден"
          />
        </div>
        <div className="container">
          <div className={styles.notFound}>Товар не найден</div>
        </div>
      </div>
    );
  }

  return (
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
          <img
            src={mainImage}
            alt={selectedMaterial.title}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
            }}
          />
          <div className={styles.images}>
            {selectedMaterial.gallery.map((img) => (
              <img
                key={img.id}
                src={img.image}
                alt={`${selectedMaterial.title} - ${img.order}`}
                onClick={() => setMainImage(img.image)}
                className={mainImage === img.image ? styles.active : ""}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder-image.jpg";
                }}
              />
            ))}
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
    </div>
  );
}

export default DetailView;
