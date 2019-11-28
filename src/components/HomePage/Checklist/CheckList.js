import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import React, {useEffect, useState} from "react";
import Loading from "../../Status/Loading";
import SimpleSnackbarContainer from "../../Ui/Snackbar/SimpleSnackbarContainer";

function CheckList(props){
    const {leadChecks, caseId, updateCaseChecklist} = props;
    const [state, setState] = useState(leadChecks);

    useEffect(() => {
        updateCaseChecklist(state,caseId)
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
                    <h1>{"Check-List"}</h1>
                    {state && Object.keys(state).map(key =>{
                        return(
                            <div key={key}>
                                <label htmlFor ={key}>{key + ":"}</label>
                                <input type="checkbox" name={key} defaultChecked={state[key]} onChange={onChange}/>
                            </div>
                        )
                    })}
                    <SimpleSnackbarContainer/>
                </div>
            ): (
                <Loading/>
            )}

        </Container>
    );
}

export default CheckList;