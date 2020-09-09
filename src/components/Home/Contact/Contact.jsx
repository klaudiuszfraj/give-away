import React , { useState } from 'react';
import style from './Contact.module.scss';
import {ReactComponent as Decoration} from '../../../assets/Decoration.svg'

function Contact() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');

    return (
        <section className={style.Contact} id={'contact'}>
            <div className={style.Contact__img}/>
            <div className={style.Contact__container}>
                <div className={style.Contact__content}>
                    <h3>Skontaktuj się z nami</h3>
                    <Decoration/>
                    <form action="" onSubmit={(e)=>e.preventDefault()}>
                        <div className={style.Contact__userInfo}>
                            <div>
                                <label htmlFor="name">Wpisz swoje imię</label>
                                <input type="text" id={'name'} value={userName} placeholder={'Krzysztof'} onChange={e=>setUserName(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="email">Wpisz swój email</label>
                                <input type="text" id={'email'} value={userEmail} placeholder={'abc@xyz.pl'} onChange={e=>setUserEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className={style.Contact__userMessage}>
                            <label htmlFor="message">Wpisz swoją wiadomość</label>
                            <textarea name="message" id="message" cols="30" rows="10" value={userMessage} placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} onChange={e=>setUserMessage(e.target.value)}/>
                        </div>
                        <button>Wyślij</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;