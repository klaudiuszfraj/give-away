import React from 'react';
import {Home, Login, Logout} from './components'
import './App.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Registration from "./components/Registration/Registration";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path={'/'}>
                    <Home/>
                </Route>
                <Route path={'/logowanie'}>
                    <Login/>
                </Route>
                <Route path={'/wylogowano'}>
                    <Logout/>
                </Route>
                <Route path={'/rejestracja'}>
                    <Registration/>
                </Route>

            </Switch>
        </Router>
    );
}

export default App;
