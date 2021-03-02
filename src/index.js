import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe, updateNewDetail} from "./redux/stata";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App props = {state} update = {updateNewDetail}/>
        </BrowserRouter>
        ,document.getElementById('root')
    );
}
renderEntireTree(state)

subscribe(renderEntireTree(state))




reportWebVitals();
