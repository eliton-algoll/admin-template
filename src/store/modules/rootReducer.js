import { combineReducers } from 'redux';

import protocolo from './protocolo/reducer';
import pessoa from './pessoa/reducer';

export default combineReducers({
  protocolo,
  pessoa,
});
