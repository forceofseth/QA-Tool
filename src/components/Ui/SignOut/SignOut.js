import React from 'react';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Link from "@material-ui/core/Link";

function SignOut(props) {
    return (
        <Link onClick={() => props.logoutUser()}>
            <ExitToAppOutlinedIcon fontSize="large" className="topIcon logout" />
        </Link>
    );
}

export default SignOut;
