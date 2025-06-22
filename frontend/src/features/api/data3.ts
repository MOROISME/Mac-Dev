import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const data3Api = createApi({
  reducerPath: "data3Api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  endpoints: (builder) => ({
    getData3: builder.query<
      { message: string },
      { param1: string; param2: string }
    >({
      query: ({ param1, param2 }) => `/data3?param1=${param1}&param2=${param2}`,
    }),
  }),
});

export const { useGetData3Query } = data3Api;
