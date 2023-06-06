import React from "react";
import Layout from "../Layout";
import Test from "../components/Test";
import { MdOutlineDashboard } from "react-icons/md";
import { Flex } from "@mantine/core";
import { useSelector } from "react-redux";

const Home = () => {
  const dd = useSelector((state) => console.log(state));
  const data = [
    {
      title: "Title One",
      icon: MdOutlineDashboard,
      value: 10,
      color: "yellow",
      amount: 250,
    },
    {
      title: "Title Two",
      icon: MdOutlineDashboard,
      value: 60,
      color: "red",
      amount: 1000,
    },
    {
      title: "Title Three",
      icon: MdOutlineDashboard,
      value: 90,
      color: "cyan",
      amount: 1250,
    },
  ];
  return (
    <Layout>
      <Flex wrap={"wrap"} gap="md">
        {data?.map((item) => (
          <Test key={item.title} item={item} />
        ))}
      </Flex>
    </Layout>
  );
};

export default Home;
