import React from 'react';
import {Header} from "../index";
import style from './Logout.module.scss'
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";


function Logout() {
    return (
        <>
            <Header/>
            <main className={style.Logout}>
                <h1>Wylogowanie nastapiło <br/> pomyślnie!</h1>
                <Decoration/>
                <Link to={'/'}>Strona główna</Link>
            </main>
        </>
    );
}

export default Logout;