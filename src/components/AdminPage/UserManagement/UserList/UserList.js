import React from 'react';
import {Link} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import {EDIT_USER} from "../../../../constants/routes";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";


const UserList = (props) => {

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
                                <Link to='/'>
                                    <DeleteIcon fontSize="small"/>
                                </Link>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>

    );
};

export default UserList;


