import {Firebase} from "../../firebase/firebase";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const CREATE_FIREBASE_APP = 'CREATE_FIREBASE_APP';

//thunk actions
export const loginUser = (email, password) => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(authUser => {
            dispatch(getLoggedInUserSuccessAction(authUser));
        })
        .catch(error => {
            dispatch(getLoggedInUserErrorAction(error));
        })
};

export const logoutUser = () => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut()
        .then(() => {
            dispatch(getLogoutUserSuccessAction())
        });
};

//actions creators
const getLoggedInUserSuccessAction = authUser => ({
    type: LOGIN_SUCCESS,
    payload: {authUser}
});

const getLoggedInUserErrorAction = error => ({
    type: LOGIN_ERROR,
    payload: {error}
});

const getLogoutUserSuccessAction = () => ({
    type: LOGOUT_SUCCESS
});

const firebaseApp = new Firebase();
export const createFirebaseApp = () => ({
    type: CREATE_FIREBASE_APP,
    payload: {firebaseApp}
});





