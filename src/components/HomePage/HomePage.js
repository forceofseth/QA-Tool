import React from 'react';
import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import ForbiddenPage from "../Status/ForbiddenPage";
import './HomePage.css';

function HomePage(props) {

    useAuthorizationRedirect(props.auth);

    return (
        <div>{props.auth.isEmpty ? <ForbiddenPage/> : <HomeAuth {...props}/>}</div>
    );

}

const HomeAuth = (props) => {

    return (
        <div>
            {props.cases && props.cases.map(oneCase => {
                return (
                    <div key={oneCase.id}>
                        <div>----------------------</div>
                        <div>{oneCase.id}</div>
                        <div>{oneCase.approved}</div>
                        <div>{oneCase.customer}</div>
                        <div>{oneCase.date.toString()}</div>
                        <div>{oneCase.lead}</div>
                        <div>{oneCase.product}</div>
                        <div>{oneCase.web}</div>
                        <div>---------------------</div>
                    </div>
                )
            })}
        </div>
    )
};

export default HomePage;


