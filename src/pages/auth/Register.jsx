import React from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Image,
  Box,
  Loader,
} from "@mantine/core";
import Logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";
import { useRegisterUserMutation } from "../../services/api/authApi";
import { useForm } from "@mantine/form";
import AuthLayout from "./components/AuthLayout";
import InputText from "./components/InputText";
import InputPassword from "./components/InputPassword";
import { IconBrandGoogle } from "@tabler/icons-react";

import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [registerUser, { error, isLoading }] = useRegisterUserMutation();
  console.log(registerUser);
  const navigate = useNavigate();
  console.log("error", isLoading);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validate: {
      name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Your password must be at least 8 characters" : null,
      password_confirmation: (value, values) =>
        value !== values.password ? "Passwords did not match" : null,
    },
  });

  const onSubmitHandler = async (values) => {
    const { data, error } = await registerUser(values);
    console.log(data, error);

    if (data?.success) {
      toast.success(data?.message);
      setTimeout(() => {
        navigate(paths.login);
      }, 2000);
    } else if (error) {
      toast.error(error?.data?.message);
    }
  };

  return (
    <AuthLayout>
      <Toaster position="bottom-center" />
      <Container size={420} my={40}>
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
              Welcome to Nova X
            </Title>
            <Text
              size="sm"
              align="center"
              mt={5}
              className="font-josefin text-[14px] font-medium text-[#645D5D]"
            >
              Let's start by creating you account
            </Text>
            {/* <Text mb="xs" size={"sm"} color="red">
              {error?.data?.message}
            </Text> */}
            <InputText
              form={form}
              label={"Name"}
              placeholder={"John Doe"}
              value={"name"}
            />
            <InputText
              form={form}
              label={"Email"}
              placeholder={"eg. example@gmail.com"}
              value={"email"}
            />
            <InputPassword form={form} placeholder={"••••••••"} />
            <InputPassword form={form} confirmation placeholder={"••••••••"} />
            <Group mt="md" className="gap-0">
              <Checkbox
                required
                label="I agree the &nbsp;"
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
                Terms of Service
              </Anchor>
            </Group>
            <button
              type="submit"
              className=" h-[50px] bg-[#FFD93D] border border-[#FFE500] text-white font-medium text-lg w-full rounded-xl mt-3"
            >
              Sign Up
            </button>
            <Button
              leftIcon={<IconBrandGoogle />}
              classNames={{
                root: "bg-white border border-[#242424] h-[50px] my-3 rounded-xl hover:border-[#FFD93D] hover:bg-white ",
                inner:
                  "text-[#131212] hover:text-[#FFD93D] text-lg font-medium",
              }}
              fullWidth
            >
              Sign in with Google
            </Button>
            <Text className="text-sm text-[#4B4949] text-center">
              Already have an account? &nbsp;
              <Anchor
                href={paths.login}
                size="sm"
                className="text-[#0946E2]"
                underline={false}
              >
                Sign In
              </Anchor>
            </Text>
          </Paper>
        </form>
      </Container>
    </AuthLayout>
  );
};

export default Register;
