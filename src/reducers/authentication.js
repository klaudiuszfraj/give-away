const authentication = (state = {
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
        case 'SIGNOUT_SUCCESS':
            console.log('SIGNOUT_SUCCESS');
            return {
                ...state,
                isLogged: false
            };
        case 'SIGNUP_SUCCESS':
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('SIGNUP_ERROR', action.payload);
            return {
                ...state,
                authError: action.payload.message
            };
        default:
            return state;
    }
}
export default authentication;