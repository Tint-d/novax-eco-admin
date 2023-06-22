import { TextInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import React from "react";

const InputText = ({ form, placeholder }) => {
  const { ref, focused } = useFocusWithin();
  return (
    <>
      <TextInput
        ref={ref}
        label="Email"
        placeholder={placeholder ? placeholder : "Email Address"}
        required
        withAsterisk={false}
        sx={{
          input: {
            color: "gray",
            height: "50px",
            borderRadius: "25px",
            paddingInline: "20px",
            backgroundColor: "#F1F1F1",
          },
          ["& .mantine-TextInput-input::placeholder"]: {
            color: "red",
            fontSize: "14px",
          },
        }}
        labelProps={{
          style: {
            color: "#2E2A2A",
            paddingInline: "20px",
            fontSize: "18px",
            fontFamily: "Josefin Sans, sans-serif",
            marginBottom: "10px",
          },
        }}
        {...form.getInputProps("email")}
        // error={false}
      />
    </>
  );
};

export default InputText;
