/**
 * @file common/store/index.js
 * @module common/store
 * @desc This is the encapsulation of all reducers in a store
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {Object} List of store reducers
 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import appReducers from '../reducers';

const logger = createLogger();

const store = createStore(
  appReducers,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f,
  ),
);

export default store;
