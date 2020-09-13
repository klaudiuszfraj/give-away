import React, {useState} from 'react';
import {Header} from "../index";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import style from './Login.module.scss';
import {Link} from "react-router-dom";
import classNames from 'classnames';


//todo::check user in database

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        success: false
    })
    const handleSubmit = (e)=>{
        e.preventDefault();
        function validateEmail(email) {
            if (email === ''){
                return false
            }
            const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            return re.test(String(email).toLowerCase());
        }
        function validatePassword(password){
            if (password === '' || password.length < 6){
                return false
            }
            const re = /^[A-Za-z]*$/;
            return re.test(String(password))
        }
        setErrors({
            email: !validateEmail(email),
            password: !validatePassword(password),
            success: false
        })


    }



    return (
        <>
            <Header/>
            <main className={style.Login}>
                <div className={style.Login__container}>
                    <h1>Zaloguj się</h1>
                    <Decoration/>
                        <form action="" onSubmit={e=>handleSubmit(e)}>
                            <div className={style.Login__inputs}>
                                <label htmlFor="email">Email</label>
                                <input type="text" id={'email'} value={email} onChange={e=>setEmail(e.target.value)}/>
                                <small className={classNames({'error':errors.email})}>Podany email jest niepoprawny</small>

                                <label htmlFor="password">Hasło</label>
                                <input type="password" id={'password'} value={password} onChange={e=>setPassword(e.target.value)}/>
                                <small className={classNames({'error': errors.password})}>Podane hasło jest niepoprawne</small>
                            </div>
                            <div className={style.Login__btns}>
                                <Link to={'/rejestracja'}>Załóż konto</Link>
                                <button>Zaloguj się</button>
                            </div>
                        </form>
                </div>
            </main>
        </>
    );
}

export default Login;