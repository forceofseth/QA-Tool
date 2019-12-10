import {combineReducers} from "redux";
import authReducer from "./authReducer";
import caseReducer from "./caseReducer";
import masterDataReducer from "./masterDataReducer"
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";


export const rootReducer = combineReducers({
    auth: authReducer,
    cases: caseReducer,
    masterdata: masterDataReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});
