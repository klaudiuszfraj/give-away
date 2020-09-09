import React from 'react';
import style from './Contact.module.scss';
import { ReactComponent as Decoration } from '../../../assets/Decoration.svg'

function Contact() {


    return (
        <section className={style.Contact} id={'contact'}>
            <div className={style.Contact__img}/>
            <div className={style.Contact__container}>
                <div className={style.Contact__content}>
                    <h1>Skontaktuj się z nami</h1>
                    <Decoration/>
                    <form action="">
                        <label htmlFor="name">Wpisz swoje imię</label>
                        <input type="text" id={'name'}/>

                        <label htmlFor="email">Wpisz swój email</label>
                        <input type="text" id={'email'}/>

                        <label htmlFor="message">Wpisz swoją wiadomość</label>
                        <textarea name="message" id="message" cols="30" rows="10"></textarea>

                        <button>Wyślij</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;