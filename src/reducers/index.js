import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  loggedIn: loggedReducer,
});

export default reducers;
