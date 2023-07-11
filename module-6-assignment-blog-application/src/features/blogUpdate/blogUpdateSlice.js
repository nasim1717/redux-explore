import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import updateBlog from "./blogUpdateAPI";

const initialState = {
  updateBlog: {},
  isError: false,
  isLoading: false,
  error: "",
};
export const blogUpdate = createAsyncThunk("blog/blogUpdate", async ({ id, likes, saved }) => {
  console.log("saved" + saved);
  const updateBlogData = await updateBlog(id, likes, saved);
  return updateBlogData;
});

const blogUpdateSlice = createSlice({
  name: "blogUpdate",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(blogUpdate.pending, (state, action) => {
        state.isError = false;
        state.isLoading = true;
        state.error = "";
      })
      .addCase(blogUpdate.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.error = "";
        state.updateBlog = action.payload;
      })
      .addCase(blogUpdate.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.error = "";
        state.updateBlog = {};
      });
  },
});

export default blogUpdateSlice.reducer;
