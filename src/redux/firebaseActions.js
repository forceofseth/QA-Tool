export const GET_LOGGED_IN_USER_SUCCESS = 'GET_LOGGED_IN_USER_SUCCESS';


//Thunk Actions
export const getLoggedInUser = (firebase) => (dispatch) => {
    firebase.auth.onAuthStateChanged(authUser => {
        dispatch(getLoggedInUserSuccess(authUser));
    })
};

const getLoggedInUserSuccess = authUser => ({
    type: GET_LOGGED_IN_USER_SUCCESS,
    payload: {authUser}
});




