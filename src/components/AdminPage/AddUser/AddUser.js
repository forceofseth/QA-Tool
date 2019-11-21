import React, {useState} from 'react';

function AddUser(props) {

    const INITIAL_STATE = {
        firstName: '',
        lastName: '',
        email: '',
        passwordOne: '',
        passwordTwo: '',
        admin: ''
    };
    const [state, setState] = useState(INITIAL_STATE);

    const onSubmit = event => {
        props.createUser(state);
        setState(INITIAL_STATE);
        event.preventDefault();
    };

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const isInvalid =
        state.passwordOne !== state.passwordTwo ||
        state.passwordOne === '' ||
        state.email === '' ||
        state.firstName === ''||
        state.lastName === ''||
        state.admin === '';

    return (
        <div>
            <h1>Add User</h1>

            <form onSubmit={onSubmit}>
                <input
                    name="firstName"
                    value={state.firstName}
                    onChange={onChange}
                    type="text"
                    placeholder="FirstName"
                />
                <input
                    name="lastName"
                    value={state.lastName}
                    onChange={onChange}
                    type="text"
                    placeholder="LastName"
                />
                <input
                    name="email"
                    value={state.email}
                    onChange={onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="passwordOne"
                    value={state.passwordOne}
                    onChange={onChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={state.passwordTwo}
                    onChange={onChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                {/*TODO create dropdown with true or false*/}
                <input
                    name="admin"
                    value={state.admin}
                    onChange={onChange}
                    type="text"
                    placeholder="Is the User an Admin?"
                />
                <button disabled={isInvalid} type="submit">Sign Up</button>
                {props.error && <p className='error'>{props.error.message}</p>}
                {props.successMessage && <p className='success'>{props.successMessage}</p>}
            </form>
        </div>
    );
}

export default AddUser;

