import { createStyles, Text, rem, RingProgress, Flex } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },

  value: {
    fontSize: rem(24),
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

const PieChart = ({ item }) => {
  const { classes } = useStyles();

  return (
    <div className="flex w-3/12 justify-around bg-white my-5 rounded-lg px-5">
      <div className="flex w-8/12 flex-col justify-around py-3">
        <Text className=" font-semibold text-gray-700">{item?.title}</Text>
        <Text className="font-bold text-2xl">{item?.amount}</Text>
        <Text className=" text-gray-600">{item?.text}</Text>
      </div>

      <Flex
        className=" w-4/12"
        direction={"column"}
        align={"flex-end"}
        spacing="xs"
      >
        <RingProgress
          thickness={20}
          sections={[{ value: item.value, color: item.color }]}
        />
      </Flex>
    </div>
  );
};

export default PieChart;
