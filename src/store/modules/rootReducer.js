import { combineReducers } from 'redux';

import protocolo from './protocolo/reducer';
import coleta from './coleta/reducer';
import pessoa from './pessoa/reducer';
import auth from './auth/reducer';

export default combineReducers({
  auth,
  protocolo,
  pessoa,
  coleta,
});
