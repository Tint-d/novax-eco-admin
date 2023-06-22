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
  Flex,
} from "@mantine/core";
import Logo from "../../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../routes/paths";
import { useForm } from "@mantine/form";
import { useLoginUserMutation } from "../../services/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../services/feature/authSlice";
import AuthLayout from "./components/AuthLayout";
import InputText from "./components/InputText";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, { data, isLoading }] = useLoginUserMutation();
  const dispatch = useDispatch();
  console.log(data);
  const form = useForm({
    initialValues: {
      email: "minthiha12@gmail.com",
      password: "mth12345",
    },
  });
  return (
    <AuthLayout>
      <Flex
        align={"center"}
        justify={"center"}
        className="relative w-full h-full"
      >
        <form
          onSubmit={form.onSubmit(async (values) => {
            const res = await loginUser(values);
            if (res?.data?.token) {
              dispatch(
                addUser({ user: res?.data?.user, token: res?.data?.token })
              );
              navigate(paths.home);
            }
          })}
        >
          <Paper
            withBorder
            shadow="md"
            p={30}
            mt={30}
            radius="md"
            sx={{ width: 420 }}
          >
            <Title
              align="center"
              sx={{
                fontFamily: "Gilda Display,serif",
                fontWeight: 900,
                color: "#2E2A2A",
              }}
              className="sm:text-4xl font-bold text-2xl sm:mt-0 mt-10 font-josefin"
            >
              Welcome back!
            </Title>
            <Text
              size="sm"
              align="center"
              mt={5}
              c={"dimmed"}
              className="font-josefin text-[14px] font-medium"
            >
              Login with social media or your credentials
            </Text>

            <Text mb="xs" size={"sm"} color="red">
              {data?.missing}
            </Text>
            <InputText form={form} />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              required
              {...form.getInputProps("password")}
              mt="md"
            />
            <Group position="apart" mt="lg">
              <Checkbox label="Remember me" />
              <Anchor component="button" size="sm">
                Forgot password?
              </Anchor>
            </Group>
            <Button
              disabled={isLoading && true}
              fullWidth
              mt="xl"
              type="submit"
            >
              {isLoading ? <Loader color="white" size={"xs"} /> : "Sign In"}
            </Button>
          </Paper>
        </form>
      </Flex>
    </AuthLayout>
  );
};

export default Login;
