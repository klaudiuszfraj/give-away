import React from 'react';
import style from './Steps.module.scss'


function Summary({
                     form: {
                         clothesToUse,
                         clothesToTrash,
                         toys,
                         books,
                         different,
                         trashBagsAmount,
                         localization,
                         kids,
                         singleMothers,
                         homeless,
                         disabled,
                         elderly,
                         userOrganization,
                         street,
                         city,
                         postcode,
                         mobile,
                         date,
                         messageForCourier
                     }
                 }) {
    //todo:: repalce in redux
    const renderItems = {
        clothesToUse,
        clothesToTrash,
        toys,
        books,
        different,
    };

    const dateToString = {
        day: date.getDate(),
        month: date.getMonth().length < 1 ? 0 + date.getMonth() : date.getMonth(),
        year: date.getFullYear()
    }
    console.log(dateToString)

    const myDateString = ('0' + date.getDate()).slice(-2) + '/'
        + ('0' + (date.getMonth()+1)).slice(-2) + '/'
        + date.getFullYear();
    console.log(myDateString);

    return (
        <div className={style.summary}>
            <h2>Podsumowanie Twojej darowizny</h2>
            <div className={style.container}>
                <div className={style.giveaway}>
                    <p>Oddajesz:</p>
                    <div>
                        {/*todo:: render items*/}
                        <p>{trashBagsAmount} worki, </p>
                        <p className={style.localization}>dla lokalizacji: {localization}</p>
                    </div>
                </div>
                <div className={style.adress__sec}>
                    <div>
                        <p className={style.title}>Adres odbioru:</p>
                        <div>
                            <p>Ulica</p>
                            <p>{street}</p>
                        </div>
                        <div>
                            <p>Miasto</p>
                            <p>{city}</p>
                        </div>
                        <div>
                            <p>Kod pocztowy</p>
                            <p>{postcode}</p>
                        </div>
                        <div>
                            <p>Nume telefonu</p>
                            <p>{mobile}</p>
                        </div>
                    </div>
                    <div>
                        <p className={style.title}>Termin odbioru:</p>
                        <div>
                            <p>Data</p>
                            <p>{`${myDateString}r`}</p>
                        </div>
                        <div>
                            <p>Godzina</p>
                            <p>{`${date.getHours()}:${date.getMinutes()}`}</p>
                        </div>
                        <div>
                            {/*todo:: space-between*/}
                            <p>Uwagi dla kuriera</p>
                            <p>{messageForCourier}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summary;