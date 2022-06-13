import React from 'react';
import logo from '../../image/Group.svg'
import styles from '../Footer/footer.module.css'

const Footer = () => {
    return (
        <div>
            <h3 className={styles.footer}>
                <img src={logo}/>
            </h3>
           <div className={styles.Fmenu}>
           <a href="#0">Партнерам</a>
        <a href="#0">Разработчикам</a>
        <a href="#0">Вакансии</a>
           </div>
           <div className={styles.intoCode}>ООО "интукод", 2020г.</div>
            
        </div>
    );
};

export default Footer;