// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// export const apiSlice = createApi({
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://194.233.86.4:8091/api',
//   }),
//   endpoints: () => ({}),
// });


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJhNjcxMmM1Ni00OTNhLTRiMGItODg4Ny0xZGE2MzJmYzhhMzQiLCJpc1ZlcmlmaWVkIjp0cnVlLCJyb2xlSWQiOiJhYzJjZjMzZS1lNThmLTQ5ZWMtYWMzZS1kZjM2NTY2NjQ2OTAiLCJpYXQiOjE3MjUxNzMxOTksImV4cCI6MTcyNjAzNzE5OX0.yqJE9bmr1GhSFVjyZVFyDz8tteiY5tmEL3li-qxr4Vw';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://194.233.86.4:8091/api',
    prepareHeaders: (headers) => {
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      headers.set('x-tenant-id', '445508fd-979d-47ad-a56b-e9a604d02f1f');
      return headers;
    },
  }),
  endpoints: () => ({}),
});
