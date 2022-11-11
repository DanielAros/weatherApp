import React from "react";
import styles from './CardMoreInfo.module.css';
import CardEspecificInfo from "../CardsEspecificInfo/CardEspecificInfo";

const CardMoreInfo = () => {
    return(
        <div className={styles.containerCard}>
           <CardEspecificInfo/>
           <CardEspecificInfo/>
           <CardEspecificInfo/>
           <CardEspecificInfo/>
           <CardEspecificInfo/>
           <CardEspecificInfo/>
           <CardEspecificInfo/>
           <CardEspecificInfo/>
        </div>
    )
}

export default CardMoreInfo;