const form = (state = {
    clothesToUse: false,
    clothesToTrash: false,
    toys: false,
    books: false,
    different: false,
    trashBagsAmount: 3,
    localization: 'krakow',
    kids: false,
    singleMothers: false,
    homeless: false,
    disabled: false,
    elderly: false,
    userOrganization: '',
    street: '',
    city: '',
    postcode: '',
    mobile: '',

    date: new Date(),
    messageForCourier: ''
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