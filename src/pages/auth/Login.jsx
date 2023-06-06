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
import { useForm } from "@mantine/form";
import { useLoginUserMutation } from "../../services/api/authApi";
import { useDispatch } from "react-redux";
import { addUser } from "../../services/feature/authSlice";

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
    <Container size={420} my={40}>
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
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Image src={Logo} width={120} mx={"auto"} />
          <Box mb={"md"}>
            <Text align="center" size={"lg"}>
              Login Account!
            </Text>
            <Text color="dimmed" size="sm" align="center" mt={5}>
              Do not have an account yet?
              <Link to={paths.register}>
                <Anchor size="sm" component="button">
                  Create account
                </Anchor>
              </Link>
            </Text>
          </Box>
          <Text mb="xs" size={"sm"} color="red">
            {data?.missing}
          </Text>
          <TextInput
            label="Email"
            placeholder="minthiha@gmail.com"
            required
            {...form.getInputProps("email")}
          />
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
          <Button disabled={isLoading && true} fullWidth mt="xl" type="submit">
            {isLoading ? <Loader color="white" size={"xs"} /> : "Sign In"}
          </Button>
        </Paper>
      </form>
    </Container>
  );
};

export default Login;
