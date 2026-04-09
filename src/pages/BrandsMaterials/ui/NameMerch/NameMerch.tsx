import React, { useEffect } from "react";
import styles from "./NameMerch.module.scss";
import { useMaterialsStore } from "../../../../app/store/Brands/materialsStore";

function NameMerch() {
  // const { materials, fetchMaterials, loading, error } = useMaterialsStore();

  // useEffect(() => {
  //     fetchMaterials();
  // }, [fetchMaterials]);

  // if (loading) return <p>Загрузка...</p>;
  // if (error) return <p>Ката: {error}</p>;
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
    <div className={styles.container2}>
      {materials.map((item) => (
        <div key={item.id} className={styles.card}>
          <img src={item.image} alt={item.title} className={styles.image} />
          <div className={styles.div}>
            <h2 className={styles.name}>{item.title}</h2>
            <p className={styles.price}>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NameMerch;
