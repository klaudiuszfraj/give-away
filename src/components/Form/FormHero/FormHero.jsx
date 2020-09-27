import React from 'react';
import style from './FormHero.module.scss'
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";

function FormHero() {

    const steps = ['Wybierz rzeczy', 'Spakuj je w worki', 'Wybierz fundacje', 'Zamów kuriera'];

    return (
        <section className={style.Form__hero}>
            <div className={style.Form__hero__img}/>
            <div className={style.Form__hero__info}>
                <h1>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h1>
                <Decoration/>
                <p>Wystarczą 4 proste kroki</p>

                <div className={style.hero__boxes}>
                    {steps.map((step, index) => (
                        <div>
                            <p>{index + 1}</p>
                            <p>{step}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default FormHero;