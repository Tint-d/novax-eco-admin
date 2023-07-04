import { Modal } from "antd";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useCreateProductMutation } from "../../services/api/product";
import { useEditProductMutation } from "../../services/api/product";

const CreateProduct = ({
  handleCancel,
  isModalVisible,
  editFormData,
  isEdit,
  editProduct,
  handleOk,
}) => {
  const token = useSelector((state) => state.auth.token);
  const [createProduct, { error }] = useCreateProductMutation();

  const initialProductData = {
    title: "",
    description: "",
    price: "",
    category_id: "",
    stock: "",
    product_status: 0,
    product_photos: [],
  };

  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (isModalVisible) {
      if (isEdit && editFormData) {
        setProductData(editFormData);
      } else {
        setProductData(initialProductData);
      }
    }
  }, [isModalVisible, isEdit, editFormData]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]:
        name === "price" || name === "category_id" || name === "stock"
          ? Number(value)
          : value,
    }));
  };

  const handlePhotoChange = (event) => {
    const files = event.target.files;
    setProductData((prevState) => ({
      ...prevState,
      productPhotos: Array.from(files),
    }));
  };

  //For edit product
  const editHandler = async (id, formDataWithoutId, token) => {
    console.log(formDataWithoutId);
    try {
      await editProduct({ id, formData: formDataWithoutId, token });
    } catch (error) {
      console.log("Error editing product", error);
    }
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (productData) {
      if (isEdit) {
        try {
          const { id, ...formDataWithoutId } = productData;
          formDataWithoutId.product_status = 0;
          editHandler(id, formDataWithoutId, token);
          handleOk();
          setProductData(initialProductData);
        } catch (error) {
          console.log("Error editing product", error);
        }
      } else {
        try {
          await createProduct({ formData: productData, token });
          handleCancel();
          setProductData(initialProductData);
        } catch (error) {
          console.log("Error creating product", error);
        }
      }
    }
  };
  return (
    <Modal
      title="Add New Product"
      open={isModalVisible}
      onCancel={handleCancel}
      footer={[
        <div className="flex gap-5 justify-end" key="footer">
          <button
            className="border py-2 px-3 rounded-md font-bold border-red-500 hover:bg-red-500 hover:text-white text-red-500 duration-300 transition"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="py-2 px-3 rounded-md font-bold text-white bg-yellow-500 hover:bg-yellow-400 duration-300 transition"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>,
      ]}
    >
      <form onSubmit={handleSubmit} className="flex flex-col text-md font-bold">
        <div className="flex my-3 justify-between">
          <label htmlFor="title">Title:</label>
          <input
            className="border border-slate-400 rounded-md outline-none py-2 px-2"
            type="text"
            id="title"
            name="title"
            value={productData?.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex my-3 justify-between">
          <label htmlFor="description">Description:</label>
          <textarea
            className="border border-slate-400 rounded-md outline-none py-2 px-2"
            id="description"
            name="description"
            value={productData?.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div className="flex my-3 justify-between">
          <label htmlFor="price">Price:</label>
          <input
            className="border border-slate-400 rounded-md outline-none py-2 px-2"
            type="number"
            id="price"
            name="price"
            step="0.01"
            value={productData?.price}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex my-3 justify-between">
          <label htmlFor="category_id">Category ID:</label>
          <input
            className="border border-slate-400 rounded-md outline-none py-2 px-2"
            type="number"
            id="category_id"
            name="category_id"
            value={productData?.category_id}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex my-3 justify-between">
          <label htmlFor="stock">Stock:</label>
          <input
            className="border border-slate-400 rounded-md outline-none py-2 px-2"
            type="number"
            id="stock"
            name="stock"
            value={productData?.stock}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="flex my-3 justify-between">
          <label htmlFor="product_photo">Product Photos:</label>
          <input
            className="border rounded-md outline-none py-2 px-2"
            type="file"
            id="product_photos"
            name="product_photos"
            multiple
            onChange={handlePhotoChange}
            required
          />
        </div>
      </form>
    </Modal>
  );
};

export default CreateProduct;
