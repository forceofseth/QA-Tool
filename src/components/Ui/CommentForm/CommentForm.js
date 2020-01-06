import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function CommentForm(props) {
    const {profile} = props;

    const initialState = {
        content: ''
    };

    const [state, setState] = useState(initialState);

    const onChange = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = event => {
        event.preventDefault();
        props.createNewComment(props.caseId, state.content, props.currentComments, profile.firstName + " " +profile.lastName, props.commentCounter);
        setState(initialState);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <TextField
                    name="content"
                    onChange={onChange}
                    type="text"
                    placeholder="Comment"
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                    fullWidth
                    value={state.content}
                />

                <Button type="submit" color="primary" variant="contained">
                    Save Comment
                </Button>
            </form>
        </div>
    );
}

export default CommentForm;