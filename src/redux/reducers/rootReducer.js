import {combineReducers} from "redux";
import firebaseReducer from "./firebaseReducer";
import firestoreReducer from "./firestoreReducer";

export const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer
});
