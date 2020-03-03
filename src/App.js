import React from 'react';
import './App.css';
import projectReducer from "./reducers/ProjectReducer";
import {createStore} from "redux";
import {Provider} from "react-redux";
import MainSiteComponent from "./components/MainSiteComponent";

const store = createStore(projectReducer);

function App() {
    return (
        <Provider store={store}>
            <MainSiteComponent/>
        </Provider>
    );
}

export default App;
