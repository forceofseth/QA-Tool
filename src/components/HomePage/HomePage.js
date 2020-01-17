import React from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import {ADD_CASE} from "../../constants/routes";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import './HomePage.css';
import '../global.css';
import SimpleSnackbarContainer from "../Ui/Snackbar/SimpleSnackbarContainer";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";
import HomeTableHeader from "../Ui/HomeTable/HomeTableHeader";
import HomeTableRow from "../Ui/HomeTable/HomeTableRow";
import Loading from "../Status/Loading";


const HomePage = (props) => {
    useAuthorizationRedirect(props.auth);
    const sortedCases = props.cases && props.cases
        //sorting the cases from newest to oldest
        .sort((a, b) => {
            return b.date.toDate() - a.date.toDate();
        });

    return (
        sortedCases?
        <Container maxWidth="lg" className="mainContainer">
            <h1 className="title">Projects</h1>
            <div className="addCase">
                <Link to={ADD_CASE}>
                    <Button color="primary" variant="contained">
                        <span>Add Case</span>
                        <AddCircleOutlineOutlinedIcon className="addCaseIcon" fontSize="large"/>
                    </Button>
                </Link>
            </div>
            <table>
                <HomeTableHeader/>
                <tbody>
                {sortedCases && sortedCases
                    .filter(singleCase => singleCase.archived === false)
                    .map(singleCase => {
                        return (
                            <HomeTableRow key={singleCase.id} singleCase={singleCase}
                                          updateCaseArchiveState={props.updateCaseArchiveState}/>
                        )
                    })}
                </tbody>
            </table>

            <br/><br/>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h3>Archived Projects</h3>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    <table>
                        <HomeTableHeader/>
                        <tbody>
                        {sortedCases && sortedCases
                            .filter(singleCase => singleCase.archived === true)
                            .map(singleCase => {
                                return (
                                    <HomeTableRow key={singleCase.id} singleCase={singleCase}
                                                  updateCaseArchiveState={props.updateCaseArchiveState}/>
                                )
                            })}
                        </tbody>
                    </table>
                </ExpansionPanelDetails>
            </ExpansionPanel>
            <SimpleSnackbarContainer/>
        </Container>:<Loading/>
    );
};

export default HomePage;


