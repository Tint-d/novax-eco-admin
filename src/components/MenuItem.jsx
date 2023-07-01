import { NavLink } from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import { paths } from "../routes/paths";
import { MdOutlineHeadphones, MdOutlineDashboard } from "react-icons/md";
import { AiOutlineDashboard } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";

const mockdata = [
  { label: "Dashboard", icon: AiOutlineDashboard, path: paths.home },
  {
    label: "Product",
    icon: MdOutlineHeadphones,
    initiallyOpened: true,
    links: [
      { label: "Create Product", link: paths.create_product },
      { label: "Product List", link: paths.product_list },
    ],
  },
  {
    label: "Category",
    icon: MdOutlineDashboard,
    initiallyOpened: true,
    links: [
      { label: "Create Category", link: paths.create_category },
      { label: "Category List", link: paths.category_list },
    ],
  },
  { label: "Customer", icon: RxPerson, path: paths.customers },
];

const MenuItem = () => {
  return (
    <>
      {mockdata?.map((item) => (
        <Link
          key={item?.label}
          to={item?.path}
          style={{ textDecoration: "none" }}
        >
          <NavLink
            label={item?.label}
            icon={<item.icon size="1.3rem" stroke={1.5} color="gray" />}
            childrenOffset={28}
          >
            {item?.links?.map((link) => (
              <Link to={link?.link} style={{ textDecoration: "none" }} key={link?.label}>
                <NavLink label={link?.label} />
              </Link>
            ))}
          </NavLink>
        </Link>
      ))}
    </>
  );
};

export default MenuItem;
