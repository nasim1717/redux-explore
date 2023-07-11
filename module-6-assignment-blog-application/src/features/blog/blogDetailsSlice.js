import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlog from "./blogDetialAPI";

const initialState = {
  isLoading: false,
  isError: false,
  blog: [],
  error: "",
};

export const blogFetch = createAsyncThunk("blog/blogFetch", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

const blogDetailsSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(blogFetch.pending, (state, action) => {
        state.isLoading = true;
        state.error = "";
        state.isError = false;
      })
      .addCase(blogFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.isError = false;
        state.blog = action.payload;
      })
      .addCase(blogFetch.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error?.message;
        state.isLoading = false;
        state.blog = [];
      });
  },
});

export default blogDetailsSlice.reducer;
