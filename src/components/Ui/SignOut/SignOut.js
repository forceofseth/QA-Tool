import React from 'react';


function SignOut(props) {
    return (
        <button type="button" onClick={() => props.logoutUser()}>
            Sign Out
        </button>
    );
}


export default SignOut;
