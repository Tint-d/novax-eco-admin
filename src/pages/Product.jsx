import React from 'react'
import Layout from "../Layout";
import { useProductsListQuery } from '../services/api/product';

const Product = () => {
  const token = JSON.parse(localStorage.getItem('userInfo'));
  console.log(token)
  const { data,error } = useProductsListQuery(token)
  console.log(data,error);
  return (
    <Layout>

    </Layout>
    )
}

export default Product