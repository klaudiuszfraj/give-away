const contactForm = (state = {
    name: '',
    email: '',
    message: ''
}, action) => {
    switch (action.type) {
        case 'SENDCONTACTFORM':
            return action.payload;
        case 'SENDCONTACTFORM_ERROR':
            console.log('SENDCONTACTFORM_ERROR', action.error);
            return state;
        default:
            return state;
    }
}
export default contactForm;