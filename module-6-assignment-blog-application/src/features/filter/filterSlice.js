import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sort: "default",
  filter: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    sort: (state, action) => {
      state.sort = action.payload;
    },

    filter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { sort, filter } = filterSlice.actions;
export default filterSlice.reducer;
