import {GET_LOGGED_IN_USER_SUCCESS} from "./firebaseActions";

const initialState = {
    authUser: null
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_LOGGED_IN_USER_SUCCESS:
            return {
                ...state,
                authUser: action.payload.authUser
            };

        default:
            return state;
    }
}