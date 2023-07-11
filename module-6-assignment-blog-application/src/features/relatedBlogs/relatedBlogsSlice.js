import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedBlogs from "./relatedBlogsAPI";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  relatedBlogs: [],
};

export const relatdBlogsFetch = createAsyncThunk("relatedBlogs/Fetch", async ({ tags, id }) => {
  const relatedBlogs = await getRelatedBlogs(tags, id);
  return relatedBlogs;
});

const relatedBlogsSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(relatdBlogsFetch.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.error = "";
      })
      .addCase(relatdBlogsFetch.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = "";
        state.relatedBlogs = action.payload;
      })
      .addCase(relatdBlogsFetch.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
        state.relatedBlogs = [];
      });
  },
});

export default relatedBlogsSlice.reducer;
