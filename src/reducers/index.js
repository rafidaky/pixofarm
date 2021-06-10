import loggedReducer from './isLogged';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const reducers = combineReducers({
  loggedIn: loggedReducer,
  userReducer: userReducer,
});

export default reducers;
