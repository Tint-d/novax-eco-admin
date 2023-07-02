import React, { useState } from "react";
import { BsPlusSquare, BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Table, Input, Space, Pagination, Modal } from "antd";
import Layout from "../Layout";
import { useProductsListQuery } from "../services/api/product";
import CreateProduct from "./product/CreateProduct";

const Product = () => {
  const token = useSelector((state) => state.auth.token);

  const [page,setPage] = useState(1)

  const { data, error } = useProductsListQuery({page, token});
  console.log(data);
  //For Pagination
  const pagination = data?.meta;
  console.log(pagination);
  //For Products
  const products = data?.data?.data.map((product, index) => ({
    ...product,
    key: index,
  }));
  // State for column filters
  const [filters, setFilters] = useState({});
  const handleFilterChange = (column, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [column]: value,
    }));
  };

  // Columns for the table
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
      filters: [
        { text: "Product 1", value: "Product 1" },
        { text: "Product 2", value: "Product 2" },
        // Add more filters as needed
      ],
      filteredValue: filters.title || null,
      onFilter: (value, record) => record.title.includes(value),
      onFilterDropdownOpenChange: () => {},
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => a.category.localeCompare(b.category),
      filters: [
        { text: "Category 1", value: "Category 1" },
        { text: "Category 2", value: "Category 2" },
        // Add more filters as needed
      ],
      filteredValue: filters.category || null,
      onFilter: (value, record) => record.category.includes(value),
      onFilterDropdownChange: () => {},
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      sorter: (a, b) => a.stock - b.stock,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <BsThreeDots />
        </Space>
      ),
    },
  ];

  // State for modal visibility
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    // Handle OK button click
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    // Handle Cancel button click
    setIsModalVisible(false);
  };

  //Product create with modal

  return (
    <Layout>
      {/* top */}
      <div className="flex shadow-md justify-between px-10 items-center h-[7vh]">
        <button>All ()</button>
        <button
          className="flex gap-2 bg-[rgb(243,195,0)] text-white justify-center items-center py-2 px-5 rounded-md font-bold"
          onClick={showModal}
        >
          ADD NEW
          <BsPlusSquare />
        </button>
      </div>
      {/* bottom */}
      <div className="px-5 my-5 flex flex-col items-center gap-10">
        <Table
          className="w-[100%]"
          dataSource={products}
          columns={columns}
          pagination={false}
          onChange={(pagination, filters, sorter) => {
            setFilters(filters);
          }}
        />
        <Pagination
          current={page}
          total={pagination?.total}
          showTotal={(total, range) =>
            `Showing ${range[1]} of ${total} entires`
          }
          hideOnSinglePage
          onChange={(page) => {
            setPage(page);
          }}
        />
      </div>

      <CreateProduct
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        showModal={showModal}
      />
    </Layout>
  );
};

export default Product;
