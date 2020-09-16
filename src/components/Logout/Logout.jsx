import React from 'react';
import style from './Logout.module.scss'
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import {logOut} from "../../actions";
import {connect} from "react-redux";

function Logout(props) {
    props.logOut()
    return (
        <>
            <main className={style.Logout}>
                <h1>Wylogowanie nastapiło <br/> pomyślnie!</h1>
                <Decoration/>
                <Link to={'/'}>Strona główna</Link>
            </main>
        </>
    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        logOut: ()=>dispatch(logOut())
    }
}

export default connect(null, mapDispatchToProps)(Logout);