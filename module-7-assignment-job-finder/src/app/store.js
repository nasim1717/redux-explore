import { configureStore } from "@reduxjs/toolkit";
import jobsFinderReducer from "../features/jobsFinder/jobsFinderSlice";

export const store = configureStore({
  reducer: {
    jobsFinde: jobsFinderReducer,
  },
});
