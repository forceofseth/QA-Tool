import React from 'react';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

function SignOut(props) {
    return (
        <a onClick={() => props.logoutUser()}>
            <ExitToAppOutlinedIcon fontSize="large" />
        </a>
    );
}

export default SignOut;
