import React from 'react';
import {EDIT_MASTERDATA, ADD_MASTERDATA} from "../../../../constants/routes";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import '../../../global.css';
import EditIcon from '@material-ui/icons/Edit';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const MasterDataList = (props) => {

    return (
        <Container maxWidth="lg" className="mainContainer">
            <h1>Masterdata</h1>
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

                {props.masterdata && props.masterdata.map(oneMasterData => {
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

            <div>
                <Link to={ADD_MASTERDATA}>
                    <AddCircleOutlineOutlinedIcon fontSize="large"/>
                </Link>
            </div>
        </Container>

    );
};

export default MasterDataList;


