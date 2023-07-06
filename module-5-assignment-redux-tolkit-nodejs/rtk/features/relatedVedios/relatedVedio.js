const { createSlice } = require("@reduxjs/toolkit");
const initialState = require("./initialState");
const relatedVedios = require("../thunk/relatedVedio");

const relatedVediosSlice = createSlice({
  name: "related",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(relatedVedios.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(relatedVedios.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.vedios = action.payload;
    });
    builder.addCase(relatedVedios.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.vedios = [];
    });
  },
});

module.exports = relatedVediosSlice.reducer;
