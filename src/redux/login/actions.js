import { makeConstantCreator, makeActionCreator } from '../reduxCreator';

export const LoginTypes = makeConstantCreator(
  'LOGIN',
  'LOGIN_AUTH_FAIL',
  'LOGIN_AUTH_SUCCESS',
  'LOGOUT',
);

export const login = (username, password) =>
  makeActionCreator(LoginTypes.LOGIN, { username, password });
export const loginSuccess = data => makeActionCreator(LoginTypes.LOGIN_AUTH_SUCCESS, { data });
export const loginFailure = error => makeActionCreator(LoginTypes.LOGIN_AUTH_FAIL, { error });

export const logout = () => makeActionCreator(LoginTypes.LOGOUT);
