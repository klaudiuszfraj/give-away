import React from 'react';
import style from './FormHero.module.scss'
import {ReactComponent as Decoration} from "../../../assets/Decoration.svg";

function FormHero() {
    return (
        <section className={style.Form__hero}>
            <div className={style.Form__hero__img}/>
            <div className={style.Form__hero__info}>
                <h1>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h1>
                <Decoration/>
                <p>Wystarczą 4 proste kroki</p>
                <div className={style.hero__boxes}>
                    <div>
                        <p>1</p>
                        <p>Wybierz rzeczy</p>
                    </div>
                    <div>
                        <p>2</p>
                        <p>Spakuj je w worki</p>
                    </div>
                    <div>
                        <p>3</p>
                        <p>Wybierz fundacje</p>
                    </div>
                    <div>
                        <p>4</p>
                        <p>Zamów kuriera</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FormHero;