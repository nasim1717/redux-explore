import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoogedOut } from "../auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_API_URL,
  prepareHeaders: async (headers, { getState, endpoint }) => {
    const token = getState()?.auth?.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  //args: somosto api ja sobi to etar vitor diye jabe to somosto api er query parameter ja sob kicy args er modhe thakbe
  // api: api er modhe state, dispatch thakbe
  // extraoptions: request er sathe apni jodi header onno kono jinish pathan ay jonno r ki
  baseQuery: async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result?.error?.status === 401) {
      api.dispatch(userLoogedOut());
      localStorage.clear();
    }

    return result;
  },
  tagTypes: [],
  endpoints: (builder) => ({}),
});
