import Container from "@material-ui/core/Container";
import React, {useEffect, useState} from "react";
import Loading from "../../Status/Loading";
import CheckboxWithLabel from "../../Ui/Checkbox/CheckboxWithLabel";
import {Link} from "react-router-dom";
import {HOME} from "../../../constants/routes";
import Button from "@material-ui/core/Button";
import AddCheckListElementContainer from "../../Ui/AddCheckListElement/AddCheckListElementContainer";
import SimpleSnackbarContainer from "../../Ui/Snackbar/SimpleSnackbarContainer";

function WebCheckListPage(props) {
    const {webChecks, caseId, updateCaseChecklist,singleCase} = props;
    const [state, setState] = useState(webChecks);

    useEffect(() => {
        updateCaseChecklist(state, caseId, "webChecks")
    }, [state, caseId, updateCaseChecklist]);

    useEffect(() => {
        setState(webChecks)
    }, [webChecks]);

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: !event.target.defaultChecked
        });
    };


    return (

        <Container maxWidth="lg" className="mainContainer">
            {webChecks ? (
                <div>
                    <Link to={HOME} className="backButton">
                        <Button color="primary" variant="contained">
                            <span>BACK</span>
                        </Button>
                    </Link>
                    <h1>Web-Checks: {singleCase.customer} - {singleCase.product}</h1>

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
            <AddCheckListElementContainer checkType="webChecks" caseId={caseId} currentChecks={webChecks}/>
            <SimpleSnackbarContainer/>
        </Container>
    );
}

export default WebCheckListPage;
