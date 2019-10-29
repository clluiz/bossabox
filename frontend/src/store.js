import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import app from './app.reducer';

const reducers = combineReducers({
  app
});

export default createStore(reducers, applyMiddleware(thunk));
