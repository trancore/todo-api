﻿import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { paths } from '~/types/openapi';

type GetTodosResponse =
  paths['/todos']['get']['responses']['200']['content']['application/json'];
type PostTodoRequest =
  paths['/todos']['post']['requestBody']['content']['application/json'];

export const todoApi = createApi({
  reducerPath: 'todoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/api/v1',
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<GetTodosResponse, void>({
      query: () => '/todos',
    }),
    createTodo: builder.mutation<undefined, PostTodoRequest>({
      query: ({ title, description, deadlineAt }) => ({
        url: '/todo',
        method: 'POST',
        body: {
          title: title,
          description: description,
          deadlineAt: deadlineAt,
        },
      }),
    }),
  }),
});

export const { useGetTodosQuery, useCreateTodoMutation } = todoApi;
