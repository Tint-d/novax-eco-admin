import { Avatar, Box, Button, Flex, Text } from "@mantine/core";
import React from "react";
import { CiLogout } from "react-icons/ci";
import User from "../assets/user.jpg";
import withUser from "../hocs/withUser";

const SidebarFooter = ({ user, logoutHandler }) => {
  return (
    <Flex justify={"center"} py={"md"} gap={"md"} align={"center"}>
      <Avatar src={User} alt="it's me" />
      <Box>
        <Text>{user?.name}</Text>
        <Text size="xs" color="gray">
          {user?.email}
        </Text>
      </Box>
      <Button onClick={logoutHandler} variant="default" size="xs">
        <CiLogout />
      </Button>
    </Flex>
  );
};

export default withUser(SidebarFooter);
