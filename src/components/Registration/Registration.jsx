import React, {useState, useEffect} from 'react';
import {Header} from "../index";
import style from './Registration.module.scss'
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import classNames from "classnames";
import {Link, Redirect} from "react-router-dom";
// import {registerUser} from "../../API";
import {connect} from 'react-redux';
import {registerUser} from '../../actions/index'

//todo::add validation two email in database, clean up
function Registration(props) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [userSend, setUserSend] = useState(false)
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        password2: false,
        success: false
    })

    useEffect(() => {
        if (errors.success) {
            // const register = async () =>{
            //     const response = await registerUser({
            //         email: email,
            //         password: password,
            //         isLogged: false
            //     })
            //     if(response.status === 201){
            //         setUserSend(true)
            //     }
            // }
            // register();
            props.registerUser({
                email,
                password,
                isLogged: false
            })
            setUserSend(true)
        }
    }, [errors.success])


    const handleSubmit = (e) => {
        e.preventDefault();

        function validateEmail(email) {
            if (email === '') {
                return false
            }
            const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
            return re.test(String(email).toLowerCase());
        }

        function validatePassword(password) {
            if (password === '' || password.length < 6) {
                return false
            }
            const re = /^[A-Za-z]*$/;
            return re.test(String(password))
        }

        function validatePassword2(password2) {
            if (password2 === '' || password2 !== password) {
                return false
            }
            const re = /^[A-Za-z]*$/;
            return re.test(String(password2))
        }

        setErrors({
            email: !validateEmail(email),
            password: !validatePassword(password),
            password2: !validatePassword2(password2),
            success: validateEmail(email) && validatePassword(password) && validatePassword2(password2)
        })
    }


    return (
        userSend ? <Redirect to={'/logowanie'}/>
            :
            <>
                <Header/>
                <main className={style.Registration}>
                    <div className={style.Registration__container}>
                        <h1>Załóż konto</h1>
                        <Decoration/>
                        <form action="" onSubmit={e => handleSubmit(e)}>
                            <div className={style.Registration__inputs}>
                                <label htmlFor="email">Email</label>
                                <input type="text" id={'email'} value={email} onChange={e => setEmail(e.target.value)}/>
                                <small className={classNames({'error': errors.email})}>Podany email jest
                                    niepoprawny</small>

                                <label htmlFor="password">Hasło</label>
                                <input type="password" id={'password'} value={password}
                                       onChange={e => setPassword(e.target.value)}/>
                                <small className={classNames({'error': errors.password})}>Podane hasło jest
                                    niepoprawne</small>

                                <label htmlFor="password2">Powtórz hasło</label>
                                <input type="password" id={'password2'} value={password2}
                                       onChange={e => setPassword2(e.target.value)}/>
                                <small className={classNames({'error': errors.password2})}>Podane hasło jest
                                    niepoprawne</small>
                            </div>
                            <div className={style.Registration__btns}>
                                <Link to={'/logowanie'}>Zaloguj się</Link>
                                <button>Załóż konto</button>
                            </div>
                        </form>
                    </div>
                </main>
            </>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: (user)=>dispatch(registerUser(user))
    }
};

export default connect(null, mapDispatchToProps)(Registration);