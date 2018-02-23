import axios from 'axios';
import querystring from 'querystring';
import { throwReduxAsyncErrors } from './utils';

const getToken = () => localStorage.getItem('token');

const queryfy = (data = {}) => {
  const string = querystring.stringify(data);
  return string.length ? '?'.concat(string) : '';
};

const api = axios.create({
  timeout: 1000,
  headers: {
    'Authorization': getToken(),
  }
});

const register = data => {
  return api
    .post('/api/register', data)
    .catch(throwReduxAsyncErrors);
};

const login = data => {
  return api
    .post('/api/login', data)
    .catch(throwReduxAsyncErrors);
};

const forgetPassword = data => {
  return api
    .post('/api/forget-password', data)
    .catch(throwReduxAsyncErrors);
};

const resetPassword = data => {
  return api
    .post('/api/reset-password', data)
    .catch(throwReduxAsyncErrors);
};

const refreshToken = () => {
  return api
    .post('/api/refresh-token', {})
    .catch(err => {
      throw new Error(err);
    });
};

export {
  // auth
  login,
  register,
  refreshToken,
  resetPassword,
  forgetPassword,
}
