import React, {useState} from 'react';
import { Link as ScrollLink} from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import style from './Header.module.scss';
import classNames from 'classnames';
import { connect } from "react-redux";
import Hamburger from "./Hambuger/Hamburger";


//todo:: links to map
//todo:: reusable btn
//todo:: add ofset to scroll
//todo:: correct dislay of link to '/'
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

            {currentLocation.pathname === '/'
                ?
                <>
                    <nav className={classNames({'open': isOpen})}>
                        <ScrollLink to={'start'} spy={true} smooth={true} duration={1000} onClick={()=>setIsOpen(false)}>Start</ScrollLink>
                        <ScrollLink to={'FourSteps'} smooth={true} duration={1000}  onClick={()=>setIsOpen(false)}>O co chodzi?</ScrollLink>
                        <ScrollLink to={'aboutUs'} smooth={true} duration={1000}  onClick={()=>setIsOpen(false)}>O nas</ScrollLink>
                        <ScrollLink to={'foundation'} spy={true} smooth={true} duration={1000}  onClick={()=>setIsOpen(false)}>Fundcja i organizacje</ScrollLink>
                        <ScrollLink to={'contact'} hashSpy={true} smooth={true} duration={1000}  onClick={()=>setIsOpen(false)}>Kontakt</ScrollLink>
                    </nav>
                    <Hamburger isOpen={isOpen} handleOpen={setIsOpen}/>
                </>
                :
                <Link to={'/'}>X</Link>
            }

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