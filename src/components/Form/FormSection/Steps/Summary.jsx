import React, {useState} from 'react';
import style from './Steps.module.scss'


function Summary(form) {
    return (
        <div className={style.summary}>
            <h2>Podsumowanie Twojej darowizny</h2>
            <div className={style.container}>
                <div className={style.giveaway}>
                    <p>Oddajesz:</p>
                    <div>
                        <p>4dfadaasd sfd</p>
                        <p>dla lokalizacji:</p>
                    </div>
                </div>
                <div className={style.adress}>
                    <p>Adres odbioru:</p>
                    <div>
                        <p>Ulica</p>
                        <p>nnnnn</p>
                    </div>
                    <div>
                        <p>Miasto</p>
                        <p>nnn</p>
                    </div>
                    <div>
                        <p>Kod pocztowy</p>
                        <p>nnn</p>
                    </div>
                </div>
                <div>
                    <p>Nume telefonu</p>
                    <p>nnn</p>
                </div>
                <p>Termin odbioru</p>
                <div>
                    <p>Data</p>
                    <p>dddd</p>
                </div>
                <div>
                    <p>Godzina</p>
                    <p>ggggggg</p>
                </div>
                <div>
                    <p>Uwagi dla kuriera</p>
                    <p>uuuuu</p>
                </div>
            </div>
        </div>
    );
}

export default Summary;