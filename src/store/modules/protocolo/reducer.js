/* eslint-disable no-param-reassign */
import { produce } from 'immer';

const INITIAL_STATE = {
  protocolo: {},
  tab: 0,
};

export default function protocolo(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@protocolo/PROTOCOLO_REQUEST': {
        // draft.protocolo = true;
        break;
      }

      case '@protocolo/CREATE_PROTOCOLO_REQUEST': {
        draft.protocolo = action.payload.data;
        break;
      }

      case '@protocolo/LOAD_PROTOCOLO': {
        draft.protocolo = action.payload.protocolo;
        break;
      }

      case '@protocolo/CREATE_PROTOCOLO_SUCCESS': {
        draft.protocolo = action.payload.protocolo;
        break;
      }

      case '@protocolo/CLEAN_PROTOCOLO': {
        draft.protocolo = {};
        draft.tab = 0;
        break;
      }

      case '@protocolo/CHANGE_TAB': {
        draft.tab = action.payload.tab;
        break;
      }

      default:
    }
  });
}
