import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import promise from 'redux-promise';
import logger from 'redux-logger';

const middlewares = applyMiddleware(promise, logger);
const composer = compose(middlewares);

export default function(){
    return createStore(rootReducer, composer);
}

// return createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),composer)
