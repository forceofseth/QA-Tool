import React from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import Container from "@material-ui/core/Container";
import AddUser from "./AddUser/AddUserContainer";
import AddMasterDataContainer from "./MasterData/AddMasterData/AddMasterDataContainer";
import MasterDataListContainer from "./MasterData/MasterDataList/MasterDataListContainer";

function AdminPage(props) {
    useAuthorizationRedirect(props.auth);
    return (
        <Container maxWidth="lg" className="mainContainer">


            <h1>Admin</h1>

            <h3>Add User</h3>
            <AddUser/>

            <br/><br/>

            <AddMasterDataContainer/>

            <br/><br/>


            <MasterDataListContainer/>

        </Container>

    );
}

export default AdminPage;