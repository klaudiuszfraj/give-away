const isLogged = (state = {
    email: '',
    password: '',
    isLogged: false
}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return action.payload;
        case 'LOGOUT':
            return false;
        default:
            return state;
    }
}
export default isLogged;