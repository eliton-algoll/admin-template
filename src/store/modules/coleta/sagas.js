import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import digitais from '~/services/digitais';

import { loadColeta, loadDigitais } from './actions';

export function* findColeta({ payload }) {
  const { identidade } = payload;

  try {
    const response = yield call(
      api.get,
      `/identificacao/buscacoleta/${identidade}`
    );

    if (response.data.error) {
      toast.error(response.data.message, { autoClose: 8000 });
    }

    yield put(loadColeta(response.data));
    try {
      const coletaRecente = yield call(
        digitais.get,
        `WSQPedido/${response.data.codPedido}`
      );

      yield put(loadDigitais(coletaRecente.data));
    } catch (err) {
      console.tron.log(err);
      toast.error(
        'Erro ao tentar recuperar as digitais coletadas. Atualize a página ou se o erro persistir contate o administrador do sistema',
        { autoClose: 6000 }
      );
    }
  } catch (err) {
    console.tron.log(err);
    toast.error(
      'Erro ao tentar recuperar as digitais coletadas. Atualize a página ou se o erro persistir contate o administrador do sistema',
      { autoClose: 6000 }
    );
  }
}

export default all([takeLatest('@coleta/COLETA_REQUEST', findColeta)]);
