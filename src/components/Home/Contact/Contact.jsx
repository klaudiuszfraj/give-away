import React , { useState } from 'react';
import style from './Contact.module.scss';
import {ReactComponent as Decoration} from '../../../assets/Decoration.svg'
import {sendForm} from "../../../API";

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        //validation functions
        function validateEmail(email) {
            // const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            return re.test(String(email).toLowerCase());
        }
        function validateName(name){
            const re = /^[A-Za-z]*$/;
            return re.test(String(name))
        }
        if ((validateName(name)) && (validateEmail(email)) && message.length > 120){
            sendForm({
                name,
                email,
                message
            })
        }else {
            console.log('niepoprawny input');
        }
    }
    return (
        <section className={style.Contact} id={'contact'}>
            <div className={style.Contact__img}/>
            <div className={style.Contact__container}>
                <div className={style.Contact__content}>
                    <h3>Skontaktuj się z nami</h3>
                    <Decoration/>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={style.Contact__userInfo}>
                            <div>
                                <label htmlFor="name">Wpisz swoje imię</label>
                                <input type="text" id={'name'} value={name} placeholder={'Krzysztof'} onChange={e=>setName(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="email">Wpisz swój email</label>
                                <input type="text" id={'email'} value={email} placeholder={'abc@xyz.pl'} onChange={e=>setEmail(e.target.value)}/>
                            </div>
                        </div>
                        <div className={style.Contact__userMessage}>
                            <label htmlFor="message">Wpisz swoją wiadomość</label>
                            <textarea name="message" id="message" cols="30" rows="10" value={message} placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} onChange={e=>setMessage(e.target.value)}/>
                        </div>
                        <button>Wyślij</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;