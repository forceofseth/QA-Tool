export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const PASSWORD_UPDATE_SUCCESS = 'PASSWORD_UPDATE_SUCCESS';
export const PASSWORD_UPDATE_ERROR = 'PASSWORD_UPDATE_ERROR';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const CLEAN_AUTH_ERROR = 'CLEAN_AUTH_ERROR';
export const CLEAN_AUTH_SUCCESS = 'CLEAN_AUTH_SUCCESS';


//thunk actions
export const loginUser = (email, password) => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            dispatch(getLoggedInUserSuccessAction());
        })
        .catch(error => {
            dispatch(getLoggedInUserErrorAction(error));
        })
};

export const logoutUser = () => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut()
        .then(() => {
            firebase.logout();
            dispatch(getLogoutUserSuccessAction());
        })
};

export const changePassword = (password) => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().currentUser.updatePassword(password)
        .then(() => {
            dispatch(getUpdatePasswordSuccessAction());
        })
        .catch(error => {
            dispatch(getUpdatePasswordErrorAction(error));
        })
};

export const resetPassword = (email) => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            dispatch(getResetPasswordSuccessAction());
        })
        .catch(error => {
            dispatch(getResetPasswordErrorAction(error));
        })

};

export const createUser = (newUser) => (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.passwordOne)
        .then((response) => {
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                admin: newUser.admin === 'true'
            }).then(() => {
                dispatch(getCreateUserSuccessAction(newUser));
            }).catch(error => {
                dispatch(getCreateUserErrorAction(error));
            })
        }).catch(error =>{
            dispatch(getCreateUserErrorAction(error));
    })
};


//actions creators
const getLoggedInUserSuccessAction = () => ({
    type: LOGIN_SUCCESS,
});

const getLoggedInUserErrorAction = error => ({
    type: LOGIN_ERROR,
    payload: {error}
});

const getLogoutUserSuccessAction = () => ({
    type: LOGOUT_SUCCESS
});

const getUpdatePasswordSuccessAction = () => ({
    type: PASSWORD_UPDATE_SUCCESS
});

const getUpdatePasswordErrorAction = (error) => ({
    type: PASSWORD_UPDATE_ERROR,
    payload: {error}
});

const getResetPasswordSuccessAction = () => ({
    type: RESET_PASSWORD_SUCCESS
});

const getResetPasswordErrorAction = (error) => ({
    type: RESET_PASSWORD_ERROR,
    payload: {error}
});

const getCreateUserSuccessAction = (newUser) => ({
    type: CREATE_USER_SUCCESS,
    payload: {newUser}
});

const getCreateUserErrorAction = (error) => ({
    type: CREATE_USER_ERROR,
    payload: {error}
});

export const cleanAuthErrorAction = () => ({
    type: CLEAN_AUTH_ERROR
});

export const cleanAuthSuccessAction = () => ({
    type: CLEAN_AUTH_SUCCESS
});






