import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootPageContainer from './components/RootPage/RootPageContainer';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {Provider} from "react-redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import {persistStore, persistReducer} from 'redux-persist';
import {persistConfig} from "./redux/persistConfig";
import {PersistGate} from 'redux-persist/lib/integration/react';
import Loading from "./components/Status/Loading";
import {reduxFirestore, getFirestore} from "redux-firestore";
import {getFirebase, reactReduxFirebase} from "react-redux-firebase"
import firebase from "./firebase/firebase";


const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument({getFirestore, getFirebase})),
        reduxFirestore(firebase),
        reactReduxFirebase(firebase, {})
    )
);
const persistedStore = persistStore(store);
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={<Loading/>} persistor={persistedStore}>
            <RootPageContainer/>
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
