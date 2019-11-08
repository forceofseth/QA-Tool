import {combineReducers} from "redux";
import firebaseReducer from "./firebaseReducer";
import caseReducer from "./caseReducer";

export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    cases: caseReducer
});
