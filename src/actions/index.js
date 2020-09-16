export const logIn = (user)=>{
    return (dispatch, getState, { getFirebase, getFirestore }) =>{
        //async call to database
        dispatch({
            type: 'LOGIN',
            payload: user
        })
    };
};

export const logOut = ()=>{
    return {
        type: 'LOGOUT',
    }
}

export const registerUser = (user)=>{
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async function to firestore
        const firestore = getFirestore();
        firestore.collection("users").add({...user}).then(()=>{
            dispatch({type: 'REGISTER', payload: user});
        }).catch(error=>{
            dispatch({type: 'REGISTER_ERROR', payload: error});
        })

    }
}