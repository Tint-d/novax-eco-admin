import { Flex, Image } from "@mantine/core";
import React from "react";
import Auth from "../../../assets/admin.json";
import Lottie from "lottie-react";
import Logo from "../../../assets/logo.jpg";

const AuthLayout = ({ children }) => {
  return (
    <Flex className="h-screen w-full py-10 relative">
      <div className="logo absolute top-0 w-full">
        <Image src={Logo} width={150} />
      </div>
      <div className="min-w-[50%] h-full ">{children}</div>
      <div className="w-[50%] h-full flex justify-center  items-center pr-20">
        <Lottie animationData={Auth} loop={true} />
      </div>
    </Flex>
  );
};

export default AuthLayout;
