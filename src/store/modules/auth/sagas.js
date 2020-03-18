import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';

import { loginSuccess, loginFailure } from './actions';

export function* login({ payload }) {
  const { identidade, senha } = payload;
  const response = yield call(api.post, 'loginapi', {
    identidade,
    senha,
  });

  if (response.data.error) {
    toast.error(response.data.error);
    yield put(loginFailure());
    return;
  }

  yield put(loginSuccess(response.data));

  history.push('/');
}

export function logout() {
  history.push('/login');
}

export default all([
  takeLatest('@auth/LOGIN_REQUEST', login),
  takeLatest('@auth/LOGOUT', logout),
]);
