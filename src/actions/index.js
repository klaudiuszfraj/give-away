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



export const signOut = ()=>{
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'})
        })
    }
}

export const registerUser = ({firstName, lastName, email, password})=>{
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        getFirebase().auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                return getFirestore().collection('users').doc(response.user.uid).set({
                    firstName,
                    lastName,
                    initials: firstName[0] + lastName[0],
                    userColor: '#' + (Math.floor(Math.random() * 2 ** 24)).toString(16).padStart(0, 6)
            })
            }).then(() => {
                dispatch({ type: 'SIGNUP_SUCCESS' })
        })
            .catch(error => {
                dispatch({ type: 'SIGNUP_ERROR', payload: error })
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