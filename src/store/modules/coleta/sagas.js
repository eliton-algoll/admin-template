import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import digitais from '~/services/digitais';

import { loadColeta, loadDigitais } from './actions';

export function* findColeta({ payload }) {
  const { identidade } = payload;

  const response = yield call(
    api.get,
    `/identificacao/buscacoleta/${identidade}`
  );

  if (response.data.error) {
    toast.error(response.data.message, { autoClose: false });
  }

  yield put(loadColeta(response.data));

  const coletaRecente = yield call(
    digitais.get,
    `WSQPedido/${response.data.codPedido}`
  );

  yield put(loadDigitais(coletaRecente.data));
}

export default all([takeLatest('@coleta/COLETA_REQUEST', findColeta)]);
