// Auth Selectors
export const getAuth = state => {
    return state.firebase.auth;
};

export const getError = state => {
    return state.auth.error
};

export const getSuccessMessage = state => {
    return state.auth.successMessage
};

//Cases Selectors
export const getCases = state => {
    return state.firestore.ordered.cases;
};

