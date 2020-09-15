import React from 'react';
import { Link as ScrollLink} from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';
import { connect } from "react-redux";



function Header(props) {
    const userLoggedIn = props
    const currentLocation = useLocation();
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
                {currentLocation.pathname === '/'
                    ?
                    <>
                        <ScrollLink to={'start'} spy={true} smooth={true} duration={1000}>Start</ScrollLink>
                        <ScrollLink to={'FourSteps'} smooth={true} duration={1000}>O co chodzi?</ScrollLink>
                        <ScrollLink to={'aboutUs'} smooth={true} duration={1000}>O nas</ScrollLink>
                        <ScrollLink to={'foundation'} smooth={true} duration={1000}>Fundcja i organizacje</ScrollLink>
                        <ScrollLink to={'contact'} hashSpy={true} smooth={true} duration={1000}>Kontakt</ScrollLink>
                    </>
                    :
                    <>
                        <Link to={'/'}>X</Link>
                    </>
                }
            </nav>
        </header>
    );
}

function mapStateToProps(state) {
    return state.isLogged;
}

export default connect(mapStateToProps)(Header);