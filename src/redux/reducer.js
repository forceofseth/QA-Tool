import {LOGIN_SUCCESS, LOGOUT_SUCCESS} from "./firebaseActions";

const initialState = {
    authUser: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                authUser: action.payload.authUser
            };

        case LOGOUT_SUCCESS:
            return {
                ...state,
                authUser: action.payload.authUser
            };


        default:
            return state;
    }
}