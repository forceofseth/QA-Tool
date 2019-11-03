import React, {useState} from 'react';

import {useAuthorizationRedirect} from "../../hooks/useAuthorizationRedirect";
import ForbiddenPage from "../Status/ForbiddenPage";

function AddCasePage(props) {

    const redirectCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(redirectCondition, props.authUser);
    return (
        <div>{props.authUser ? <AddCaseAuth {...props}/> : <ForbiddenPage/>}</div>
    );
}

function AddCaseAuth(props) {

    const INITIAL_STATE = {
        approved: '',
        customer: '',
        date: '',
        id: '',
        lead: '',
        product: '',
        web: ''
    };

    const [state, setState] = useState(INITIAL_STATE);

    const onSubmit = event => {
        props.createCase(state);
        event.preventDefault();
        setState(INITIAL_STATE);
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };


    return (
        //TODO check if form is filled out.
        <div>
            {console.log(props.createCase)}
            <h1>SignUp</h1>

            <form onSubmit={onSubmit}>
                <input
                    name="approved"
                    value={state.approved}
                    onChange={onChange}
                    type="text"
                    placeholder="approved"
                />
                <input
                    name="customer"
                    value={state.customer}
                    onChange={onChange}
                    type="text"
                    placeholder="customer"
                />
                <input
                    name="date"
                    value={state.date}
                    onChange={onChange}
                    type="date"
                    placeholder="date"
                />
                <input
                    name="id"
                    value={state.id}
                    onChange={onChange}
                    type="text"
                    placeholder="id"
                />
                <input
                    name="lead"
                    value={state.lead}
                    onChange={onChange}
                    type="text"
                    placeholder="lead"
                />
                <input
                    name="product"
                    value={state.product}
                    onChange={onChange}
                    type="text"
                    placeholder="product"
                />
                <input
                    name="web"
                    value={state.web}
                    onChange={onChange}
                    type="text"
                    placeholder="web"
                />
                <button type="submit">Create Case</button>
                {state.error && <p>{state.error.message}</p>}
            </form>
        </div>

    );
}


export default AddCasePage;