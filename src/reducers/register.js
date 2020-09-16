const register = (state = {
    email: '',
    password: '',
    isLogged: false
}, action) => {
    switch (action.type) {
        case 'REGISTER':
            return action.payload;
        case 'REGISTER_ERROR':
            console.log('REGISTER_ERROR', action.payload);
            return state;
        default:
            return state;
    }
}
export default register;