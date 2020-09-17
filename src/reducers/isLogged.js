const isLogged = (state = {
    authError: null
}, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            console.log('succesd');
            return {
                ...state,
                authError: null
            };
        case 'LOGIN_ERROR':
            console.log('errr');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGOUT':
            return {
                ...state,
                isLogged: false
            };
        default:
            return state;
    }
}
export default isLogged;