import React, {useState} from 'react';
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import style from './Login.module.scss';
import {Link, Redirect} from "react-router-dom";
import classNames from 'classnames';

import {signIn} from "../../actions";
import {connect} from "react-redux";


function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        success: false
    });
    console.log(props);
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
            success: validateEmail(email) && validatePassword(password)
        });
        //todo:: dobleclick to send user add redirect to home
        if (errors.success){
            props.signIn({
                email,
                password,
            })
        }
    }



    if (props.isLogged) return <Redirect to={'/'}/>
    return (
        <>
            <main className={style.Login}>
                <div className={style.Login__container}>
                    <h1>Zaloguj się</h1>
                    <Decoration/>
                    {props.authError ? <p className={style.Login__message}>{props.authError}</p> : null}
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
const mapStateToProps = state => {
    console.log(state);
    return {
        authError: state.isLogged.authError,
        isLogged: state.firebase.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (user)=>dispatch(signIn(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Login);