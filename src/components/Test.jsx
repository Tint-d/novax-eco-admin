import {
  createStyles,
  Group,
  Paper,
  SimpleGrid,
  Text,
  rem,
  RingProgress,
  Flex,
} from "@mantine/core";
import React from "react";

import { MdOutlineDashboard } from "react-icons/md";

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

const Test = ({ item }) => {
  const { classes } = useStyles();

  return (
    <Paper withBorder p="md" radius="md" w={"300px"}>
      <Group position="apart">
        <Text size="xs" color="dimmed" className={classes.title}>
          {item?.title}
        </Text>
        <item.icon className={classes.icon} size="1.4rem" stroke={1.5} />
      </Group>

      <Group align="flex-end" spacing="xs" mt={25}>
        <Flex align={"center"} justify={"space-between"}>
          <RingProgress
            sections={[{ value: item.value, color: item.color }]}
            label={
              <Text color={item?.color} weight={700} align="center" size="xl">
                {item?.value}%
              </Text>
            }
          />
          <Text className={classes.value}>{item.amount}</Text>
        </Flex>
      </Group>

      <Text fz="xs" c="dimmed" mt={7}>
        Compared to previous month
      </Text>
    </Paper>
  );
};

export default Test;
