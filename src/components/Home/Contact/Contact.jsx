import React from 'react';
import style from './Contact.module.scss';
import {ReactComponent as Decoration} from '../../../assets/Decoration.svg'

function Contact() {


    return (
        <section className={style.Contact} id={'contact'}>
            <div className={style.Contact__img}/>
            <div className={style.Contact__container}>
                <div className={style.Contact__content}>
                    <h3>Skontaktuj się z nami</h3>
                    <Decoration/>
                    <form action="">
                        <div className={style.Contact__userInfo}>
                            <div>
                                <label htmlFor="name">Wpisz swoje imię</label>
                                <input type="text" id={'name'}/>
                            </div>
                            <div>
                                <label htmlFor="email">Wpisz swój email</label>
                                <input type="text" id={'email'}/>
                            </div>
                        </div>
                        <div className={style.Contact__userMessage}>
                            <label htmlFor="message">Wpisz swoją wiadomość</label>
                            <textarea name="message" id="message" cols="30" rows="10"></textarea>
                        </div>
                        <button>Wyślij</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;