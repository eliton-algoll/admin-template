/* eslint-disable no-param-reassign */
import { produce } from 'immer';

const INITIAL_STATE = {
  coleta: {},
};

export default function coleta(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@coleta/COLETA_REQUEST': {
        break;
      }

      case '@coleta/LOAD_COLETA': {
        draft.coleta = action.payload.coleta;
        break;
      }

      case '@coleta/CLEAN_COLETA': {
        draft.coleta = {};
        break;
      }

      case '@coleta/LOAD_DIGITAIS': {
        draft.digitais = action.payload.digitais;
        break;
      }

      case '@coleta/COLETA_NOT_FOUND': {
        draft.message = action.payload.message;
        break;
      }

      default:
    }
  });
}
