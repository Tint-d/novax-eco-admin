import React from "react";
import {
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Group,
  // Button,
  Flex,
} from "@mantine/core";

import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";
import { useForm } from "@mantine/form";
import { useLoginUserMutation } from "../../services/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../services/feature/authSlice";
import AuthLayout from "./components/AuthLayout";
import InputText from "./components/InputText";
import InputPassword from "./components/InputPassword";

import { IconBrandGoogle } from "@tabler/icons-react";
import Button from "../../components/Button/Button";
import { defaultCheckoutStyle } from "../../components/constants/defaultStyle";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { data, isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  console.log(data);
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "password must be at least 8 characters long" : null,
    },
  });

  return (
    <AuthLayout>
      <Flex align={"center"} justify={"center"} className="w-full h-full">
        <form
          onSubmit={form.onSubmit(async (values) => {
            console.log(values);
            // const res = await loginUser(values);
            // console.log(res);
            // if (res?.data?.token) {
            //   dispatch(
            //     addUser({ user: res?.data?.user, token: res?.data?.token })
            //   );
            //   navigate(paths.home);
            // }
          })}
        >
          <Paper
            withBorder
            p={60}
            mt={30}
            radius="lg"
            sx={{ width: 450 }}
            className="shadow-xl"
          >
            <Title
              align="center"
              sx={{
                fontWeight: 700,
                color: "#2E2A2A",
              }}
              className="sm:text-4xl font-bold text-2xl sm:mt-0 mt-10"
            >
              Welcome back
            </Title>
            <Text
              size="sm"
              align="center"
              mt={5}
              className=" text-[14px] font-medium text-[#645D5D]"
            >
              Welcome back! Please enter your details
            </Text>

            <Text mb="xs" size={"sm"} color="red">
              {data?.missing}
            </Text>

            <InputText
              form={form}
              label={"Email"}
              placeholder={"Enter Your Email"}
            />
            {/* <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              {...form.getInputProps("password")}
              mt="md"
            /> */}
            <InputPassword form={form} />
            <Group position="apart" mt="md">
              <Checkbox
                label="Agree the policy"
                sx={defaultCheckoutStyle}
                // className={{  "text-[#5A5959] font-medium" }}
              />
              <Anchor
                component="button"
                size="sm"
                className="text-[#0946E2]"
                underline={false}
              >
                Forgot password?
              </Anchor>
            </Group>
            <div className=" my-3 flex flex-col gap-3">
              <Button
                type="submit"
                block={1}
              >
                <span className=" text-lg">Sign in</span>
              </Button>
              <Button outlined={true} secondary={true}>
                <span className=" text-lg">Sign in with Google</span>
              </Button>
            </div>
            <Text className="text-sm text-[#4B4949] text-center ">
              Don't have an account? &nbsp;
              <Anchor
                component="button"
                size="sm"
                className="text-[#0946E2]"
                underline={false}
              >
                Register
              </Anchor>
            </Text>
          </Paper>
        </form>
      </Flex>
    </AuthLayout>
  );
};

export default Login;
