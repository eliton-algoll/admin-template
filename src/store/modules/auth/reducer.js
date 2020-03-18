/* eslint-disable no-param-reassign */
import { produce } from 'immer';

const INITIAL_STATE = {
  user: {},
  signed: true,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/LOGIN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/LOGIN_SUCCESS': {
        draft.user = action.payload.user;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/LOGIN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/LOGOUT': {
        draft.signed = false;
        break;
      }

      default:
    }
  });
}
