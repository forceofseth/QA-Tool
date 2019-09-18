import React, {useContext} from 'react';
import FirebaseContext from "../firebase/context";


function SignOut() {
    //todo redirect? to signin

    const firebase = useContext(FirebaseContext);

    return (
        <button type="button" onClick={firebase.doSignOut}>
            Sign Out
        </button>
    );
}

export default SignOut;