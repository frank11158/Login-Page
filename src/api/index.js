import axios from 'axios';
import config from '../config';

const API = axios.create({ baseURL: config.local.server.host });

export const signIn = (data) => API.post('v1/auth/login', data);
export const signUp = (data) => API.post('v1/auth/register', data);
export const refresh = (data) => API.post('v1/auth/refresh', data);

export const signInGoogle = (accessToken) => {
  // create axios instance with header
  const reqInstance = axios.create({
    baseURL: config.local.server.host,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  // use instance to make request
  return reqInstance.post('v1/auth/google');
};
