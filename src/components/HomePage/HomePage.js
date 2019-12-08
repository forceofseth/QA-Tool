import React from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import {EDIT_CASE, LEAD_CHECKS, WEB_CHECKS, ADD_CASE} from "../../constants/routes";
import {Link} from "react-router-dom";
import moment from "moment";
import Container from "@material-ui/core/Container";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import './HomePage.css';
import '../global.css';
import EditIcon from '@material-ui/icons/Edit';
import LaunchIcon from '@material-ui/icons/Launch';
import SimpleSnackbarContainer from "../Ui/Snackbar/SimpleSnackbarContainer";


const HomePage = (props) => {
    useAuthorizationRedirect(props.auth);

    //TODO Better name than one case using case leads to errors cause of the case reserved keyword.
    return (
        <Container maxWidth="lg" className="mainContainer">
            <h1>Projects</h1>
            <table>
                <thead>
                <tr>
                    <th>Project ID</th>
                    <th>Approved</th>
                    <th>Customer</th>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Web</th>
                    <th>Lead</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>

                {props.cases && props.cases.map(oneCase => {
                    return (
                        <tr key={oneCase.id}>
                            <td data-label="ID">{oneCase.projectId}</td>
                            <td data-label="Approved">{oneCase.approved.toString()}</td>
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

                            <td data-label="Edit">
                                <Link to={EDIT_CASE + "/" + oneCase.id}>
                                    <EditIcon fontSize="small"/>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>

            <div className="addCase">
                <Link to={ADD_CASE}>
                    <AddCircleOutlineOutlinedIcon fontSize="large"/>
                </Link>
            </div>
            <SimpleSnackbarContainer/>
        </Container>

    );
};

export default HomePage;


