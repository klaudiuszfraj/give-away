const contactForm = (state = {
    name: '',
    email: '',
    message: ''
}, action) => {
    switch (action.type) {
        case 'SENDCONTACTFORM':
            return action.payload;
        // case 'GETFOUNDATIONS_ERROR':
        //     console.log('REGISTER_ERROR', action.payload);
        //     return state;
        default:
            return state;
    }
}
export default contactForm;