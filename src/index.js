import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import createStore from './create-store'
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom'
import setAuthorizationToken from './utils/setAuthorizationToken'
import history from './history'

const store = createStore()
setAuthorizationToken(localStorage.jwtToken)

ReactDOM.render(<Provider store={store}><Router history={history}><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
