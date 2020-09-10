import { takeEvery, call, fork, put } from 'redux-saga/effects';
import actions from '../actions/users.action';
import constants from '../constants/user.constant';
import * as api from '../../api/users';
import * as selectors from '../selectors';

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

const usersSagas = [fork(watchGetUsersRequest)];

export default usersSagas;
