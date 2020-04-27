export function coletaRequest(identidade) {
  return {
    type: '@coleta/COLETA_REQUEST',
    payload: { identidade },
  };
}

export function loadColeta(coleta) {
  return {
    type: '@coleta/LOAD_COLETA',
    payload: { coleta },
  };
}

export function loadDigitais(digitais) {
  return {
    type: '@coleta/LOAD_DIGITAIS',
    payload: { digitais },
  };
}

export function coletaNotFound(message) {
  return {
    type: '@coleta/COLETA_NOT_FOUND',
    message,
  };
}

export function cleanColeta() {
  return {
    type: '@coleta/CLEAN_COLETA',
  };
}
