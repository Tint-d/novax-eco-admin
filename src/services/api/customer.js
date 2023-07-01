import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const customerApi = createApi({
  reducerPath: "customer",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://novaxtechno.tech/api/v1/admin",
  }),
  tagTypes: ["Customer"],
  endpoints: (builder) => ({
    customersList: builder.query({
      query: (token) => ({
        url: `/customers`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Customer"],
    }),
    customerDetail: builder.query({
      query: (id) => ({
        url: `/customers/management/${id}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Customer"],
    }),
  }),
});

export const { useCustomersListQuery, useCustomerDetailQuery} = customerApi;
