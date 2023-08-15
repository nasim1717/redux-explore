import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    search: "",
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        seraching: (state, action) => {
            state.search = action.payload;
        }
    }
})

export const { seraching } = searchSlice.actions;
export default searchSlice.reducer