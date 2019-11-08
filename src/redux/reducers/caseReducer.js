import {CREATE_CASE, CREATE_CASE_ERROR} from "../actions/caseActions";

const initalState = {};

export default function caseReducer(state = initalState, action) {
    switch (action.type) {
        case CREATE_CASE:
            console.log("created case", action.payload)
            return state;
        case CREATE_CASE_ERROR:
            console.log("create case error", action.payload)
            return state;
        default:
            return state;
    }
}