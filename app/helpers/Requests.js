import axios from 'axios';
import { getToken } from './Tokens';

const BASE_URL = 'https://dev-finlit-backend.rnssol.com/';

export const apiGetRequest = (endpoint, token = null, props = {}) =>
  apiRequest('GET', endpoint, token, props);

export const apiPostRequest = (endpoint, payload, token = null) =>
  apiRequest('POST', endpoint, token, { data: payload });

export const apiPatchRequest = (endpoint, payload, token = null) =>
  apiRequest('PATCH', endpoint, token, { data: payload });

export const apiPutRequest = (endpoint, payload, token = null) =>
  apiRequest('PUT', endpoint, token, { data: payload });

export const apiDeleteRequest = (endpoint, payload, token = null) =>
  apiRequest('DELETE', endpoint, token);

export const apiRequest = (method, endpoint, token = null, props = {}) => {
  if (!token) {
    token = getToken();
  }
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
