import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { fetcher } from '../lib';
import { getQueryString } from '../helpers';

const getAllUsers = async ({ page, ...params }) => {
  return fetcher
    .get(
      `/users?${getQueryString({
        ...params,
        skip: (page - 1) * 10,
        limit: 10,
      })}`
    )
    .then((res) => {
      return res.data;
    });
};

export const useGetAllUsers = (params) => {
  return useInfiniteQuery({
    queryKey: ['Users'],
    queryFn: ({ pageParam = 1 }) => {
      return getAllUsers({ page: pageParam, ...params });
    },
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage?.data?.users?.length === 10 ? allPages.length + 1 : undefined;
      return nextPage;
    },
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
  return fetcher.post('/users', data).then((res) => {
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

const deleteUser = async (id) => {
  return fetcher.delete(`/users/${id}`, null).then((res) => {
    return res.data;
  });
};

export const useDeleteUser = () => {
  return useMutation({
    mutationFn: deleteUser,
  });
};
