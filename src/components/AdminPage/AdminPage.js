import React from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import AddUser from "./AddUser/AddUserContainer";

//TODO integrate Add User Page into Admin Page?
function AdminPage(props) {
    useAuthorizationRedirect(props.auth);
    return (
        <div>
            <h1>Admin</h1>
            <AddUser/>
        </div>
    );
}

export default AdminPage;