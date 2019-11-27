import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import React, {useEffect, useState} from "react";

function CheckList(props){
    const {leadChecks, caseId, updateCaseChecklist} = props;
    const [state, setState] = useState({...leadChecks});

    useEffect(() => {
        updateCaseChecklist(state,caseId)
    }, [state, caseId, updateCaseChecklist]);

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: !event.target.defaultChecked
        });
        //TODO auch bei neuladen der Komponente auf daten aus dem firestore warten
    };


    return(
        <Container maxWidth="lg" className="mainContainer">
            <CssBaseline/>
            <h1>{"Check-List"}</h1>
            <div>
                {state && Object.keys(state).map(key =>{
                    return(
                        <div key={key}>
                            <label htmlFor ={key}>{key + ":"}</label>
                            <input type="checkbox" name={key} defaultChecked={state[key]} onChange={onChange}/>
                        </div>
                    )
                })}

                {/*<SimpleSnackbarContainer/>*/}
            </div>
        </Container>
    );
}

export default CheckList;