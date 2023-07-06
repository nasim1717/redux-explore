const { createSlice } = require("@reduxjs/toolkit");
const initialState = require("./initialState");
const randomVedio = require("../thunk/randomVedio");

const randomVedioSlice = createSlice({
  name: "randomvedio",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(randomVedio.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(randomVedio.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.randomVedios = action.payload;
    });
    builder.addCase(randomVedio.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.randomVedios = {};
    });
  },
});

module.exports = randomVedioSlice.reducer;
