import { combineReducers } from 'redux';
import UsersReducer from './user.reducer';

export default combineReducers({
  users: UsersReducer,
});
