import { Box, Flex, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";

export function Hero() {
  return (
    <div className="">
      <Box px="clamp(20px,4vw,48px)">
        <Flex
          w="100%"
          justify="space-between"
          maw={1330}
          mx="auto"
          className="py-[clamp(20px,2vw,32px)] cmd:!flex-col"
          align="center"
        >
          <h1 className="text-[clamp(32px,4vw,60px)] max-w-['60%'] cmd:w-full font-bold text-[#4a4a4a]">
            Welcome to Ibadan South West Local government
          </h1>
          <main className="border border-[#f8e7df] w-['35%'] cmd:!w-full min-h-max ">
            <img src="/building.jpg" alt="" className="w-full" />
          </main>
        </Flex>
      </Box>
    </div>
  );
}
