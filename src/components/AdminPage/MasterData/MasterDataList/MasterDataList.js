import React, {useState} from 'react';
import {EDIT_MASTERDATA} from "../../../../constants/routes";
import {Link} from "react-router-dom";
import '../../../global.css';
import './MasterData.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DialogContentText from "@material-ui/core/DialogContentText";

const MasterDataList = (props) => {

    const initialState = {
      open: false,
      masterDataId: null
    };
    const [dialogState, setDialogState] = useState(initialState);

    const handleClickOpen = (masterDataId) => {
        setDialogState({
            open: true,
            masterDataId: masterDataId
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
                    <th>Project ID</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>

                {props.masterData && props.masterData.map(oneMasterData => {
                    return (
                        <tr key={oneMasterData.id}>
                            <td data-label="ID">{oneMasterData.projectId}</td>
                            <td data-label="Customer">{oneMasterData.customer}</td>
                            <td data-label="Product">{oneMasterData.product}</td>

                            <td data-label="Edit">
                                <Link to={EDIT_MASTERDATA + "/" + oneMasterData.id}>
                                    <EditIcon fontSize="small"/>
                                </Link>
                            </td>
                            <td>
                                <DeleteIcon
                                    onClick={() =>handleClickOpen(oneMasterData.id)}
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
                            Do you really want to delete this Master-Data Entry?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={()=>{
                            props.deleteMasterData(dialogState.masterDataId);
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
export default MasterDataList;


