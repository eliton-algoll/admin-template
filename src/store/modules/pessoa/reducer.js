export default function pessoa(state = {}, action) {
  switch (action.type) {
    case 'ADD_DADOS_PESSOA':
      return action.basePessoa;
    default:
      return state;
  }
}
