import React from "react";
import styles from './SearchInput.module.css';
import iconSearch from "../../assets/icons/search.png"

const SearchInput = () => {
    return(
        <div className={styles.containerInput}>
            <input type="text" className={styles.input} placeholder='Buscar Ciudad'/>
            <img src={iconSearch} className={styles.iconSearchStyles}/>
        </div>
    )
}

export default SearchInput;