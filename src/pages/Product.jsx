import React, { useState } from "react";
import { BsPlusSquare, BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import Layout from "../Layout";
import { useProductsListQuery } from "../services/api/product";

const Product = () => {
  const token = useSelector((state) => state.auth.token);

  const {
    data: { data },
    error,
  } = useProductsListQuery(token);

  const products = data?.data;

  return (
    <Layout>
      {/* top */}
      <div className="flex shadow-md justify-between px-10 items-center h-[7vh]">
        <button>All ({products.length})</button>
        <button className="flex gap-2 bg-[rgb(243,195,0)] text-white justify-center items-center py-2 px-5 rounded-md font-bold">
          ADD NEW
          <BsPlusSquare />
        </button>
      </div>
    </Layout>
  );
};

export default Product;
