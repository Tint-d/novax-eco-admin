import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const productsApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://novaxtechno.tech/api/v1/admin",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    productsList: builder.query({
      query: (token) => ({
        url: "/products",
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Product"],
    }),
  }),
});

export const { useProductsListQuery } = productsApi;
