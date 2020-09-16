import {combineReducers} from "redux";
import {firestoreReducer} from "redux-firestore";

import isLogged from "./isLogged";
import register from "./register";
import foundationList from "./foundationsList";

const allReducers = combineReducers({
    isLogged,
    register,
    foundationList,
    firestore: firestoreReducer
});

export default allReducers
