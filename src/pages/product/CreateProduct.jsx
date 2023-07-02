import { Modal } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useCreateProductMutation } from "../../services/api/product";

const CreateProduct = ({ handleOk, handleCancel, isModalVisible }) => {

  const token = useSelector((state) => state.auth.token);
  const [createProduct, { error }] = useCreateProductMutation();

  console.log(error);

  const [productData, setProductData] = useState({
    title: "",
    description: "",
    price: "",
    category_id: "",
    stock: "",
    product_photos: [],
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: name === 'price' || name === 'category_id' || name === 'stock' ? Number(value) : value,
    }));
  };

  const handlePhotoChange = (event) => {
    const files = event.target.files;
    setProductData((prevState) => ({
      ...prevState,
      productPhotos: Array.from(files),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(productData);
    const Fdata = await createProduct({ formData: productData, token });
  };
  return (
    <Modal
      title="Add New Product"
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={productData.title}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={productData.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <br />
        <br />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          step="0.01"
          value={productData.price}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />

        <label htmlFor="category_id">Category ID:</label>
        <input
          type="number"
          id="category_id"
          name="category_id"
          value={productData.category_id}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />

        <label htmlFor="stock">Stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={productData.stock}
          onChange={handleInputChange}
          required
        />
        <br />
        <br />

        <label htmlFor="product_photo">Product Photos:</label>
        <input
          type="file"
          id="product_photos"
          name="product_photos"
          multiple
          onChange={handlePhotoChange}
          required
        />
        <br />
        <br />

        <button type="submit" >SUBMIT</button>
      </form>
    </Modal>
  );
};

export default CreateProduct;
