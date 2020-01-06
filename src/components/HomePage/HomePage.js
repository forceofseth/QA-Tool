import React from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import {EDIT_CASE, LEAD_CHECKS, WEB_CHECKS, ADD_CASE, COMMENTS} from "../../constants/routes";
import {Link} from "react-router-dom";
import moment from "moment";
import Container from "@material-ui/core/Container";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import './HomePage.css';
import '../global.css';
import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';
import SimpleSnackbarContainer from "../Ui/Snackbar/SimpleSnackbarContainer";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";
import {ForumOutlined} from "@material-ui/icons";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import Radio from "@material-ui/core/Radio";



const HomePage = (props) => {
    useAuthorizationRedirect(props.auth);

    return (
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
                <thead>
                <tr>
                    <th>Project ID</th>
                    <th className="centeredTableElement">Approved</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Lead</th>
                    <th>Web</th>
                    <th className="centeredTableElement">Comments</th>
                    <th className="centeredTableElement">Edit</th>
                    <th className="centeredTableElement">Archive</th>
                </tr>
                </thead>
                <tbody>

                {props.cases && props.cases.map(oneCase => {
                    return (
                        <tr key={oneCase.id}>
                            <td data-label="ID">{oneCase.projectId}</td>
                            {oneCase.approved ?<td data-label="Approved" className="centeredTableElement"><CheckCircleOutlineIcon className="approved"/></td>:
                                <td data-label="Approved" className="centeredTableElement"><HighlightOffIcon className="notApproved"/></td>
                            }
                            <td data-label="Customer">{oneCase.customer}</td>
                            <td data-label="Date">{moment(oneCase.date.toDate()).format('DD.MM.YY')}</td>
                            <td data-label="Product">{oneCase.product}</td>

                            <td data-label="Lead">
                                <Link to={LEAD_CHECKS + "/" + oneCase.id}>
                                    <div>{oneCase.lead}
                                        <LaunchIcon className="openLink" />
                                    </div>
                                </Link>
                            </td>

                            <td data-label="Web">
                                <Link to={WEB_CHECKS + "/" + oneCase.id}>
                                    <div>{oneCase.web}
                                        <LaunchIcon className="openLink" />
                                    </div>
                                </Link>
                            </td>
                            <td className="commentIcon" data-label="Comments">
                                <Link to={COMMENTS + "/" + oneCase.id}>
                                    <ForumOutlined fontSize="small"/>
                                </Link>
                            </td>
                            <td className="editLabel centeredTableElement" data-label="Edit">
                                <Link to={EDIT_CASE + "/" + oneCase.id}>
                                    <EditIcon fontSize="small"/>
                                </Link>
                            </td>
                            <td className="archive centeredTableElement" data-label="Archive">
                                <Radio
                                    color="primary"
                                />
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <br/><br/>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h3>Archived Projects</h3>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    table with archived cases
                </ExpansionPanelDetails>

            </ExpansionPanel>
            <SimpleSnackbarContainer/>
        </Container>

    );
};

export default HomePage;


