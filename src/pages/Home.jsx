import React from "react";
import Layout from "../Layout";
import Test from "../Home/PieChart";
import { MdOutlineDashboard } from "react-icons/md";
import { useSelector } from "react-redux";
import BarChart from "../Home/BarChart";
import OrderTable from "../Home/OrderTable";

const Home = () => {
  const dd = useSelector((state) => console.log(state));
  const data = [
    {
      title: "Todays Sales",
      icon: MdOutlineDashboard,
      value: 10,
      color: "yellow",
      amount: '$20.6K',
      text:'We have 321 items',

    },
    {
      title: "Todays Revenue",
      icon: MdOutlineDashboard,
      value: 60,
      color: "green",
      amount: '$20.6K',
      text:'We have 321 items',

    },
    {
      title: "In Escrow",
      icon: MdOutlineDashboard,
      value: 90,
      color: "purple",
      amount: '$20.6K',
      text:'Avaiable to payout',

    },
  ];
  return (
    <Layout>
      <div className="  flex justify-around">
        {data?.map((item) => (
          <Test key={item.title} item={item} />
        ))}
      </div>
      <BarChart/>
      <OrderTable/>
    </Layout>
  );
};

export default Home;
