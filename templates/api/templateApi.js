import { get, post } from './utils';

export async function get{{upperCaseFirstChart name}}s() {
  return get('/{{name}}');
}