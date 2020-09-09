import { takeEvery } from 'redux-saga/effects';
import actions from '../actions/users.action';
import constants from '../constants/user.constant';

function* getUsers() {
  try {
  } catch (error) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(constants.GET_USERS_REQUEST, getUsers);
}
