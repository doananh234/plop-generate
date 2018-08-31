import {
 get, put, post, del,
} from './utils';

export const getList = (resource, filter) => {
  return get(resource === 'Users' ? '/users' : `/Classes/${resource}`, filter);
};

export const getOneRecord = (resource, id) => {
  return get(resource === 'Users' ? `/users/${id}` : `/Classes/${resource}/${id}`);
};

export const deleteRecord = (resource, id) => {
  return del(resource === 'Users' ? `/users/${id}` : `/Classes/${resource}/${id}`);
};

export const postRecord = (resource, data) => {
  return post(resource === 'Users' ? '/users' : `/Classes/${resource}`, data);
};

export const putRecord = (resource, id, data) => {
  return put(resource === 'Users' ? `/users/${id}` : `/Classes/${resource}/${id}`, data);
};

export const batch = data => {
  return post('/batch', data);
};
