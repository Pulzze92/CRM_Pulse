import './styles/index.scss';
import './styles/theme.less';

import React from "react";
import ReactDOM from 'react-dom';

const render = () => {
    const App = require('./app/App').default;

    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,

        document.getElementById("root"));
}

render();
