import * as ROUTES from "../constants/routes";
import {useEffect} from "react";
import useReactRouter from 'use-react-router';

export const useAuthorizationRedirect = auth => {
    const {history} = useReactRouter();

    useEffect(() => {
        if (!auth.uid) {
            history.push(ROUTES.SIGN_IN)
        }
    });

};
