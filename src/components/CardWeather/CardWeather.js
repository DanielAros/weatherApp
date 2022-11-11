import React from "react";
import styles from './CardWeather.module.css';
import MostlySunny from '../../assets/icons/mostly-sunny.png';

const CardWeather = (props) => {
    return(
        <div className={styles.containerCard}>
            <div className={styles.containerLeft}>
                <h1 className={styles.city}>Queretaro, Mx</h1>
                <p className={styles.grades}>23 °C</p>
                <p className={styles.date}>Lunes 07 de agosto</p>
            </div>
            <div className={styles.containerRigth}>
                <div className={styles.containerImg}>
                    <img src={MostlySunny}/>
                </div>
                <p className={styles.weatherMain}>Sunny</p>
                <p className={styles.weatherDescription}>Nubes dispersas</p>
            </div>
        </div>
    )
}

export default CardWeather;