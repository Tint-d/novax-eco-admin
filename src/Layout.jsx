import { Box, Flex } from "@mantine/core";
import React from "react";
import Sidebar from "./components/Sidebar";

const Layout = ({ children }) => {
  return (
    <Flex>
      <Sidebar />
      <Box p={20} style={{ overflow: "scroll", height: "100vh" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default Layout;
