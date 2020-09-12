import React, {useState} from 'react';
import {Header} from "../index";
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import style from './Login.module.scss';
import {Link} from "react-router-dom";

function Login() {


    return (
        <>
            <Header/>
            <main className={style.Login}>
                <div>
                    <h1>Zaloguj się</h1>
                    <Decoration/>
                    <div>
                        <form action="">
                            <div className={style.Login__inputs}>
                                <label htmlFor="email">Email</label>
                                <input type="text" id={'email'}/>
                                <label htmlFor="password">Hasło</label>
                                <input type="password" id={'password'}/>
                            </div>
                            <div className={style.Login__btns}>
                                <Link to={'/rejestracja'}>Załóż konto</Link>
                                <button>Zaloguj się</button>
                            </div>
                        </form>

                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;