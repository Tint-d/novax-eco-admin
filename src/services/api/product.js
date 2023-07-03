import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const productsApi = createApi({
  reducerPath: "product",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://novaxtechno.tech/api/v1/admin",
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    productsList: builder.query({
      query: ({ page, token }) => ({
        url: `/products?page=${page}`,
        method: "GET",
        headers: {
          authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ["Product"],
    }),
    createProduct: builder.mutation({
      query: ({ formData, token }) => ({
        url: "/products/store",
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: formData,
      }),
      invalidatesTags: ["Product"],
    }),
    destoryProduct: builder.mutation({
      query: ({ ids, token }) => ({
        url: "/products/destroy",
        method: "POST",
        headers: {
          authorization: `Bearer ${token}`,
        },
        body: ids,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const { useProductsListQuery, useCreateProductMutation , useDestoryProductMutation } = productsApi;
