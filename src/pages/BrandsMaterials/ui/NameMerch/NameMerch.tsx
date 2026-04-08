import React, { useEffect } from "react";
import styles from "./NameMerch.module.scss";
import { useMaterialsStore } from "../../../../app/store/Brands/materialsStore"

function NameMerch() {
    const { materials, fetchMaterials, loading, error } = useMaterialsStore();

    useEffect(() => {
        fetchMaterials();
    }, [fetchMaterials]);

    if (loading) return <p>Загрузка...</p>;
    if (error) return <p>Ката: {error}</p>;

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
