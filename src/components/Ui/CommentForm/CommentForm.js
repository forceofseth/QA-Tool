import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function CommentForm(props){

    const {onSubmit, onChange} = props;

    return(
        <div>
            <form onSubmit={onSubmit}>
                <TextField
                    name="comment"
                    onChange={onChange}
                    type="text"
                    placeholder="Comment"
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={4}
                    required
                    fullWidth
                />

                <Button type="submit" color="primary" variant="contained">
                    Save Comment
                </Button>
            </form>
        </div>
    );
}

export default CommentForm;