import { Flex, Image } from "@mantine/core";
import React from "react";
import Auth from "../../../assets/admin.json";
import Lottie from "lottie-react";
import Logo from "../../../assets/logo.jpg";

const AuthLayout = ({ children }) => {
  return (
    <Flex className="min-h-screen w-screen overflow-x-hidden ">
      <div className="logo fixed -top-4 -right-4 -z-10">
        <div className="img-container w-[120px] overflow-hidden ">
          <Image src={Logo} />
        </div>
      </div>
      <div className="lg:w-[50%]  w-full min-h-screen sm:flex justify-center items-center sm:py-10 px-1 pt-[70px] ">
        {children}
      </div>
      <div className="w-[50%] h-screen lg:flex hidden justify-center items-center pr-20 fixed right-0 top-0">
        <Lottie animationData={Auth} loop={true} />
      </div>
    </Flex>
  );
};

export default AuthLayout;
