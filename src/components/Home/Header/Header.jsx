import React from 'react';
import { Link as ScrollLink} from 'react-scroll';
import { Link } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';
import {useSelector} from "react-redux";


function Header() {
    const userLoggedIn = useSelector(state=>state.isLogged)
    console.log('user w header',userLoggedIn);
    return (
        <header className={style.header}>
            <div className={classNames({'loggedIn': userLoggedIn.isLogged})}>
                {userLoggedIn.isLogged ?
                    <>
                   <p>Cześć {userLoggedIn.email}</p>
                   <Link to={'/oddaj-rzeczy'}>Oddaj rzeczy</Link>
                   <Link to={'/wylogowano'}>Wyloguj</Link>
                   </>
                :
                    <>
                    <Link to={'/logowanie'}>Zaloguj</Link>
                    <Link to={'/rejestracja'}>Załóż konto</Link>
                    </>
                }
            </div>
            <nav>
                <ScrollLink to={'start'} smooth={true} duration={1000}>Start</ScrollLink>
                <ScrollLink to={'FourSteps'} smooth={true} duration={1000}>O co chodzi?</ScrollLink>
                <ScrollLink to={'aboutUs'} smooth={true} duration={1000}>O nas</ScrollLink>
                <ScrollLink to={'foundation'} smooth={true} duration={1000}>Fundcja i organizacje</ScrollLink>
                <ScrollLink to={'contact'} smooth={true} duration={1000}>Kontakt</ScrollLink>
            </nav>
        </header>
    );
}

export default Header;