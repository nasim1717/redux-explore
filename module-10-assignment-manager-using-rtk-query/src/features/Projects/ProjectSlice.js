import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    projectChecked: [
        { name: "Scoreboard", check: true, },
        { name: "Flight Booking", check: true },
        { name: "Product Cart", check: true },
        { name: "Book Store", check: true },
        { name: "Blog Application", check: true },
        { name: "Job Finder", check: true }

    ]
};

const projctSlice = createSlice({
    name: "project",
    initialState,
    reducers: {
        projectCheck: (state, action) => {

            const indexed = state.projectChecked.findIndex(project => project.name === action.payload.name);
            state.projectChecked[indexed] = action.payload;
        }
    }
});

export const { projectCheck } = projctSlice.actions;
export default projctSlice.reducer;