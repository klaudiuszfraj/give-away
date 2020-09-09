import React from 'react';
import style from './ListItem.module.scss';

function ListItem({ type, header, details, items }) {


    return (
        <div className={style.ListItem}>
            <div className={style.ListItem__mainInfo}>
                <h3>{type}: "{header}"</h3>
                <p>Cel i misja: {details}</p>
            </div>
            <div className={style.ListItem__details}>
                <p>{items}</p>
            </div>
        </div>
    );
}

export default ListItem;