import React from "react";
import Logo from "../assets/logo.svg";
import { Flex, Image, Text } from "@mantine/core";

const Fallback = () => {
  return (
    <Flex justify={"center"} direction={"column"} gap="" align={"center"} h={"100vh"}>
      <Image src={Logo} width={60} />
    </Flex>
  );
};

export default Fallback;
