export const CREATE_CASE = 'CREATE_CASE';
export const CREATE_CASE_ERROR = 'CREATE_CASE_ERROR';
//thunk actions
export const createCase = newCase => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('cases').add({
            ...newCase,
            date: new Date(newCase.date)
        }).then(() => {
            dispatch(getCreateCaseAction(newCase))
        }).catch((err) => {
            dispatch(getCreateCaseErrorAction(err))
        })
    }
};

//action creators
const getCreateCaseAction = newCase => ({
    type: CREATE_CASE,
    payload: {newCase}
});
const getCreateCaseErrorAction = (err) => ({
    type: CREATE_CASE_ERROR,
    payload: err
});


