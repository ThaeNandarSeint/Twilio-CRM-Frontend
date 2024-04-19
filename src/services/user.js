import { useMutation, useQuery } from 'react-query';
import { fetcher } from '../lib';
import { getQueryString } from '../helpers';

export const getAllUsers = async (params) => {
  return fetcher.get(`/users?${getQueryString(params)}`).then((res) => {
    return res.data;
  });
};

export const useGetAllUsers = (params) => {
  return useQuery({
    queryKey: ['users', params],
    queryFn: () => getAllUsers(params),
  });
};

const getUserDetail = async (id) => {
  return fetcher.get(`/users/${id}`).then((res) => {
    return res.data;
  });
};

export const useGetUserDetail = (id) => {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserDetail(id),
  });
};

//
const createUser = async (data) => {
  return fetcher.post('/auth/register', data).then((res) => {
    return res.data;
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
  });
};

const editUser = async ({ data, id }) => {
  return fetcher.patch(`/users/${id}`, data).then((res) => {
    return res.data;
  });
};

export const useEditUser = () => {
  return useMutation({
    mutationFn: editUser,
  });
};

const editPassword = async (data) => {
  return fetcher.patch('/auth/password', data).then((res) => {
    return res.data;
  });
};

export const useEditPassword = () => {
  return useMutation({
    mutationFn: editPassword,
  });
};

const disableUser = async (id) => {
  return fetcher.post(`/users/${id}/disable`, null).then((res) => {
    return res.data;
  });
};

export const useDisableUser = () => {
  return useMutation({
    mutationFn: disableUser,
  });
};
