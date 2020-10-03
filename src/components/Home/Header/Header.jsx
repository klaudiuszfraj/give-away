import React from 'react';
import { Link as ScrollLink} from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';
import { connect } from "react-redux";



function Header({auth: {uid, email}, profile: {initials, userColor}}) {
    const userLoggedIn = uid
        ?
        <>
            <p>Cześć <span className={style.initials} style={{backgroundColor: userColor}}>{initials}</span></p>
            <Link to={'/oddaj-rzeczy'}>Oddaj rzeczy</Link>
            <Link to={'/wylogowano'}>Wyloguj</Link>
        </>
        :
        <>
            <Link to={'/logowanie'}>Zaloguj</Link>
            <Link to={'/rejestracja'}>Załóż konto</Link>
        </>;
    const currentLocation = useLocation();
    return (
        <header className={style.header}>
            <div className={classNames({'loggedIn': uid})}>
                {userLoggedIn}
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
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    };
}

export default connect(mapStateToProps)(Header);