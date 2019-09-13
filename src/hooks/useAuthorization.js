import * as ROUTES from "../constants/routes";
import {useEffect, useContext} from "react";
import FirebaseContext from "../firebase/context";

export const useAuthorization = (condition, history) => {
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebase.auth.onAuthStateChanged(authUser => {
            if (!condition(authUser)) {
                history.push(ROUTES.SIGN_IN)
            }
        });
        return () => listener();
    }, [firebase.auth, history, condition]);

};
