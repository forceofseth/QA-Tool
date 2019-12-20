import React, {useState} from 'react';
import {Link} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {EDIT_USER} from "../../../../constants/routes";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const UserList = (props) => {

    const initialState = {
        open: false,
        userId: null
    };

    const [dialogState, setDialogState] = useState(initialState);

    const handleClickOpen = (userId) => {
        setDialogState({
            open: true,
            userId: userId
        });
    };

    const handleClose = () => {
        setDialogState({
            open:false
        });
    };

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Admin</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>

                {props.userList && props.userList.map(oneUserList => {
                    return (
                        <tr key={oneUserList.id}>
                            <td data-label="Firstname">{oneUserList.firstName}</td>
                            <td data-label="Lastname">{oneUserList.lastName}</td>
                            {oneUserList.admin ?<td data-label="Admin"><CheckCircleOutlineIcon/></td>:
                                <td data-label="Admin"><HighlightOffIcon/></td>
                            }
                            <td data-label="Edit">
                                <Link to={EDIT_USER + "/" + oneUserList.id}>
                                    <EditIcon fontSize="small"/>
                                </Link>
                            </td>
                            <td data-label="Delete">
                                <DeleteIcon
                                    onClick={() =>handleClickOpen(oneUserList.id)}
                                    className="deleteIcon"
                                />
                            </td>
                        </tr>
                    )
                })}

                <Dialog
                    open={dialogState.open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">{"Confirm Delete?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            Do you really want to delete this User?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{
                            props.deleteUser(dialogState.userId);
                            handleClose()
                        }} color="primary">
                            Yes
                        </Button>
                        <Button onClick={handleClose} color="primary">
                            No
                        </Button>
                    </DialogActions>
                </Dialog>

                </tbody>
            </table>
        </div>

    );
};

export default UserList;


