// export const LOGIN_PENDING = "[user] - Start loging";
// export const LOGIN_SUCCESS = "[user] - Logged user"

// export const logIn = ({ email, password })=>{
//     return (dispatch, getState, { getFirebase, getFirestore }) =>{
//         //async call to database
//         dispatch({
//             type: LOGIN_PENDING
//         })
//         getFirebase().auth().signInWithEmailAndPassword(email, password)
//             .then(user => {
//                 dispatch({
//                     type: LOGIN_SUCCESS,
//                     payload: user
//                 })
//             })
//             .catch(function(error) {
//                 console.log(error)
//         });
//
//     };
// };

export const signIn = user => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            user.email,
            user.password
        ).then(()=>{
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch(error => {
            dispatch({type: 'LOGIN_ERROR', payload: error});
        })
    }
}



export const logOut = ()=>{
    return {
        type: 'LOGOUT',
    }
}

export const registerUser = ({email, password})=>{
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async function to firestore
        const firestore = getFirestore();
        // firestore.collection("users").add({...user}).then(()=>{
        //     dispatch({type: 'REGISTER', payload: user});
        // }).catch(error=>{
        //     dispatch({type: 'REGISTER_ERROR', payload: error});
        // })

        getFirebase().auth().createUserWithEmailAndPassword(email, password)
            .then(user => console.log(user))
            .catch(function(error) {
            console.log(error)
        });

    }
}

export const foundationList = (foundation)=>{
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // async function to firestore
        const firestore = getFirestore();
        firestore.collection("foundations").add({...foundation}).then(()=>{
            dispatch({type: 'GETFOUNDATIONS', payload: foundation});
        }).catch(error=>{
            dispatch({type: 'GETFOUNDATIONS_ERROR', payload: foundation});
        })

    }
}