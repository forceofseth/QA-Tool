import React from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import './HomePage.css';
import Button from "@material-ui/core/Button";
import {EDIT_CASE, LEAD_CHECKS, WEB_CHECKS} from "../../constants/routes";
import {Link} from "react-router-dom";
import moment from "moment";

const HomePage = (props) => {
    useAuthorizationRedirect(props.auth);

    //TODO Better name than one case using case leads to errors cause of the case reserved keyword.
    return (
        <div>
            {props.cases && props.cases.map(oneCase => {
                return (
                    <div key={oneCase.id}>
                        <div>----------------------</div>
                        <div>{oneCase.id}</div>
                        <div>{oneCase.approved.toString()}</div>
                        <div>{oneCase.customer}</div>
                        <div>{moment(oneCase.date.toDate()).format('YYYY-MM-DD')}</div>
                        <div>{oneCase.lead}</div>
                        <div>{oneCase.product}</div>
                        <div>{oneCase.web}</div>
                        <Link to={EDIT_CASE + "/" + oneCase.id}>
                            <Button variant="contained">Edit</Button>
                        </Link>
                        <Link to={LEAD_CHECKS + "/" + oneCase.id}>
                            <Button variant="contained">Lead-Checks</Button>
                        </Link>
                        <Link to={WEB_CHECKS + "/" + oneCase.id}>
                            <Button variant="contained">Web-Checks</Button>
                        </Link>
                        <div>---------------------</div>
                    </div>
                )
            })}
        </div>
    );
};

export default HomePage;


