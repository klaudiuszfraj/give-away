import React from 'react';
import {Contact, Footer, FormHero} from "../index";
import style from './Form.module.scss'

function Form() {
    return (
        <>
            <FormHero/>
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