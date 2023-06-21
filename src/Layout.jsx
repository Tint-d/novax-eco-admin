import { Box, Flex } from "@mantine/core";
import React from "react";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <Flex className=" font-custom">
      <Sidebar />
      <Box className="bg-gray-100" p={20} style={{ overflow: "scroll", height: "100vh" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
