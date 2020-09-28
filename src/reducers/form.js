const form = (state = {
    clothesToUse: false,
    clothesToTrash: false,
    toys: false,
    books: false,
    different: false
}, action) => {
    switch (action.type) {
        case 'SUBMITSTEP':
            return {
                ...state,
            };
        case 'UPDATESTEP':
            const updatedStep = action.payload
            return {
                ...state,
                ...updatedStep
            }
        default:
            return state;
    }
}

export default form;