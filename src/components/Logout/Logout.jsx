import React from 'react';
import style from './Logout.module.scss'
import {ReactComponent as Decoration} from "../../assets/Decoration.svg";
import {Link} from "react-router-dom";
import {signOut} from "../../actions";
import {connect} from "react-redux";

function Logout(props) {
    props.signOut()
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
        signOut: ()=>dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(Logout);