import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../combineReducer';

// Note: this API requires redux@>=3.1.0
const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
  // other store enhancers if any
);
export const store = createStore(rootReducer, enhancer);
