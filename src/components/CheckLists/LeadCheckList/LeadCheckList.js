import Container from "@material-ui/core/Container";
import React, {useEffect, useState} from "react";
import Loading from "../../Status/Loading";
import CheckboxWithLabel from "../../Ui/Checkbox/CheckboxWithLabel";
import {HOME} from "../../../constants/routes";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import AddCheckListElement from "../../Ui/AddCheckListElement/AddCheckListElement";

function LeadCheckList(props){
    const {leadChecks, caseId, updateCaseChecklist} = props;
    const [state, setState] = useState(leadChecks);

    useEffect(() => {
        updateCaseChecklist(state,caseId,"leadChecks")
    }, [state, caseId, updateCaseChecklist]);

    useEffect(() => {
        setState(leadChecks)
    }, [leadChecks]);

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: !event.target.defaultChecked
        });
    };


    return(
        <Container maxWidth="lg" className="mainContainer">
            {leadChecks ? (
                <div>
                    <Link to={HOME} className="backButton">
                        <Button color="primary" variant="contained">
                            <span>BACK</span>
                        </Button>
                    </Link>
                    <h1>{"Lead CheckList"}</h1>
                    {state && Object.keys(state).map(key =>{
                        return(
                            <CheckboxWithLabel defaultChecked = {state[key]} checkFor={key} onChange={onChange} />
                        )
                    })}
                </div>

            ): (
                <Loading/>
            )}
        <AddCheckListElement/>
        </Container>
    );
}

export default LeadCheckList;