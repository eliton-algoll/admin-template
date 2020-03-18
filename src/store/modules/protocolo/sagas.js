import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { loadProtocolo, protocoloRequest } from './actions';

export function* findProtocolo({ codProtocolo }) {
  console.tron.log('requisitandoooo');
}

export default all([takeLatest('@protocolo/PROTOCOLO_REQUEST', findProtocolo)]);
