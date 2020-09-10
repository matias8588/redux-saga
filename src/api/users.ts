/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios';

export const getUsers = () => axios.get('/users', { params: { limit: 1000 } });

export const createUser = (data: any) => {
  const { firstName, lastName } = data;
  return axios.post('/users', { firstName, lastName });
};

export const deleteUser = (data: any) => axios.delete(`/users/${data}`);
