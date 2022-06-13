import React from 'react';
import style from '../Center/center.module.css'

const Number = () => {
    return (
        <>
        <div className={style.zero}>0</div>
        <div className='buttons'>
        <button className={style.oneBlock}>Увеличить</button>
        <button className={style.twoBlock}>Уменьшить</button>
        <button className={style.threeBlock}>Сбросить</button>
        </div>
        </>
    );
};

export default Number;