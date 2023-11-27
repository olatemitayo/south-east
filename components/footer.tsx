import { Flex, Text, Title } from "@mantine/core";
import Link from "next/link";
import React from "react";
import {
  PiAddressBook,
  PiAlarm,
  PiAlarmLight,
  PiEnvelope,
  PiEnvelopeLight,
  PiFacebookLogo,
  PiInstagramLogo,
  PiMapPin,
  PiTwitterLogo,
} from "react-icons/pi";

export function Footer() {
  return (
    <Flex
      className="bg-[#f9e3e3]"
      p="clamp(20px,4vw,48px)"
      //   py="clamp(px,2vw,32px)"
    >
      <Flex
        justify="space-between"
        className="cmd:flex-col cmd:w-full cmd:text-center cmd:items-center cmd:justify-center cmd:gap-10"
        w="100%"
        maw={1330}
        mx="auto"
      >
        <Flex direction="column" gap={16}>
          <a href="mailto:ibadansouthwest01@gmail.com">
            <Flex gap={8} w={300} align="center" className="cmd:w-full">
              <PiEnvelopeLight size={32} color="#b44f21" />
              <Text className="">ibadansouthwest01@gmail.com</Text>
            </Flex>
          </a>
          <Flex gap={4} w={300} align="center" className="cmd:w-full">
            <PiAlarmLight size={32} color="#b44f21" />
            <Text>Opening Hours: Mon - Fri: 8:00am - 4 :00pm</Text>
          </Flex>
          <Flex gap={4} w={300} className="cmd:w-full">
            <PiMapPin size={32} color="#b44f21" />
            <Text className="italic">
              Oluyole Estate, Ring Road area, Ibadan, Oyo State.
            </Text>
          </Flex>
        </Flex>
        <Flex direction="column" gap={16}>
          <Text className="text-[18px] font-semibold" c="#b44f21">
            Links
          </Text>
          <Link href="/about">
            <Text className="">About</Text>
          </Link>

          <Link href="/gallery">
            <Text className="">Gallery</Text>
          </Link>
        </Flex>
        <Flex direction="column" gap={16} align="center">
          <Flex gap={16}>
            <Link href={"www.instagram.com"}>
              <PiInstagramLogo size={32} color="#b44f21" />
            </Link>
            <Link href="www.facebook.com">
              <PiFacebookLogo size={32} color="#b44f21" />
            </Link>
            <Link href={"www.twitter.com"}>
              <PiTwitterLogo size={32} color="#b44f21" />
            </Link>
          </Flex>

          <img
            src="/oyo-state-logo.png"
            alt=""
            className="w-[clamp(150px,12vw,200px)]"
          />

          <Text maw={300}>
            Copyright © 2023 Oyo State Government, All Rights Reserved.
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
