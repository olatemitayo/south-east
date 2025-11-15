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
    <div className="relative overflow-hidden">
      {/* Decorative background gradient */}
      <div className="absolute inset-0 gradient-bg-primary"></div>
      <div className="decorative-blob w-96 h-96 bg-[#fbbb9f] -bottom-48 -right-48"></div>

      <Flex
        className="relative z-10"
        p="clamp(32px,6vw,64px)"
      >
        <Flex
          justify="space-between"
          className="cmd:flex-col cmd:w-full cmd:text-center cmd:items-center cmd:justify-center cmd:gap-12"
          w="100%"
          maw={1330}
          mx="auto"
          gap={40}
        >
          {/* Contact Information */}
          <Flex direction="column" gap={20} className="flex-1">
            <Text className="font-bold text-[20px] mb-2 gradient-text">
              Contact Information
            </Text>
            <Flex direction="column" gap={16}>
              <a
                href="mailto:ibadansouthwestlg01@gmail.com"
                className="transition-smooth hover:translate-x-2"
              >
                <Flex gap={12} align="center" className="cmd:justify-center group">
                  <div className="p-3 bg-white rounded-xl shadow-soft group-hover:shadow-elegant transition-all group-hover:scale-110">
                    <PiEnvelopeLight size={24} color="#b44f21" />
                  </div>
                  <Text className="text-[#4a4a4a] font-medium max-w-[280px]">
                    ibadansouthwestlg01@gmail.com
                  </Text>
                </Flex>
              </a>

              <div className="transition-smooth">
                <Flex gap={12} align="center" className="cmd:justify-center group">
                  <div className="p-3 bg-white rounded-xl shadow-soft">
                    <PiAlarmLight size={24} color="#b44f21" />
                  </div>
                  <Flex direction="column">
                    <Text className="text-[#4a4a4a] font-semibold text-sm">
                      Opening Hours
                    </Text>
                    <Text className="text-[#4a4a4a] font-medium">
                      Mon - Fri: 08:00 - 16:00
                    </Text>
                  </Flex>
                </Flex>
              </div>

              <div className="transition-smooth">
                <Flex gap={12} align="start" className="cmd:justify-center group">
                  <div className="p-3 bg-white rounded-xl shadow-soft flex-shrink-0">
                    <PiMapPin size={24} color="#b44f21" />
                  </div>
                  <Text className="italic text-[#4a4a4a] font-medium max-w-[280px]">
                    Oluyole Estate, Ring Road area, Ibadan, Oyo State.
                  </Text>
                </Flex>
              </div>
            </Flex>
          </Flex>

          {/* Quick Links */}
          <Flex direction="column" gap={20} className="flex-1 cmd:items-center">
            <Text className="font-bold text-[20px] mb-2 gradient-text">
              Quick Links
            </Text>
            <Flex direction="column" gap={12}>
              <Link href="/about" className="transition-smooth hover:translate-x-2 w-fit">
                <Text className="text-[#4a4a4a] font-medium hover:text-[#b44f21] text-lg">
                  → About Us
                </Text>
              </Link>
              <Link href="/gallery" className="transition-smooth hover:translate-x-2 w-fit">
                <Text className="text-[#4a4a4a] font-medium hover:text-[#b44f21] text-lg">
                  → Gallery
                </Text>
              </Link>
            </Flex>
          </Flex>

          {/* Social & Logo */}
          <Flex direction="column" gap={20} align="center" className="flex-1">
            <img
              src="/oyo-state-logo.png"
              alt="Oyo State Logo"
              className="w-[clamp(160px,14vw,220px)] transition-transform hover:scale-105 duration-300"
            />

            <Flex direction="column" gap={16} align="center">
              <Text className="font-bold text-[16px] text-[#b44f21]">
                Follow Us
              </Text>
              <Flex gap={16}>
                <Link
                  href="#"
                  className="p-3 bg-white rounded-full shadow-soft hover:shadow-elegant transition-all hover:scale-110 hover:-translate-y-1"
                >
                  <PiInstagramLogo size={28} color="#b44f21" />
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-white rounded-full shadow-soft hover:shadow-elegant transition-all hover:scale-110 hover:-translate-y-1"
                >
                  <PiFacebookLogo size={28} color="#b44f21" />
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-white rounded-full shadow-soft hover:shadow-elegant transition-all hover:scale-110 hover:-translate-y-1"
                >
                  <PiTwitterLogo size={28} color="#b44f21" />
                </Link>
              </Flex>
            </Flex>

            <Text maw={320} className="text-center text-[#4a4a4a] text-sm mt-4">
              Copyright © 2023 Oyo State Government
              <br />
              All Rights Reserved.
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-[#b44f21]/20 bg-white/50 backdrop-blur-sm">
        <Flex
          justify="center"
          align="center"
          py={16}
          px="clamp(20px,4vw,48px)"
        >
          <Text size="sm" className="text-[#4a4a4a] text-center">
            Built with dedication for the people of Ibadan South West
          </Text>
        </Flex>
      </div>
    </div>
  );
}
