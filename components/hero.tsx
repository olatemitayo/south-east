import { Box, Flex } from "@mantine/core";
import React from "react";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="decorative-blob w-96 h-96 bg-[#fbbb9f] top-20 -left-48"></div>
      <div className="decorative-blob w-80 h-80 bg-[#f9e3e3] bottom-10 -right-40"></div>

      <Box px="clamp(20px,4vw,48px)" className="relative z-10">
        <Flex
          w="100%"
          justify="space-between"
          maw={1330}
          mx="auto"
          className="py-[clamp(40px,8vw,80px)] cmd:!flex-col cmd:gap-8"
          align="center"
        >
          <div className="max-w-[60%] cmd:max-w-full fade-in-up">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-[#b44f21] to-[#d66535] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-soft">
                Welcome
              </span>
            </div>
            <h1 className="text-[clamp(32px,5vw,64px)] cmd:w-full font-extrabold text-[#4a4a4a] leading-tight mb-4">
              Ibadan South West{" "}
              <span className="gradient-text">Local Government</span>
            </h1>
            <p className="text-[clamp(16px,2vw,20px)] text-gray-600 max-w-xl leading-relaxed">
              Pioneering sustainable solutions, fostering community development, and building a brighter future together.
            </p>
          </div>

          <main className="w-[38%] cmd:!w-full relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#b44f21]/20 to-[#d66535]/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-elegant transition-all duration-300 group-hover:shadow-2xl">
              <img
                src="/building.jpg"
                alt="Government Building"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4a4a4a]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </main>
        </Flex>
      </Box>
    </div>
  );
}
