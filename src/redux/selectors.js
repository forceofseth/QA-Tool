// Auth Selectors
export const getAuthUser = state => {
    return state.firebase.authUser;
};

export const getFirebaseApp = state => {
    return state.firebase.firebaseApp;
};

//Cases Selectors
export const getCases = state => {
    return state.firestore.ordered.cases;
};

