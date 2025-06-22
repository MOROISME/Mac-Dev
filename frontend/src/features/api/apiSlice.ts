//現在未使用

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
//   endpoints: (builder) => ({
//     getData1: builder.query<{ message: string }, void>({
//       query: () => "/data1",
//     }),
//     getData2: builder.query<{ message: string }, void>({
//       query: () => "/data2",
//     }),
//     getData3: builder.query<
//       { message: string },
//       { param1: string; param2: string }
//     >({
//       query: ({ param1, param2 }) => `/data3?param1=${param1}&param2=${param2}`,
//     }),
//   }),
// });

// export const { useGetData1Query, useGetData2Query, useGetData3Query } =
//   apiSlice;
