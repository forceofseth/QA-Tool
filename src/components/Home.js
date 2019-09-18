import React, {useState} from 'react';
import MaterialTable from "material-table";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import {useAuthorizationRedirect} from "../hooks/useAuthorizationRedirect";
import {getAuthUser} from "../redux/selectors";
import {connect} from "react-redux";
import Forbidden from "./Forbidden";
import './Home.css';
import CssBaseline from "@material-ui/core/CssBaseline";

function Home(props) {

    const redirectCondition = (authUser) => !!authUser;
    useAuthorizationRedirect(redirectCondition, props.authUser);

    return (
        <div>{props.authUser ? <HomeAuth/> : <Forbidden/>}</div>
    );

}

const HomeAuth = () => {

    // testdata
    const [state, setState] = useState({
        columns: [
            {title: 'Customer', field: 'customer'},
            {title: 'Product', field: 'product'},
            {title: 'ID', field: 'id', type: 'numeric'},
            {title: 'Lead', field: 'lead'},
            {title: 'Web', field: 'web'},
            {title: 'Date', field: 'date'},
            {title: 'Aproved', field: 'aproved'},
        ],
        data: [
            {
                customer: 'SBB',
                product: 'DirectLink',
                id: 1000242,
                lead: "Lukas",
                web: "Milos",
                date: "21.01.2019",
                aproved: "no"
            },
            {
                customer: 'SBB',
                product: 'DirectLink',
                id: 1000242,
                lead: "Lukas",
                web: "Milos",
                date: "21.01.2019",
                aproved: "no"
            },
            {
                customer: 'SBB',
                product: 'DirectLink',
                id: 1000242,
                lead: "Lukas",
                web: "Milos",
                date: "21.01.2019",
                aproved: "no"
            },
            {
                customer: 'SBB',
                product: 'DirectLink',
                id: 1000242,
                lead: "Lukas",
                web: "Milos",
                date: "21.01.2019",
                aproved: "no"
            },
            {
                customer: 'SBB',
                product: 'DirectLink',
                id: 1000242,
                lead: "Lukas",
                web: "Milos",
                date: "21.01.2019",
                aproved: "no"
            },
            {
                customer: 'SBB',
                product: 'DirectLink',
                id: 1000242,
                lead: "Lukas",
                web: "Milos",
                date: "21.01.2019",
                aproved: "no"
            },

        ],
    });

    return (<Container>
        <CssBaseline/>

        <Box className="backgroundLayer">

        </Box>

        <MaterialTable
            maxWidth="lg"
            title="Cases"
            columns={state.columns}
            data={state.data}
            editable={{
                onRowAdd: newData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.push(newData);
                            setState({...state, data});
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data[data.indexOf(oldData)] = newData;
                            setState({...state, data});
                        }, 600);
                    }),
                onRowDelete: oldData =>
                    new Promise(resolve => {
                        setTimeout(() => {
                            resolve();
                            const data = [...state.data];
                            data.splice(data.indexOf(oldData), 1);
                            setState({...state, data});
                        }, 600);
                    }),
            }}
        />
    </Container>)

};

const mapStateToProps = state => {
    return {authUser: getAuthUser(state)};
};

export default connect(mapStateToProps)(Home);
