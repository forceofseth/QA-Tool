import {combineReducers} from "redux";
import firebaseReducer from "./firebaseReducer";
import caseReducer from "./caseReducer";
import {firestoreReducer} from "redux-firestore";

export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    cases: caseReducer,
    firestore: firestoreReducer
});
