import React from 'react';
import ReactDOM from 'react-dom';

import './sass/style.scss'
import App from "./js/App.jsx";

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});