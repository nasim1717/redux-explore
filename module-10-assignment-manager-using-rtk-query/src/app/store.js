import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import ProjectSlice from '../features/Projects/ProjectSlice';
import searchSlice from '../features/search/searchSlice';


export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    projectChecked: ProjectSlice,
    searchTask: searchSlice,
  },

  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});
