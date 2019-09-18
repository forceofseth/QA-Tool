import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Landing from './Landing';
import SignUp from './SignUp';
import SignIn from './SignIn';
import PasswordForget from './PasswordForget';
import Home from './Home';
import Account from './Account';
import Admin from './Admin';
import * as ROUTES from '../constants/routes';
import FirebaseContext from "../firebase/context";

//temporary use of a context until we use Redux state.
export const UserContext = React.createContext(null);

function App() {

    const [authUser, setAuthUser] = useState(null);
    const firebase = useContext(FirebaseContext);


    useEffect(() => {
        const listener = firebase.auth.onAuthStateChanged(authUser => {
            authUser
                ? setAuthUser(authUser)
                : setAuthUser(null);
        });
        return () => {
            listener();
        }
    }, [firebase.auth]);


    return (
        <UserContext.Provider value={{authUser}}>
            <Router>
                <div>
                    <Navigation/>
                    <hr/>
                    <Route exact path={ROUTES.LANDING} component={Landing}/>
                    <Route path={ROUTES.SIGN_UP} component={SignUp}/>
                    <Route path={ROUTES.SIGN_IN} component={SignIn}/>
                    <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget}/>
                    <Route path={ROUTES.HOME} component={Home}/>
                    <Route path={ROUTES.ACCOUNT} component={Account}/>
                    <Route path={ROUTES.ADMIN} component={Admin}/>
                </div>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
