import React from "react";
import styles from "./Main.module.scss";
import Materials from "../Materials1/Materials";
import NameMerch from "../NameMerch/NameMerch";
// import Materials2 from '../Materials2/Materials2'
import Navpanel from "@/widgets/Navpanel/Navpanel";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Main() {
  const { t, i18n } = useTranslation();
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
      id: 2,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
    {
      id: 3,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
    {
      id: 4,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
    {
      id: 5,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
    {
      id: 6,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
    {
      id: 7,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
    {
      id: 8,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
    {
      id: 9,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
    {
      id: 10,
      image:
        "https://cdn-sh1.vigbo.com/shops/184868/products/22341008/images/2-e14428d4acf615f74cb36aaa67e09f87.jpg",
      title: "Название мерча 1",
      price: "1000",
      description:
        "Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокированы в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.",
    },
  ];
  return (
    <div className={styles.main}>
      <Navpanel
        text={t("brandMaterials.home")}
        link="/"
        text2={t("brandMaterials.brandMaterials")}
      />
      <div className={`${styles.herotext} container`}>
        <h1>{t("brandMaterials.brandMaterials")}</h1>
        <h3>
          Однозначно, интерактивные прототипы формируют глобальную экономическую
          сеть и при этом — заблокиро ваны в рамках своих собственных
          рациональных ограничений. Значимость этих проблем настолько очевидна.
        </h3>
      </div>
      <div className={`${styles.content} container`}>
        {materials.map((item) => (
          <Link key={item.id} to="/detailview">
            <div className={styles.materialCard}>
              <img src={item.image} alt={item.title} />
              <div className={styles.cardTitle}>
                <h4>{item.title}</h4>
                <p className={styles.price}>{item.price}</p>
              </div>
            </div>
          </Link>
        ))}
        {/* {materials.map((item) => (

          <Link key={item.id} to={`/detailview`}>
            <div className={styles.materialCard}>
              <img src={item.image} alt={item.title} />
              <div className={styles.cardTitle}>
                <h4>{item.title}</h4>
                <p className={styles.price}>{item.price}</p>
              </div>
            </div>
          </Link>
        ))} */}
      </div>
      {/* <Materials />
      <NameMerch />
      <Materials /> */}
    </div>
  );
}

export default Main;
