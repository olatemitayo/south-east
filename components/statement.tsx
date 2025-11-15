import { Box, Flex, Text } from "@mantine/core";
import React from "react";
import { PiBriefcaseBold, PiNotePencil, PiScrollBold } from "react-icons/pi";

export function Statement() {
  return (
    <Box className="bg-gradient-to-b from-white to-[#fef9f7] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decorative-blob w-64 h-64 bg-[#f9e3e3] top-10 right-20"></div>

      <Flex
        w="100%"
        align="center"
        direction="column"
        maw={1330}
        mx="auto"
        px="clamp(20px,4vw,48px)"
        py="clamp(48px,8vw,96px)"
        gap="clamp(32px,4vw,48px)"
        className="relative z-10"
      >
        <div className="text-center mb-4">
          <Text className="font-bold text-sm tracking-widest uppercase mb-2" c="#b44f21">
            Our Foundation
          </Text>
          <h2 className="font-extrabold text-[clamp(32px,4vw,48px)] text-[#4a4a4a]">
            What We Stand For
          </h2>
        </div>

        <Flex w="100%" justify="space-between" className="cmd:flex-col gap-8">
          {/* Vision Statement Card */}
          <div className="w-[30%] cmd:!w-full">
            <div className="modern-card h-full group relative">
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#b44f21]/10 to-transparent rounded-tl-3xl"></div>
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-gradient-to-br from-[#fbbb9f]/20 to-[#f9e3e3]/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <PiBriefcaseBold size={40} color="#b44f21" />
                </div>
                <Text className="font-bold text-[clamp(22px,2.5vw,28px)] mb-4 gradient-text">
                  Vision Statement
                </Text>
                <Text c="#4a4a4a" className="font-normal leading-relaxed text-[15px]">
                  Ibadan South West Local Government envisions pioneering
                  sustainable solutions, meeting community needs, and generating job
                  opportunities. Our vision is to create a dynamic, resilient
                  locality through transformative initiatives, embracing innovation,
                  and ensuring inclusive growth. Committed to progress, we strive to
                  build a vibrant, forward-thinking community where every resident
                  has the tools and opportunities to thrive, contributing
                  significantly to overall welfare and advancement.
                </Text>
              </div>
            </div>
          </div>

          {/* Mission Statement Card */}
          <div className="w-[30%] cmd:!w-full">
            <div className="modern-card h-full group relative">
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#b44f21]/10 to-transparent rounded-tl-3xl"></div>
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-gradient-to-br from-[#fbbb9f]/20 to-[#f9e3e3]/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <PiNotePencil size={40} color="#b44f21" />
                </div>
                <Text className="font-bold text-[clamp(22px,2.5vw,28px)] mb-4 gradient-text">
                  Mission Statement
                </Text>
                <Text c="#4a4a4a" className="font-normal leading-relaxed text-[15px]">
                  To empower and provide for developmental projects in fundamental
                  amenities, infrastructure, and skills acquisition, among other
                  initiatives. Our mission is rooted in enhancing the quality of
                  life, fostering sustainable growth, and creating opportunities for
                  skill development. Committed to community welfare, we strive for
                  excellence in basic services and infrastructure, ensuring a
                  resilient and thriving local environment. Through strategic
                  initiatives, our mission extends beyond provision, aiming to
                  cultivate a self-sufficient and empowered community that
                  flourishes with continuous growth and prosperity.
                </Text>
              </div>
            </div>
          </div>

          {/* Core Values Card */}
          <div className="w-[30%] cmd:!w-full">
            <div className="modern-card h-full group relative">
              <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#b44f21]/10 to-transparent rounded-tl-3xl"></div>
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-gradient-to-br from-[#fbbb9f]/20 to-[#f9e3e3]/20 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300">
                  <PiScrollBold size={40} color="#b44f21" />
                </div>
                <Text className="font-bold text-[clamp(22px,2.5vw,28px)] mb-4 gradient-text">
                  Core Values
                </Text>
                <Text c="#4a4a4a" className="font-normal leading-relaxed text-[15px]">
                  Empowering Communities, Enabling Progress: Our core values embrace
                  transparency, inclusivity, and accountability. We prioritize
                  community well-being, fostering unity, and delivering essential
                  services with integrity. Through collaboration and innovation, we
                  strive for sustainable development, ensuring every voice is heard,
                  and every individual thrives in a safe, nurturing environment. Our
                  commitment to fairness, equity, and responsible governance defines
                  us, driving positive change and prosperity for all within our
                  local government.
                </Text>
              </div>
            </div>
          </div>
        </Flex>
      </Flex>
    </Box>
  );
}
