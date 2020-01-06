import React from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import Container from "@material-ui/core/Container";
import AddUser from "./UserManagement/AddUser/AddUserContainer";
import AddMasterDataContainer from "./MasterData/AddMasterData/AddMasterDataContainer";
import MasterDataListContainer from "./MasterData/MasterDataList/MasterDataListContainer";
import UserListContainer from "./UserManagement/UserList/UserListContainer";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

function AdminPage(props) {
    useAuthorizationRedirect(props.auth);
    return (
        <Container maxWidth="lg" className="mainContainer">
            <h1>Admin</h1>
            <Grid container spacing={5}>
                <Grid item xs={12} md={6} >
                    <h3>Add User</h3>
                    <AddUser/>
                </Grid>
                <Grid item xs={12} md={6} >
                    <h3>Users</h3>
                    <UserListContainer/>
                </Grid>
            </Grid>
            <Divider className="divider" orientation="horizontal" />
            <Grid container spacing={5}>
                <Grid item xs={12} md={6} >
                    <h3>Add Masterdata</h3>
                    <AddMasterDataContainer/>
                </Grid>
                <Grid item xs={12} md={6} >
                    <h3>Masterdata</h3>
                    <MasterDataListContainer/>
                </Grid>
            </Grid>
        </Container>
    );
}

export default AdminPage;
