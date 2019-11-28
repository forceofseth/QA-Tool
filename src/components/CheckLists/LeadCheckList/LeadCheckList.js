import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import React, {useEffect, useState} from "react";
import Loading from "../../Status/Loading";
import CheckboxWithLabel from "../../Ui/Checkbox/CheckboxWithLabel";

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
            <CssBaseline/>
            {leadChecks ? (
                <div>
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

        </Container>
    );
}

export default LeadCheckList;