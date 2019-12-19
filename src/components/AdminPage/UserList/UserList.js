import React from 'react';
import {Link} from "react-router-dom";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const UserList = (props) => {

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
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
                            <td data-label="Edit">
                                <Link to='/'>
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


