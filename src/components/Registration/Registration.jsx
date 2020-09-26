import React, {useState, useEffect} from 'react';
import style from './Registration.module.scss'
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import classNames from "classnames";
import {Link, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import {registerUser} from '../../actions/index'

function Registration(props) {
    //todo:: add fail case

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        password2: ''
    })

    const [userSend, setUserSend] = useState(false)
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        password: false,
        password2: false,
        success: false
    });

    useEffect(() => {
        if (errors.success) {
            props.registerUser(user)
            setUserSend(true)
        }
    }, [errors.success]);

    const handleInputs = (e) => {
        const inputId = e.target.id
        const inputValue = e.target.value
        setUser(prevState => ({
            ...prevState,
            [inputId]: inputValue
        }))
        //todo:: error property of null
        // setUser(prevState => ({
        //     ...prevState,
        //     [e.target.id]: e.target.value
        // }))
    }


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
            if (password2 === '' || password2 !== user.password) {
                return false
            }
            const re = /^[A-Za-z]*$/;
            return re.test(String(password2))
        }
        function validateNames(name) {
            if (name.length < 3) {
                return false
            }
            const re = /^[A-Za-z]*$/;
            return re.test(String(name))
        }

        setErrors({
            firstName: !validateNames(user.firstName),
            lastName: !validateNames(user.lastName),
            email: !validateEmail(user.email),
            password: !validatePassword(user.password),
            password2: !validatePassword2(user.password2),
            success: validateEmail(user.email) && validatePassword(user.password) && validatePassword2(user.password2)
        })
    }


    return (
        userSend ? <Redirect to={'/logowanie'}/>
            :
            <>
                <main className={style.Registration}>
                    <div className={style.Registration__container}>
                        <h1>Załóż konto</h1>
                        <Decoration/>
                        <form action="" onSubmit={e => handleSubmit(e)}>
                            <div className={style.Registration__inputs}>

                                <label htmlFor="firstName">Imię</label>
                                <input type="text" id={'firstName'} value={user.firstName} onChange={e => handleInputs(e)}/>
                                <small className={classNames({'error': errors.firstName})}>Podane imię jest za krótkie</small>

                                <label htmlFor="lastName">Nazwisko</label>
                                <input type="text" id={'lastName'} value={user.lastName} onChange={e => handleInputs(e)}/>
                                <small className={classNames({'error': errors.lastName})}>Podane nazwisko jest za krótkie</small>

                                <label htmlFor="email">Email</label>
                                <input type="text" id={'email'} value={user.email} onChange={e => handleInputs(e)}/>
                                <small className={classNames({'error': errors.email})}>Podany email jest
                                    niepoprawny</small>

                                <label htmlFor="password">Hasło</label>
                                <input type="password" id={'password'} value={user.password}
                                       onChange={e => handleInputs(e)}/>
                                <small className={classNames({'error': errors.password})}>Podane hasło jest
                                    niepoprawne</small>

                                <label htmlFor="password2">Powtórz hasło</label>
                                <input type="password" id={'password2'} value={user.password2}
                                       onChange={e => handleInputs(e)}/>
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