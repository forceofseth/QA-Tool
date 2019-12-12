import Container from "@material-ui/core/Container";
import React, {useEffect, useState} from "react";
import Loading from "../../Status/Loading";
import CheckboxWithLabel from "../../Ui/Checkbox/CheckboxWithLabel";
import {Link} from "react-router-dom";
import {HOME} from "../../../constants/routes";
import Button from "@material-ui/core/Button";
import AddCheckListElement from "../../Ui/AddCheckListElement/AddCheckListElement";

function WebCheckList(props){
    const {webChecks, caseId, updateCaseChecklist} = props;
    const [state, setState] = useState(webChecks);

    useEffect(() => {
        updateCaseChecklist(state,caseId,"webChecks")
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


    return(

        <Container maxWidth="lg" className="mainContainer">
            {webChecks ? (
                <div>
                    <Link to={HOME} className="backButton">
                        <Button color="primary" variant="contained">
                            <span>BACK</span>
                        </Button>
                    </Link>
                    <h1>Customer Name / ProjectID / Product comes here</h1>

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

export default WebCheckList;