import { get, post } from './utils';

export async function loginApi(username, password) {
  return get(`/login?username=${username}&password=${password}`);
}

export async function logoutApi() {
  return post('/logout');
}
