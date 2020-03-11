export function loginRequest(identidade, senha) {
  return {
    type: '@auth/LOGIN_REQUEST',
    payload: { identidade, senha },
  };
}

export function loginSuccess(user) {
  return {
    type: '@auth/LOGIN_SUCCESS',
    payload: { user },
  };
}

export function loginFailure() {
  return {
    type: '@auth/LOGIN_FAILURE',
  };
}
