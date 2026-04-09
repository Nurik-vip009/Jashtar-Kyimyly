import React from 'react'
import styles from "./Main.module.scss"
import Materials from '../Materials1/Materials'
import NameMerch from '../NameMerch/NameMerch'
// import Materials2 from '../Materials2/Materials2'
import Navpanel from '@/widgets/Navpanel/Navpanel'
import { useTranslation } from 'react-i18next'

function Main() {
    const {t, i18n} = useTranslation()
    return (
        <div className={styles.main}>
            <div className={styles.text}>
                <Navpanel text={t('brandMaterials.home')} link='/' text2={t('brandMaterials.brandMaterials')}/>
            </div>

            <div className={styles.herotext}>
                <h1>{t('brandMaterials.brandMaterials')}</h1>
                <h3>Однозначно, интерактивные прототипы формируют глобальную экономическую сеть и при этом —  заблокиро ваны в рамках своих собственных рациональных ограничений. Значимость этих проблем настолько очевидна.</h3>
            </div>
            <Materials />
            <NameMerch />
            <Materials />
        </div>
    )
}

export default Main
