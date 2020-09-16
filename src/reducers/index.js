import {combineReducers} from "redux";

import isLogged from "./isLogged";
import register from "./register";

const allReducers = combineReducers({
    isLogged,
    register
});

export default allReducers
