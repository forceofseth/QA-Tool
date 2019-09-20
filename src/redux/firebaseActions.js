import Firebase from "../firebase/firebase";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const CREATE_FIREBASE_APP = 'CREATE_FIREBASE_APP';

//todo sort actions
//thunk actions
export const loginUser = (email, password) => (dispatch, getState) => {
    const state = getState();
    state.firebaseApp.doSignInWithEmailAndPassword(email, password)
        .then(authUser => {
            dispatch(getLoggedInUserSuccessAction(authUser));
        });
};

export const logoutUser = () => (dispatch, getState) => {
    const state = getState();
    state.firebaseApp.doSignOut()
        .then(() => {
            dispatch(getLogoutUserSuccessAction())
        });
};

//actions creators
const getLoggedInUserSuccessAction = authUser => ({
    type: LOGIN_SUCCESS,
    payload: {authUser}
});

const getLogoutUserSuccessAction = () => ({
    type: LOGOUT_SUCCESS,
    payload: {authUser: null}
});

const firebaseApp = new Firebase();
export const createFirebaseApp = () => ({
    type: CREATE_FIREBASE_APP,
    payload: {firebaseApp}
});




