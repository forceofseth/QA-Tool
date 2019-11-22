import React, {useEffect, useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    close: {
        padding: theme.spacing(0.5),
    },
}));

export default function SimpleSnackbar(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const {
        authError, authSuccess, casesError, casesSuccess,
        cleanAuthErrorAction, cleanAuthSuccessAction, cleanCaseSuccessAction, cleanCaseErrorAction
    } = props;
    const message = useRef("");

    useEffect(() => {
        if (authError) {
            message.current = authError.message;
            setOpen(true);
        }
        return () => {
            cleanAuthErrorAction();
        }
    }, [authError, cleanAuthErrorAction]);

    useEffect(() => {
        if (authSuccess) {
            message.current = authSuccess;
            setOpen(true);
        }
        return () => {
            cleanAuthSuccessAction();
        }
    }, [authSuccess, cleanAuthSuccessAction]);

    useEffect(() => {
        if (casesError) {
            message.current = casesError.message;
            setOpen(true);
        }
        return () => {
            cleanCaseErrorAction();
        }
    }, [casesError, cleanCaseErrorAction]);

    useEffect(() => {
        if (casesSuccess) {
            message.current = casesSuccess;
            setOpen(true);
        }
        return () => {
            cleanCaseSuccessAction();
        }
    }, [casesSuccess, cleanCaseSuccessAction]);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{message.current}</span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="close"
                        color="inherit"
                        className={classes.close}
                        onClick={handleClose}
                    >
                        <CloseIcon/>
                    </IconButton>,
                ]}
            />
        </div>
    );
}
