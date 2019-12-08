import React from 'react';
import {EDIT_MASTERDATA} from "../../../../constants/routes";
import {Link} from "react-router-dom";
import '../../../global.css';
import './MasterData.css';

import EditIcon from '@material-ui/icons/Edit';

const MasterDataList = (props) => {

    return (
        <div>
            <table>
                <thead>
                <tr>
                    <th>Project ID</th>
                    <th>Customer</th>
                    <th>Product</th>
                    <th>Edit</th>
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
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>

    );
};

export default MasterDataList;


