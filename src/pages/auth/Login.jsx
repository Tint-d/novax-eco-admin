import React from "react";
import {
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Group,
  Button,
  Flex,
} from "@mantine/core";

import { useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";
import { useForm } from "@mantine/form";
import { useLoginUserMutation } from "../../services/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../services/feature/authSlice";
import AuthLayout from "./components/AuthLayout";
import InputText from "./components/InputText";
import InputPassword from "./components/InputPassword";

import { IconBrandGoogle } from "@tabler/icons-react";

import toast, { Toaster } from "react-hot-toast";


const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { data, isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  const form = useForm({
    initialValues: {
      email: "gex@gmail.com",
      password: "wex12345678",
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "password must be at least 8 characters long" : null,
    },
  });
  const onSubmitHandler = async (values) => {
    const { data } = await loginUser(values);

    if (data?.token) {
      dispatch(addUser({ user: data?.user, token: data?.token }));
      navigate(paths.home);
    } else if (data?.missing) {
      toast.error(data?.missing);
    }
  };

  return (
    <AuthLayout>

      <Toaster position="bottom-center" />

      <form onSubmit={form.onSubmit((values) => onSubmitHandler(values))}>
        <Paper
          withBorder
          radius="md"
          className="shadow-2xl sm:p-[60px] p-[30px] mt-[30px] sm:w-[450px] min-w-full h-auto m-0"
        >
          <Title
            align="center"
            sx={{
              fontFamily: "Gilda Display,serif",
              fontWeight: 700,
              color: "#2E2A2A",
            }}
            className="sm:text-4xl font-bold text-2xl sm:mt-0 mt-10 font-josefin"
          >
            Welcome back
          </Title>
          <Text
            size="sm"
            align="center"
            mt={5}
            className="font-josefin text-[14px] font-medium text-[#645D5D]"
          >
            Welcome back! Please enter your details
          </Text>

          <InputText
            form={form}
            label={"Email"}
            placeholder={"Enter Your Email"}
            value={"email"}
          />

          <InputPassword form={form} />
          <Group position="apart" mt="md">
            <Checkbox
              required

              label="Agree the policy"
              sx={{
                ["& .mantine-Checkbox-input:checked"]: {
                  backgroundColor: "#FFE500",
                  borderColor: "#FFE500",
                },
              }}
              classNames={{ label: "text-[#5A5959] font-medium" }}
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
          <button
            type="submit"
            className=" h-[50px] bg-[#FFD93D] border border-[#FFE500] text-white font-medium text-lg w-full rounded-xl mt-3"
          >
            Sign In
          </button>
          <Button
            leftIcon={<IconBrandGoogle />}
            classNames={{
              root: "bg-white border border-[#242424] h-[50px] my-3 rounded-xl hover:border-[#FFD93D] hover:bg-white ",
              inner: "text-[#131212] hover:text-[#FFD93D] text-lg font-medium",
            }}
            fullWidth
          >
            Sign in with Google
          </Button>
          <Text className="text-sm text-[#4B4949] text-center">
            Don't have an account? &nbsp;
            <Anchor
              href={paths.register}
              size="sm"
              className="text-[#0946E2]"
              underline={false}
            >
              Sign Up
            </Anchor>
          </Text>
        </Paper>
      </form>

    </AuthLayout>
  );
};

export default Login;
