import {
 takeEvery, takeLatest, call, fork, put, take 
} from 'redux-saga/effects';
import actions from '../actions/users.action';
import constants from '../constants/user.constant';
import * as api from '../../api/users';

function* getUsers() {
  try {
    const result = yield call(api.getUsers);
    yield put(actions.getUsersSuccess(result.data.data));
  } catch (error) {
    console.error(error);
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(constants.GET_USERS_REQUEST, getUsers);
}

function* createUser(action: any) {
  const { data } = action;

  try {
    yield call(api.createUser, { firstName: data.firstName, lastName: data.lastName });
    yield call(getUsers);
  } catch (error) {
    console.error(error);
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(constants.CREATE_USER_REQUEST, createUser);
}

function* deleteUser(action: any) {
  try {
    yield call(api.deleteUser, action.userId);
    yield call(getUsers);
  } catch (error) {
    console.error(error);
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(constants.DELETE_USER_REQUEST);
    yield call(deleteUser, { userId: action.data });
  }
}

const usersSagas = [fork(watchGetUsersRequest), fork(watchCreateUserRequest), fork(watchDeleteUserRequest)];

export default usersSagas;
