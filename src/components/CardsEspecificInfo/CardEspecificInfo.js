import React from "react";
import styles from './CardEspecificInfo.module.css';
import humidity from '../../assets/icons/humidity.png'

const CardEspecificInfo = () => {
    return(
        <div className={styles.containerCardInfo}>
            <div className={styles.containerImg}>
                <img src={humidity}/>
            </div>
            <p>18 °C</p>
            <p>Feels like</p>
        </div>
    )
}

export default CardEspecificInfo;