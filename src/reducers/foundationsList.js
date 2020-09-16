const foundationList = (state = {
    name: '',
    desc: '',
    items: []
}, action) => {
    switch (action.type) {
        case 'GETFOUNDATIONS':
            return action.payload;
        case 'GETFOUNDATIONS_ERROR':
            console.log('REGISTER_ERROR', action.payload);
            return state;
        default:
            return state;
    }
}
export default foundationList;