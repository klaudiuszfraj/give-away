import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

import authentication from "./authentication";
import foundationList from "./foundationsList";

const allReducers = combineReducers({
    isLogged: authentication,
    foundationList,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default allReducers
