import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const data1Api = createApi({
  reducerPath: "data1Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getData1: builder.query<{ message: string }, void>({
      query: () => "/data1",
    }),
  }),
});

export const { useGetData1Query } = data1Api;
