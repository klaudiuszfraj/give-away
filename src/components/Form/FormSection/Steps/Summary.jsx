import React from 'react';
import style from './Steps.module.scss'
import classNames from "classnames";


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
    const itemsList = [
        {...clothesToUse},
        {...clothesToTrash},
        {...toys},
        {...books},
        {...different}
        ];
    const checkedItemsList = itemsList.filter(value => Object.keys(value).length !== 0);
    const renderItemsList = checkedItemsList.map(item => (
        <li key={item.name}>{`${item.desc}, `}</li>
    ))

    const timeToString = ('0' + date.getHours()).slice(-2) + ':'
        + ('0' + (date.getMinutes())).slice(-2);

    const myDateString = ('0' + date.getDate()).slice(-2) + '/'
        + ('0' + (date.getMonth()+1)).slice(-2) + '/'
        + date.getFullYear();

    return (
        <div className={classNames(style.steps, style.summary)}>
            <h2>Podsumowanie Twojej darowizny</h2>
            <div className={style.container}>
                <div className={style.giveaway}>
                    <p>Oddajesz:</p>
                    <div>
                        {/*todo:: render items*/}
                        <p className={style.items}>{trashBagsAmount} worki z: {renderItemsList} </p>
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
                            <p>{`${timeToString}`}</p>
                        </div>
                        <div>
                            {/*todo:: space-between*/}
                            <p>Uwagi dla kuriera</p>
                            <p className={style.message}>{messageForCourier}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Summary;