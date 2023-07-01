import React from "react";
import { Table } from "@mantine/core";
import { BsThreeDots } from "../../node_modules/react-icons/bs";

const OrderTable = () => {
  const ths = (
    <tr>
      <th>Products</th>
      <th>Order ID</th>
      <th>Date</th>
      <th>Customer name</th>
      <th>Status</th>
      <th>Amount</th>
      <th>Action</th>
    </tr>
  );
  const elements = [
    {
      product: "Fake Dick",
      orderId: 12.011,
      Date: "C",
      customerName: "Carbon",
      status: "Delivered",
      amount: 10,
    },
    {
      product: "Iphone Clone",
      orderId: 14.007,
      Date: "N",
      customerName: "Nitrogen",
      status: "Delivered",
      amount: 10,
    },
    {
      product: "Vibrator",
      orderId: 88.906,
      Date: "Y",
      customerName: "Yttrium",
      status: "Delivered",
      amount: 10,
    },
    {
      product: "BB",
      orderId: 137.33,
      Date: "Ba",
      customerName: "Barium",
      status: "Delivered",
      amount: 10,
    },
    {
      product: "Wire",
      orderId: 140.12,
      Date: "Ce",
      customerName: "Cerium",
      status: "Delivered",
      amount: 10,
    },
  ];
  const rows = elements.map((element) => (
    <tr key={element.orderId}>
      <td>{element.product}</td>
      <td>#{element.orderId}</td>
      <td>{element.Date}</td>
      <td>{element.customerName}</td>
      <td>{element.status}</td>
      <td>{element.amount}</td>
      <td className="flex justify-center items-center">
        <BsThreeDots  className=" cursor-pointer text-lg"/>
      </td>
    </tr>
  ));
  const tableStyles = {
    thead: {
      borderRadius: "0.5rem",
      // Add any other custom styles if needed
    },
  };
  return (
    <div className="bg-white mx-16 my-5 rounded-lg p-5 flex flex-col gap-5">
      <p className="font-bold text-xl">Latest Orders</p>
      <div>
        <Table
          styles={tableStyles}
          highlightOnHover
          horizontalSpacing="sm"
          verticalSpacing="md"
        >
          <thead className="bg-slate-200 rounded-lg font-custom text-2xl select-none">{ths}</thead>
          <tbody className=" font-custom select-none">{rows}</tbody>
        </Table>
      </div>
    </div>
  );
};

export default OrderTable;
