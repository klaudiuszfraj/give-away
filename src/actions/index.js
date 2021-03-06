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

import {getFirestore} from "redux-firestore";

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
                    userColor: "#"+((1<<24)*Math.random()|0).toString(16)
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
            dispatch({type: 'GETFOUNDATIONS_ERROR', payload: foundation, error: error});
        })

    }
}
export const submitStep = step => {
    console.log('submitStep', step);
    return {
        type: 'SUBMITSTEP',
        payload: step
    }
}
export const updateStep = step => {
    console.log('updateStep', step);
    return {
        type: 'UPDATESTEP',
        payload: step
    }
}

export const sendContactForm = form => {
    console.log('sendContactForm', form);
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('contact-forms').add(form).then(()=>{
            dispatch({type: 'SENDCONTACTFORM', payload: form})
        }).catch(error => {
            dispatch({type: 'SENDCONTACTFORM_ERROR', payload: form, error: error})
        })
    }
}