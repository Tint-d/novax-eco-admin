import React, { useState } from "react";
import { BsPlusSquare, BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Table, Button, Dropdown, Menu, Pagination, Modal } from "antd";
import Layout from "../Layout";
import {
  useDestoryProductMutation,
  useEditProductMutation,
  useProductsListQuery,
} from "../services/api/product";
import CreateProduct from "./product/CreateProduct";

const Product = () => {
  const token = useSelector((state) => state.auth.token);

  const [page, setPage] = useState(1);
  const { data } = useProductsListQuery({ page, token });

  // For product destroy
  const [destroyProducts] = useDestoryProductMutation();
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const deleteHandler = async (id) => {
    try {
      const selectedIds = selectedRowKeys.map(
        (key) => products.find((product) => product.key === key)?.id
      );
      if (id) {
        selectedIds.push(id);
      }
      await destroyProducts({ ids: selectedIds, token });
      setSelectedRowKeys([]);
    } catch (error) {
      console.log("Error deleting products", error);
    }
  };

  // For product edit
  const [editFormData, setEditFormData] = useState(null);

  const [editProduct] = useEditProductMutation();
  // console.log(error);

  // For Pagination
  const pagination = data?.meta;

  // For Products
  const products = data?.data?.data.map((product) => ({
    ...product,
    key: product.id,
  }));

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      sorter: (a, b) => a.category.localeCompare(b.category),
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
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Dropdown
          overlay={
            <Menu className="flex flex-col gap-2">
              <button
                type="link"
                className="text-yellow-500 py-3 px-6 hover:text-white hover:bg-yellow-500 transition duration-300 w-full h-full font-bold rounded-md"
                onClick={() => showModal(record)}
              >
                Edit
              </button>
              <button
                className="text-red-500 py-3 px-6 hover:text-white hover:bg-red-500 transition duration-300 w-full h-full font-bold rounded-md"
                danger
                onClick={() => deleteHandler(record.id)}
              >
                DELETE
              </button>
            </Menu>
          }
        >
          <BsThreeDots />
        </Dropdown>
      ),
    },
  ];

  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = (formData = null) => {
    setEditFormData(formData);
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    setEditFormData(null);
  };

  return (
    <Layout>
      {/* top */}
      <div className="flex shadow-md justify-between px-10 items-center h-[7vh]">
        <button className="font-bold">All ({pagination?.total})</button>
        <div className="flex gap-5">
          <button
            onClick={() => deleteHandler()}
            className={`flex gap-2 bg-red-500 text-white ${selectedRowKeys?.length == 0 ?'opacity-0':'opacity-100'} transition duration-300 justify-center items-center py-2 px-5 rounded-md font-bold`}
          >
            DELETE
          </button>
          <button
            className="flex gap-2 bg-[rgb(243,195,0)] text-white justify-center items-center py-2 px-5 rounded-md font-bold"
            onClick={() => showModal()}
          >
            ADD NEW
            <BsPlusSquare />
          </button>
        </div>
      </div>
      {/* bottom */}
      <div className="px-5 my-5 flex flex-col items-center gap-10">
        <Table
          className="w-[100%]"
          dataSource={products}
          columns={columns}
          pagination={false}
          rowSelection={{
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              setSelectedRowKeys(selectedRowKeys);
              const selectedIds = selectedRows.map((row) => row.id);
              console.log(selectedRowKeys, selectedRows);
              console.log(selectedIds);
            },
          }}
          onChange={(pagination, filters, sorter) => {
            // setFilters(filters); // Assuming you have defined this state elsewhere
          }}
        />
        <Pagination
          current={page}
          total={pagination?.total}
          showTotal={(total, range) =>
            `Showing ${range[1]} of ${total} entries`
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
        editFormData={editFormData}
        isEdit={Boolean(editFormData)}
        editProduct={editProduct} // Pass the editProduct mutation function
      />
    </Layout>
  );
};

export default Product;
