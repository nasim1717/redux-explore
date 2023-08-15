import { apiSlice } from "../api/apiSlice";


export const projectsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProject: builder.query({
            query: () => "/projects",

        }),
    })
});

export const { useGetProjectQuery } = projectsApi;