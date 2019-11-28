import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import React, {useEffect, useState} from "react";
import Loading from "../../Status/Loading";
import CheckboxWithLabel from "../../Ui/Checkbox/CheckboxWithLabel";

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
            <CssBaseline/>
            {webChecks ? (
                <div>
                    <h1>{"Web CheckList"}</h1>
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

export default WebCheckList;