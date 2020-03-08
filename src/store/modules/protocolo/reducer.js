export default function protocolo(state = {}, action) {
  switch (action.type) {
    case 'ADD_PROTOCOLO':
      return action.protocolo;
    default:
      return state;
  }
}
