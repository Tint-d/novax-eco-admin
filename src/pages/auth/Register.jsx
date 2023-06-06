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

const Register = () => {
  const [registerUser, { error, isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();
  console.log("error", isLoading);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
  });
  return (
    <Container size={420} my={40}>
      <form
        onSubmit={form.onSubmit(async (values) => {
          const data = await registerUser(values);
          if (data?.data?.success) {
            navigate(paths.login);
          }
        })}
      >
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Image src={Logo} width={120} mx={"auto"} />
          <Box mb={"md"}>
            <Text align="center" size={"lg"}>
              Register Account!
            </Text>
            <Text color="dimmed" size="sm" align="center" mt={5}>
              Already have an account?
              <Link to={paths.login}>
                <Anchor size="sm" component="button">
                  Sign in
                </Anchor>
              </Link>
            </Text>
          </Box>
          <Text mb="xs" size={"sm"} color="red">
            {error?.data?.message}
          </Text>
          <TextInput
            label="Name"
            placeholder="Min Thiha"
            {...form.getInputProps("name")}
            required
          />
          <TextInput
            type="email"
            label="Email"
            placeholder="minthiha@gmail.com"
            mt="md"
            {...form.getInputProps("email")}
            required
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            {...form.getInputProps("password")}
            required
            mt="md"
          />
          <PasswordInput
            label="Confirm your password"
            placeholder="Confirm"
            {...form.getInputProps("password_confirmation")}
            required
            mt="md"
          />
          <Button type="submit" disabled={isLoading && true} fullWidth mt="xl">
            {isLoading ? <Loader color="white" size={"xs"} /> : "Create"}
          </Button>
        </Paper>
      </form>
    </Container>
  );
};

export default Register;
