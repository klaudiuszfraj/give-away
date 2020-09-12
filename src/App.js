import React from 'react';
import {Home, Login, Logout} from './components'
import './App.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


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

            </Switch>
        </Router>
    );
}

export default App;
