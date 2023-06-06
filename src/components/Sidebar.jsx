import {
  Box,
  Divider,
  Group,
  Image,
  NavLink,
  Navbar,
  ScrollArea,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
import React from "react";
import Logo from "../assets/logo.svg";
import SidebarFooter from "./SidebarFooter";
import MenuItem from "./MenuItem";
import withUser from "../hocs/withUser";
import { Link } from "react-router-dom";
import { paths } from "../routes/paths";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.white,
    paddingBottom: 0,
  },

  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  links: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
  },

  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },

  footer: {
    marginLeft: `calc(${theme.spacing.md} * -1)`,
    marginRight: `calc(${theme.spacing.md} * -1)`,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const Sidebar = ({ user }) => {
  const { classes } = useStyles();

  return (
    <Navbar
      height={"100vh"}
      p="xs"
      width={{ base: 300 }}
      className={classes.navbar}
    >
      <Navbar.Section>
        <Group position="apart">
          <Link to={paths.home}>
            <Image src={Logo} width={50} />
          </Link>
          <Text size={"lg"}>{user?.name}</Text>
        </Group>
      </Navbar.Section>
      <Divider mt={"md"} />
      <Navbar.Section grow mt="md" component={ScrollArea}>
        <Box w={"100%"}>
          <MenuItem />
          {/* <Link to={paths.home} style={{ textDecoration: "none" }}>
            <NavLink
              label="Dashboard"
              icon={
                <AiOutlineDashboard size="1.3rem" stroke={1.5} color="gray" />
              }
            />
          </Link>

          <NavLink
            label="Product"
            icon={
              <MdOutlineHeadphones size="1.3rem" stroke={1.5} color="gray" />
            }
            childrenOffset={28}
            defaultOpened
          >
            <Link to={paths.create_product} style={{ textDecoration: "none" }}>
              <NavLink label="Create" />
            </Link>
            <Link to={paths.product_list} style={{ textDecoration: "none" }}>
              <NavLink label="Product List" />
            </Link>
          </NavLink> */}
        </Box>
      </Navbar.Section>
      <Divider />
      <Navbar.Section>
        <SidebarFooter />
      </Navbar.Section>
    </Navbar>
  );
};

export default withUser(Sidebar);
