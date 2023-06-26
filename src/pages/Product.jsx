import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout";
import { useProductsListQuery } from "../services/api/product";

const Product = () => {
  const token = useSelector((state) => state.auth.token);
  console.log(token);

  const { data : {data}, error } = useProductsListQuery(token);
  // console.log(data, error);

  const products = data?.data
  console.log(products)
  return <Layout>
    <th>{products.map((el)=>{
      return(
        <li>{el.title}</li>
      )
    })}</th>
  </Layout>;
};

export default Product;
