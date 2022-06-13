import React from 'react';
import styles from '../Header/header.module.css'
import logo from '../../image/image1.svg'
const Header = () => {
    return (
        <div className={styles.header1}>

        <div className= {styles.header}>
            <img src={logo} />

        </div>

        <div className={styles.text}>
            <a href='0#'>Главное</a>
            <a href='0#'>O нас</a>
            <a href='0#'>Контакты</a>

        </div>
        </div>
    );
};

export default Header