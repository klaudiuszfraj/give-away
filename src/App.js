import React from 'react';
import {Form, Header, Home, Login, Logout, Registration} from './components'
import './App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import {connect} from 'react-redux';

function App({ uid }) {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/logowanie'} component={Login}/>
                <Route path={'/rejestracja'} component={Registration}/>
                {uid ?
                    <>
                    <Route path={'/wylogowano'} component={Logout}/>
                    <Route path={'/oddaj-rzeczy'} component={Form}/>
                    </>
                    :
                    <Redirect to={'/'}/>
                }
            </Switch>
        </Router>
    );
}

const mapStateToProps = state => {
    return state.firebase.auth;
}

export default connect(mapStateToProps)(App);
