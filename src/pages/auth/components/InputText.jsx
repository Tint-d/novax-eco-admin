import { TextInput } from "@mantine/core";
import { useFocusWithin } from "@mantine/hooks";
import React from "react";

const InputText = ({ form, label, placeholder }) => {
  const { ref, focused } = useFocusWithin();
  return (
    <>
      <TextInput
        ref={ref}
        label={label}
        placeholder={placeholder}
        required
        withAsterisk={false}
        sx={{
          ["& .mantine-TextInput-input::placeholder"]: {
            color: "dimmed",
            fontSize: "14px",
            fontWeight: 400,
          },
        }}
        classNames={{
          label: "text-[#2E2A2A] px-5 text-base",
          input:
            "text-[#2E2A2A] px-5 h-[50px] rounded-full bg-[#F1F1F1] border border-[#EEE7E7]",
        }}
        {...form.getInputProps("email")}
        error={false}
      />
       {form.errors.email && (
        <p className="text-red-600 text-xs mt-1 px-5">{form.errors.email}</p>
      )}
    </>
  );
};

export default InputText;
