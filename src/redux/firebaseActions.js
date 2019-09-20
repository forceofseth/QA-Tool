export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

//thunk actions
export const loginUser = (firebase, email, password) => (dispatch) => {
    firebase.doSignInWithEmailAndPassword(email, password)
        .then(authUser => {
            dispatch(getLoggedInUserSuccess(authUser));
        });
};

export const logoutUser = (firebase) => (dispatch) => {
    firebase.doSignOut()
        .then(() => {
            dispatch(getLogoutUserSuccess())
        });
};

//actions
const getLoggedInUserSuccess = authUser => ({
    type: LOGIN_SUCCESS,
    payload: {authUser}
});

const getLogoutUserSuccess = () => ({
    type: LOGOUT_SUCCESS,
    payload: {authUser: null}
});




