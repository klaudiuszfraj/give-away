import React, {useState} from 'react';
import { Link as ScrollLink} from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';
import { connect } from "react-redux";
import Hamburger from "./Hambuger/Hamburger";


//todo:: links to map
//todo:: reusable btn
function Header({auth: {uid, email}, profile: {initials, userColor}}) {
    const [isOpen, setIsOpen] = useState(false);

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
            <nav className={classNames({'open': isOpen})}>
                {currentLocation.pathname === '/'
                    ?
                    <>
                        <ScrollLink to={'start'} spy={true} smooth={true} duration={1000} onClick={()=>setIsOpen(prevState => !prevState)}>Start</ScrollLink>
                        <ScrollLink to={'FourSteps'} smooth={true} duration={1000}  onClick={()=>setIsOpen(prevState => !prevState)}>O co chodzi?</ScrollLink>
                        <ScrollLink to={'aboutUs'} smooth={true} duration={1000}  onClick={()=>setIsOpen(prevState => !prevState)}>O nas</ScrollLink>
                        <ScrollLink to={'foundation'} smooth={true} duration={1000}  onClick={()=>setIsOpen(prevState => !prevState)}>Fundcja i organizacje</ScrollLink>
                        <ScrollLink to={'contact'} hashSpy={true} smooth={true} duration={1000}  onClick={()=>setIsOpen(prevState => !prevState)}>Kontakt</ScrollLink>
                    </>
                    :
                    <>
                        <Link to={'/'}>X</Link>
                    </>
                }
            </nav>
            <Hamburger isOpen={isOpen} handleOpen={setIsOpen}/>
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