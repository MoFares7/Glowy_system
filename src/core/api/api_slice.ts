// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// export const apiSlice = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://194.233.86.4:8091/api',
//   }),
//   endpoints: () => ({}),
// });


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getValue, setValue } from "../storage/storage";

setValue('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3NzRjZDI5OS01OWIwLTQ0MDgtOTUwMC02OWU4NGQ2NjM3YmIiLCJpc1ZlcmlmaWVkIjp0cnVlLCJyb2xlSWQiOiJlODU3ODAzZS1iNDUyLTRkMTQtYmJiNi1hMzE0OTBkZjYwY2UiLCJpYXQiOjE3MjUwODk1NTAsImV4cCI6MTcyNTk1MzU1MH0.jPIAZm3UumJ7pk9B9vsZAz8bjqyf2qQbZIk3pHn_uto');
const getToken = () => getValue('token');

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://194.233.86.4:8091/api',
    prepareHeaders: (headers) => {
      const token = getToken();
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('x-tenant-id', '445508fd-979d-47ad-a56b-e9a604d02f1f');
      return headers;
    },
  }),
  endpoints: () => ({}),
});
