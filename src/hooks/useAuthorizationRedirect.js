import * as ROUTES from "../constants/routes";
import {useEffect} from "react";
import useReactRouter from 'use-react-router';

export const useAuthorizationRedirect = (condition, authUser) => {
    const {history} = useReactRouter();

    useEffect(() => {
        if (!condition(authUser)) {
            history.push(ROUTES.SIGN_IN)
        }
    });

};
