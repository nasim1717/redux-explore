import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  search: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchSet: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { searchSet } = searchSlice.actions;
