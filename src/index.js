import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

import "antd/dist/antd.css";

import App from './app/App';

ReactDOM.render(<App />, document.getElementById('root'));

// PWA
serviceWorker.unregister();
