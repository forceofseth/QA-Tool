import React from 'react';
import Container from "@material-ui/core/Container";
import '../global.css';
import PasswordChangeContainer from "./PasswordChange/PasswordChangeContainer";
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function AccountPage(props) {
    useAuthorizationRedirect(props.auth);
    return(
        <Container maxWidth="lg" className="mainContainer">


            <h1>Account</h1>

            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <h3>Password change</h3>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <PasswordChangeContainer/>
                </ExpansionPanelDetails>

            </ExpansionPanel>


            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <h3>Add New User</h3>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>

                </ExpansionPanelDetails>

            </ExpansionPanel>






        </Container>
    );

}


export default AccountPage;
