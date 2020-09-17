import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

import authentication from "./authentication";
import register from "./register";
import foundationList from "./foundationsList";

const allReducers = combineReducers({
    isLogged: authentication,
    register,
    foundationList,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default allReducers
