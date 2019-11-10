import {combineReducers} from "redux";
import authReducer from "./authReducer";
import caseReducer from "./caseReducer";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";


export const rootReducer = combineReducers({
    auth: authReducer,
    cases: caseReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
