// Auth Selectors
export const getAuth = state => {
    return state.firebase.auth;
};

//TODO delete
export const getFirebaseApp = state => {
    return state.auth.firebaseApp;
};

export const getLoginError = state => {
    return state.auth.error
};

//Cases Selectors
export const getCases = state => {
    return state.firestore.ordered.cases;
};

