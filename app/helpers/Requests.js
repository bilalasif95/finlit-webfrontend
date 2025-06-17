import axios from 'axios';
import { getToken } from './Tokens';

const BASE_URL = 'https://dev-finlit-backend.rnssol.com/';

export const apiGetRequest = (endpoint, props = {}) =>
  apiRequest('GET', endpoint, props);

export const apiPostRequest = (endpoint, payload) =>
  apiRequest('POST', endpoint, { data: payload });

export const apiPatchRequest = (endpoint, payload) =>
  apiRequest('PATCH', endpoint, { data: payload });

export const apiPutRequest = (endpoint, payload) =>
  apiRequest('PUT', endpoint, { data: payload });

export const apiDeleteRequest = (endpoint, payload) =>
  apiRequest('DELETE', endpoint, payload);

export const apiRequest = (method, endpoint, props = {}) => {
  const token = getToken();
  const params = {
    method,
    baseURL: BASE_URL,
    url: endpoint,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  Object.assign(params, props);
  if (token) {
    params.headers.Authorization = `Bearer ${token}`;
  }
  return axios(params).catch(err => err.response);
};
