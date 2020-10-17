import React , { useState } from 'react';
import style from './Contact.module.scss';
import {ReactComponent as Decoration} from '../../../assets/Decoration.svg'
import {sendForm} from "../../../API";
import classNames from 'classnames';
import {sendContactForm} from "../../../actions";
import {connect} from 'react-redux';

function Contact({ sendContactForm }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({
        name: false,
        email: false,
        message: false,
        success: false
    });

    const handleSubmit = (e)=>{
        e.preventDefault();
        //validation functions
        function validateEmail(email) {
            if (email === ''){
                return false
            }
            // const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            return re.test(String(email).toLowerCase());
        }
        function validateName(name){
            if (name === ''){
                return false
            }
            const re = /^[A-Za-z]*$/;
            return re.test(String(name))
        }
        setErrors({
            name: !validateName(name),
            email: !validateEmail(email),
            message: !(message.length > 120),
            success: validateName(name) && validateEmail(email) && (message.length > 120)

        })
        if ((validateName(name)) && (validateEmail(email)) && message.length > 120){
            sendContactForm({
                name,
                email,
                message
            })
        }
    }
    return (
        <section className={style.Contact} id={'contact'}>
            <div className={style.Contact__container}>
                <div className={style.Contact__content}>
                    <h3>Skontaktuj się z nami</h3>
                    <Decoration/>
                    <form action="" onSubmit={handleSubmit}>
                        <div className={classNames(style.Contact__message, {'succes' : errors.success})}>
                            <small>Wiadomośc wysłana! <br/>
                            Wkrótce się skontaktujemy.
                            </small>
                        </div>
                        <div className={style.Contact__userInfo}>
                            <div className={classNames({'error': errors.name})}>
                                <label htmlFor="name">Wpisz swoje imię</label>
                                <input type="text" id={'name'} value={name} placeholder={'Krzysztof'} onChange={e=>setName(e.target.value)}/>
                                <small>Podane imie jest nieparwidłowe</small>
                            </div>
                            <div className={classNames({'error': errors.email})}>
                                <label htmlFor="email">Wpisz swój email</label>
                                <input type="text" id={'email'} value={email} placeholder={'abc@xyz.pl'} onChange={e=>setEmail(e.target.value)}/>
                                <small>Podane mail jest nieparwidłowy</small>
                            </div>
                        </div>
                        <div className={classNames(style.Contact__userMessage, {'error': errors.message})}>
                            <label htmlFor="message">Wpisz swoją wiadomość</label>
                            <textarea name="message" id="message" cols="30" rows="10" value={message} placeholder={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'} onChange={e=>setMessage(e.target.value)}/>
                            <small>Wiadomość musi mieć conajmniej 120 znaków</small>
                        </div>
                        <button>Wyślij</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendContactForm: (form)=>dispatch(sendContactForm(form))
    }
}

export default connect(null, mapDispatchToProps)(Contact);