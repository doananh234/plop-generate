import { get, post } from './utils';

export async function getDdds() {
  return get('/ddd');
}