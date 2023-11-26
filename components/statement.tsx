import { Box, Flex, Text } from "@mantine/core";
import { motion } from "framer-motion";
import React from "react";
import { PiBriefcaseBold, PiNotePencil, PiScrollBold } from "react-icons/pi";

export function Statement() {
  return (
    <Box className="">
      <Flex
        w="100%"
        align="center"
        direction="column"
        maw={1330}
        mx="auto"
        px="clamp(20px,4vw,48px)"
        py="clamp(16px,3vw,48px)"
        gap="clamp(16px,2vw,32px)"
      >
        <Text className="font-extrabold" c="#4a4a4a">
          What we stand for
        </Text>
        <Flex w="100%" justify="space-between" className="cmd:flex-col gap-8">
          <Flex direction="column" w="30%" gap={8} className="cmd:!w-full">
            <PiBriefcaseBold size={50} color="#fbbb9f" />
            <Text c="#b44f21" className="font-bold text-[24px]">
              Vision Statement
            </Text>
            <Text c="#4a4a4a">
              Ibadan South West Local Government envisions pioneering
              sustainable solutions, meeting community needs, and generating job
              opportunities. Our vision is to create a dynamic, resilient
              locality through transformative initiatives, embracing innovation,
              and ensuring inclusive growth. Committed to progress, we strive to
              build a vibrant, forward-thinking community where every resident
              has the tools and opportunities to thrive, contributing
              significantly to overall welfare and advancement.
            </Text>
          </Flex>

          <Flex direction="column" w="30%" gap={8} className="cmd:!w-full">
            <PiNotePencil size={50} color="#fbbb9f" />
            <Text c="#b44f21" className="font-bold text-[24px]">
              Mission statement
            </Text>
            <Text c="#4a4a4a">
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
          </Flex>
          <Flex direction="column" w="30%" gap={8} className="cmd:!w-full">
            <PiScrollBold size={50} color="#fbbb9f" />
            <Text c="#b44f21" className="font-bold text-[24px]">
              Core Values
            </Text>
            <Text c="#4a4a4a">
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
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
