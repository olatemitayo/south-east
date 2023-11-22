import { Box, Flex, Popover, Text } from "@mantine/core";
import React from "react";

export function Navbar() {
  return (
    <Box bg="#b44f21">
      <Flex
        justify="space-between"
        align="center"
        w="100%"
        maw={1330}
        mx="auto"
        p={16}
      >
        <img src="/oyo-state-logo.png" alt="LOGO" />
        <Flex gap={32} c="white">
          <Text>Home</Text>
          <Text>News</Text>
          <Text>Gallery</Text>
        </Flex>

        <Popover width={200} position="bottom" shadow="md">
          <Popover.Target>
            <Box bg="#ED6600">
              <Text c="white" p={8}>
                Contact Us
              </Text>
            </Box>
          </Popover.Target>
          <Popover.Dropdown>
            <Text size="sm">
              This is uncontrolled popover, it is opened when button is clicked
            </Text>
          </Popover.Dropdown>
        </Popover>
      </Flex>
    </Box>
  );
}
