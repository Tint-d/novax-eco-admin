import { PasswordInput, Tooltip } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import React, { useState } from "react";

const InputPassword = ({ confirmation, form, label, placeholder }) => {
  const { ref, focused } = useFocusWithin();
  const [opened, setOpened] = useState(false);
  const [value, setValue] = useState("");
  const valid = value.trim().length >= 8;
  return (
    <>
      <Tooltip
        label={
          valid ? "All good!" : "Password must include at least 8 characters"
        }
        position="bottom-start"
        withArrow
        opened={opened}
        color={valid ? "green" : undefined}
      >
        <PasswordInput
          ref={ref}
          label={confirmation ? " Confirm Password *" : "Password *"}
          placeholder={placeholder ? placeholder : "Password"}
          required
          mt="sm"
          withAsterisk={false}
          variant="unstyled"
          sx={{
            ["& .mantine-TextInput-input::placeholder"]: {
              color: "dimmed",
              fontSize: "14px",
              paddingBottom: 0,
              fontWeight: 400,
            },
            // ["& .mantine-PasswordInput-visibilityToggle:hover:focus"]:{
            //     backgroundColor:"transparent"
            // }
          }}
          classNames={{
            label: "text-[#2E2A2A] px-5 text-base",
            innerInput: " flex justify-center items-center",
            rightSection: "pr-3",
            wrapper:
              "text-[#2E2A2A] pl-3 h-[50px] rounded-full bg-[#F1F1F1] border border-[#EEE7E7] flex justify-center items-center ",
            visibilityToggle: "hover:bg-transparent",
          }}
          className="custom-password-input"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            form.setFieldValue(
              confirmation ? "password_confirmation" : "password",
              event.currentTarget.value
            );
          }}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
        //   {...form.getInputProps("password")}
        error={false}
        />
      </Tooltip>
      {confirmation
        ? form.errors.password_confirmation && (
            <p className="text-red-600 text-xs mt-1 px-5">
              {form.errors.password_confirmation}
            </p>
          )
        : form.errors.password && (
            <p className="text-red-600 text-xs mt-1 px-5">{form.errors.password}</p>
          )}
    </>
  );
};

export default InputPassword;
