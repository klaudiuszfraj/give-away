export const logIn = (user)=>{
    return (dispatch, getState) =>{
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