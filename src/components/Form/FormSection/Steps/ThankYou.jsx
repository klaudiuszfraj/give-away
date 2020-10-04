import React from 'react';
import style from './Steps.module.scss'
import {ReactComponent as Decoration} from "../../../../assets/Decoration.svg";

function ThankYou() {
    return (
        <div className={style.ThankYou}>
            <p>Dziękujemy za przesłanie formularza</p>
            <p>Na maila prześlemy wszelkie</p>
            <p>informacje o odbiorze.</p>
            <Decoration/>
        </div>
    );
}

export default ThankYou;