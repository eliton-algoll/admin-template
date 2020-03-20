import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { loadProtocolo } from './actions';

export function* findProtocolo({ payload }) {
  const { codProtocolo } = payload;

  const response = yield call(
    api.get,
    `/identificacao/findprotocolo/${codProtocolo}`
  );

  yield put(loadProtocolo(response.data));
}

export default all([takeLatest('@protocolo/PROTOCOLO_REQUEST', findProtocolo)]);
