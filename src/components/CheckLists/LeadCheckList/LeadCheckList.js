import Container from "@material-ui/core/Container";
import React, {useEffect, useState} from "react";
import Loading from "../../Status/Loading";
import CheckboxWithLabel from "../../Ui/Checkbox/CheckboxWithLabel";
import {HOME} from "../../../constants/routes";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import AddCheckListElementContainer from "../../Ui/AddCheckListElement/AddCheckListElementContainer";
import SimpleSnackbarContainer from "../../Ui/Snackbar/SimpleSnackbarContainer";

function LeadCheckList(props) {
    const {leadChecks, caseId, updateCaseChecklist, singleCase} = props;
    const [state, setState] = useState(leadChecks);

    useEffect(() => {
        updateCaseChecklist(state, caseId, "leadChecks")
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


    return (
        <Container maxWidth="lg" className="mainContainer">
            {leadChecks ? (
                <div>
                    <Link to={HOME} className="backButton">
                        <Button color="primary" variant="contained">
                            <span>BACK</span>
                        </Button>
                    </Link>
                    <h1>Lead-Checks: {singleCase.customer} / {caseId} / {singleCase.product}</h1>
                    {state && Object.keys(state).map(key => {
                        return (
                            <div key={key}>
                            <CheckboxWithLabel defaultChecked={state[key]} checkFor={key} onChange={onChange}/>
                            </div>
                        )
                    })}
                </div>

            ) : (
                <Loading/>
            )}
            <AddCheckListElementContainer checkType="leadChecks" caseId={caseId} currentChecks={leadChecks}/>
            <SimpleSnackbarContainer/>
        </Container>
    );
}

export default LeadCheckList;
