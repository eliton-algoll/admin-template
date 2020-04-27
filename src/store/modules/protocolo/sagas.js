import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '~/services/history';

import api from '~/services/api';

import {
  loadProtocolo,
  createProtocoloSuccess,
  cleanProtocolo,
} from './actions';

import { cleanColeta } from '../coleta/actions';

export function* findProtocolo({ payload }) {
  const { codProtocolo } = payload;

  const response = yield call(
    api.get,
    `/identificacao/findprotocolo/${codProtocolo}`
  );

  yield put(loadProtocolo(response.data));
}

export function* newProtocolo({ payload }) {
  const { data } = payload;
  console.tron.log('dados do formulário', data);
  // const tst = yield data;
  const response = yield call(api.post, `/identificacao/protocolo/gerarapi`, {
    ...data,
  });

  if (response.data.status === 200) {
    createProtocoloSuccess(response.data.protocolo);
    toast.info(response.data.msgm, { autoClose: false });
    history.push('/protocolo');
  }
}

export function* clean() {
  yield put(cleanProtocolo());
  yield put(cleanColeta());
}

export default all([
  takeLatest('@protocolo/PROTOCOLO_REQUEST', findProtocolo),
  takeLatest('@protocolo/CREATE_PROTOCOLO_REQUEST', newProtocolo),
  takeLatest('@protocolo/CLEAN_PROTOCOLO_REQUEST', clean),
]);
