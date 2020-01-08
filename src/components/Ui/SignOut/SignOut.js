import React from 'react';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";

function SignOut(props) {
    return (
        <Tooltip title="Logout">
            <Link onClick={() => props.logoutUser()}>
                <ExitToAppOutlinedIcon fontSize="large" className="topIcon logout" />
            </Link>
        </Tooltip>
    );
}

export default SignOut;
