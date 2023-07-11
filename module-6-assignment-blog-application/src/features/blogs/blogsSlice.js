import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getBlogs from "./blogsAPI";

const initialState = {
  blogs: [],
  isError: false,
  isLoading: false,
  error: "",
};

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async ({ filter, sort }) => {
  const blogs = await getBlogs(filter, sort);
  return blogs;
});

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
        state.blogs = [];
      });
  },
});

export default blogsSlice.reducer;
