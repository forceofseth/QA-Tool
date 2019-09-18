import * as ROUTES from "../constants/routes";
import {useEffect, useContext} from "react";
import FirebaseContext from "../firebase/context";
import useReactRouter from 'use-react-router';

export const useAuthorizationRedirect = (condition) => {
    const firebase = useContext(FirebaseContext);
    const {history} = useReactRouter();

    useEffect(() => {
        const listener = firebase.auth.onAuthStateChanged(authUser => {
            if (!condition(authUser)) {
                history.push(ROUTES.SIGN_IN)
            }
        });
        return () => listener();
    }, [firebase.auth, history, condition]);

};
