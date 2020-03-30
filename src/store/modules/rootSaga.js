import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import protocolo from './protocolo/sagas';
import coleta from './coleta/sagas';

export default function* rootSaga() {
  return yield all([auth, protocolo, coleta]);
}
