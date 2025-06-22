import { configureStore } from "@reduxjs/toolkit";
import { data1Api } from "../features/api/data1";
import { data2Api } from "../features/api/data2";
import { data3Api } from "../features/api/data3";

export const store = configureStore({
  reducer: {
    [data1Api.reducerPath]: data1Api.reducer,
    [data2Api.reducerPath]: data2Api.reducer,
    [data3Api.reducerPath]: data3Api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(data1Api.middleware)
      .concat(data2Api.middleware)
      .concat(data3Api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
