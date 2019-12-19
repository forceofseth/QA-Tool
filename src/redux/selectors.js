// Auth Selectors
export const getAuth = state => {
    return state.firebase.auth;
};

export const getAuthProfile = state => {
    return state.firebase.profile;
};

export const getAuthError = state => {
    return state.auth.error
};

export const getAuthSuccessMessage = state => {
    return state.auth.successMessage;
};

//Cases Selectors
export const getCases = state => {
    return state.firestore.ordered.cases;
};

export const getCasesData = state => {
    return state.firestore.data.cases;
};

export const getCasesError = state => {
    return state.cases.error;
};

export const getCasesSuccessMessage = state => {
    return state.cases.successMessage;
};

export const getCommentsById = (state, caseId) => {
    const cases = getCasesData(state);
    const singleCase = cases ? cases[caseId] : null;
    return singleCase ? singleCase.comments : null
};

export const getCommentCounterById = (state, caseId) => {
    const cases = getCasesData(state);
    const singleCase = cases ? cases[caseId] : null;
    return singleCase ? singleCase.commentCounter: null;
};

export const getCustomerById = (state, caseId) => {
    const cases = getCasesData(state);
    const singleCase = cases ? cases[caseId] : null;
    return singleCase ? singleCase.customer: null;
};


// Masterdata Selectors
export const getMasterData = state => {
    return state.firestore.ordered.masterdata;
};

export const getMasterDataData = state => {
    return state.firestore.data.masterdata;
};

export const getMasterDataError = state => {
    return state.masterdata.error;
};

export const getMasterDataSuccessMessage = state => {
    return state.masterdata.successMessage;
};

