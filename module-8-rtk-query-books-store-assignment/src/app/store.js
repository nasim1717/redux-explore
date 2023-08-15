import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import searchReducer from "../features/search/searchSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    searchBooks: searchReducer,
  },
  middleware: (getDefaultMiddleWares) => getDefaultMiddleWares().concat(apiSlice.middleware),
});
