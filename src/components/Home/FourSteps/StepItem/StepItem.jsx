import React from 'react';
import style from './Step.module.scss';



function StepItem({img, header, text }) {
    return (
        <div className={style.StepItem}>
            <img src={img} alt="obrazek"/>
            <h3>{header}</h3>
            <p>{text}</p>
        </div>
    );
}

export default StepItem;