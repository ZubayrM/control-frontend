import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        ,document.getElementById('root')
    );
}
renderEntireTree()
reportWebVitals();
