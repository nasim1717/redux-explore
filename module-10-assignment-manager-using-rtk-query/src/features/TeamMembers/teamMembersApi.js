import { apiSlice } from "../api/apiSlice";

export const teamMembaersApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getTeamMembers: builder.query({
            query: () => "/team",

        })
    })
});

export const { useGetTeamMembersQuery } = teamMembaersApi;