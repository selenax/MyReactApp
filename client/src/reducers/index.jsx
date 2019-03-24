import { combineReducers } from 'redux';
import authReducer from './authReducer.jsx';

export default combineReducers({
  auth: authReducer
});
