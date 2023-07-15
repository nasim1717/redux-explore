import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addJobs, deletetJobs, editJobs, getJobs } from "./jobsFinderAPi";

const initialState = {
  isLoading: false,
  isError: false,
  error: false,
  jobs: [],
  jobName: "",
  sort: "",
  search: "",
};

export const fetchJobs = createAsyncThunk("jobsfinder/fetchjobs", async ({ sort, jobName }) => {
  const response = await getJobs(sort, jobName);
  return response;
});

export const createJobs = createAsyncThunk("jobsfinder/createjobs", async (data) => {
  const response = await addJobs(data);
  return response;
});

export const changeJobs = createAsyncThunk("jobsfinder/changejobs", async ({ id, data }) => {
  const response = await editJobs(id, data);
  return response;
});

export const removeJobs = createAsyncThunk("jobsfinder/removejobs", async (id) => {
  const response = await deletetJobs(id);

  return response;
});

const jobsFinderSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    jobName: (state, action) => {
      state.jobName = action.payload;
    },
    sort: (state, action) => {
      state.sort = action.payload;
    },
    searchJob: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error?.message;
      })
      .addCase(createJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(createJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.jobs.push(action.payload);
      })
      .addCase(createJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error?.message;
      })
      .addCase(changeJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(changeJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        const index = state.jobs.findIndex((job) => job.id === action.payload.id);
        state.jobs[index] = action.payload;
      })
      .addCase(changeJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error?.message;
      })
      .addCase(removeJobs.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(removeJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        const id = action.meta.arg;
        const jobsFind = state.jobs.filter((job) => job.id !== id);
        state.jobs = jobsFind;
      })
      .addCase(removeJobs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.jobs = [];
        state.error = action.error?.message;
      });
  },
});

export default jobsFinderSlice.reducer;
export const { jobName, sort, searchJob } = jobsFinderSlice.actions;
