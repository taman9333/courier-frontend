import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers';
import promise from 'redux-promise';
import logger from 'redux-logger';

const middlewares = applyMiddleware(promise, logger);
const composer = compose(middlewares,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default function(){
  return createStore(rootReducer, composer)
}