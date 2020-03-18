export function protocoloRequest(data) {
  return {
    type: '@protocolo/PROTOCOLO_REQUEST',
    payload: data,
  };
}

export function loadProtocolo(protocolo) {
  return {
    type: '@protocolo/LOAD_PROTOCOLO',
    payload: protocolo,
  };
}

export function createProtocoloRequest(data) {
  return {
    type: '@protocolo/CREATE_PROTOCOLO_REQUEST',
    payload: data,
  };
}

export function createProtocoloSuccess(protocolo) {
  return {
    type: '@protocolo/CREATE_PROTOCOLO_SUCCESS',
    payload: protocolo,
  };
}
