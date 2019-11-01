import { combineReducers, createStore, applyMiddleware } from 'redux';
import {reducer as toastReducer} from 'react-redux-toastr';
import thunk from 'redux-thunk';

import app from './app.reducer';

const reducers = combineReducers({
  toastr: toastReducer,
  app
});

export default createStore(reducers, applyMiddleware(thunk));
