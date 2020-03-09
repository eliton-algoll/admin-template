export default function user(state = {}, action) {
  switch (action.type) {
    case '@user/LOGIN':
      return action.protocolo;
    default:
      return state;
  }
}
