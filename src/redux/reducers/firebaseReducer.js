import {LOGIN_SUCCESS, LOGOUT_SUCCESS, CREATE_FIREBASE_APP} from "../actions/firebaseActions";

const initialState = {
    authUser: null,
    firebaseApp: null
};

export default function firebaseReducer(state = initialState, action) {
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

        case CREATE_FIREBASE_APP:
            return {
                ...state,
                firebaseApp: action.payload.firebaseApp
            };

        default:
            return state;
    }
}
