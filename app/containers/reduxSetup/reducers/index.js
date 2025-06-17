import { combineReducers } from 'redux';
import loginReducer from './registeration';

const allreducers = combineReducers({
  login: loginReducer,
});

export default allreducers;
