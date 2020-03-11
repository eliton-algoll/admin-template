import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '~/services/history';

import api from '~/services/api';

import { loginSuccess } from './actions';

export function* login({ payload }) {
  const { identidade, senha } = payload;
  const response = yield call(api.post, 'loginapi', {
    identidade,
    senha,
  });

  if (response.data.error) {
    alert(response.data.error);
    return;
  }

  yield put(loginSuccess(response.data));

  history.push('/');
}

export default all([takeLatest('@auth/LOGIN_REQUEST', login)]);
