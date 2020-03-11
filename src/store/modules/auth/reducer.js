import { produce } from 'immer';

const INITIAL_STATE = {
  user: {},
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/LOGIN_SUCCESS':
      return produce(state, draft => {
        draft.user = action.payload.user;
        draft.signed = true;
      });
    default:
      return state;
  }
}
