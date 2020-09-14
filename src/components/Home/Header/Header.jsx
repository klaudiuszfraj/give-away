import React from 'react';
import { Link } from 'react-scroll';
import { Link as UserLinks } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';
import {useSelector, useDispatch} from "react-redux";
// import logOut


function Header() {
    const userLoggedIn = useSelector(state=>state.isLogged)
    console.log('user w header',userLoggedIn);
    return (
        <header className={style.header}>
            <div className={classNames({'loggedIn': userLoggedIn.isLogged})}>
                {userLoggedIn.isLogged ?
                    <>
                   <p>Cześć {userLoggedIn.email}</p>
                   <UserLinks to={'/oddaj-rzeczy'}>Oddaj rzeczy</UserLinks>
                   <UserLinks to={'/wylogowano'}>Wyloguj</UserLinks>
                   </>
                :
                    <>
                    <UserLinks to={'/logowanie'}>Zaloguj</UserLinks>
                    <UserLinks to={'/rejestracja'}>Załóż konto</UserLinks>
                    </>
                }
            </div>
            <nav>
                <Link to={'start'} smooth={true} duration={1000}>Start</Link>
                <Link to={'FourSteps'} smooth={true} duration={1000}>O co chodzi?</Link>
                <Link to={'aboutUs'} smooth={true} duration={1000}>O nas</Link>
                <Link to={'foundation'} smooth={true} duration={1000}>Fundcja i organizacje</Link>
                <Link to={'contact'} smooth={true} duration={1000}>Kontakt</Link>
            </nav>
        </header>
    );
}

export default Header;