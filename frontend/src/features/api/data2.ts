import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const data2Api = createApi({
  reducerPath: "data2Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getData2: builder.query<{ message: string }, void>({
      query: () => "/data2",
    }),
  }),
});

export const { useGetData2Query } = data2Api;
