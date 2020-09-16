import React from 'react';
import {Contact, Footer, Header} from "../index";
import style from './Form.module.scss'
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";

function Form() {
    return (
        <>
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
            <section className={style.Form__important}>
                <h2>Ważne!</h2>
                <p>Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać.</p>
            </section>
            <section className={style.Form__form}>
                <h1>form</h1>
            </section>
            <Contact/>
            <Footer/>
        </>
    );
}

export default Form;