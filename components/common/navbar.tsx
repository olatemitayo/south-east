import { useDisclosure } from "@mantine/hooks";
import { Box, Button, Drawer, Flex, Popover, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import {
  PiEnvelope,
  PiEnvelopeBold,
  PiHamburger,
  PiHamburgerFill,
  PiMessengerLogo,
  PiPhoneCall,
  PiWhatsappLogo,
} from "react-icons/pi";
import { Hamburger } from "@/public/icons";

export function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Box
      px="clamp(16px,4vw,48px)"
      className="z-50 cmd:py-2 gradient-bg-primary shadow-soft sticky top-0 backdrop-blur-sm"
      w="100%"
      style={{ position: 'sticky', top: 0 }}
    >
      <Flex
        justify="space-between"
        align="center"
        w="100%"
        maw={1330}
        mx="auto"
        py={8}
      >
        <Link href={"/"} className="transition-smooth hover:scale-105">
          <img
            src="/oyo-state-logo.png"
            className="w-[clamp(120px,12vw,200px)]"
            alt="LOGO"
          />
        </Link>
        <Flex
          gap="clamp(32px,4vw,64px)"
          c="#b44f21"
          className="cmd:hidden font-bold"
        >
          <Link className="transition-smooth hover:scale-110 cursor-pointer relative group" href={"/"}>
            <Text className="relative">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b44f21] transition-all duration-300 group-hover:w-full"></span>
            </Text>
          </Link>
          <Link className="transition-smooth hover:scale-110 cursor-pointer relative group" href={"/about"}>
            <Text className="relative">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b44f21] transition-all duration-300 group-hover:w-full"></span>
            </Text>
          </Link>
          <Link className="transition-smooth hover:scale-110 cursor-pointer relative group" href={"/gallery"}>
            <Text className="relative">
              Gallery
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#b44f21] transition-all duration-300 group-hover:w-full"></span>
            </Text>
          </Link>
        </Flex>
        <Box className="cmd:hidden">
          <Popover
            width={240}
            position="bottom"
            shadow="xl"
            offset={{ mainAxis: 5, crossAxis: -55 }}
            classNames={{ dropdown: "p-0 rounded-xl overflow-hidden shadow-elegant" }}
          >
            <Popover.Target>
              <Button
                c="white"
                className="gradient-bg-accent hover:opacity-90 transition-smooth shadow-soft rounded-full px-6 font-semibold"
              >
                Contact Us
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Flex direction="column" gap={0}>
                <a
                  href="mailto:ibadansouthwestlg01@gmail.com"
                  className="flex items-center gap-3 hover:bg-[#f9e3e3] px-4 py-3 transition-smooth border-b border-gray-100"
                >
                  <PiEnvelope color="#b44f21" size={24} />
                  <Text size="sm" className="font-medium">Send us an Email</Text>
                </a>
                <a
                  href="tel:+2348027895267"
                  className="flex items-center gap-3 hover:bg-[#f9e3e3] px-4 py-3 transition-smooth border-b border-gray-100"
                >
                  <PiPhoneCall color="#b44f21" size={24} />
                  <Text size="sm" className="font-medium">Call us on Phone</Text>
                </a>
                <a
                  href="https://api.whatsapp.com/send/?phone=2348027895267&text&type=phone_number&app_absent=0"
                  className="flex items-center gap-3 hover:bg-[#f9e3e3] px-4 py-3 transition-smooth"
                >
                  <PiWhatsappLogo color="#25D366" size={24} />
                  <Text size="sm" className="font-medium">Text us on Whatsapp</Text>
                </a>
              </Flex>
            </Popover.Dropdown>
          </Popover>
        </Box>
        {/* drawer for mobile view  */}
        <Box className="hidden cmd:block cursor-pointer">
          <Drawer
            opened={opened}
            onClose={close}
            position="right"
            transitionProps={{ duration: 800, transition: "slide-left" }}
            classNames={{ content: 'gradient-bg-primary' }}
          >
            <Flex direction="column" gap={20} className="mt-6">
              <Link
                className="hover:text-[#b44f21] cursor-pointer w-max font-semibold text-lg transition-smooth"
                href={"/"}
                onClick={close}
              >
                <Text>Home</Text>
              </Link>
              <Link
                className="hover:text-[#b44f21] cursor-pointer w-max font-semibold text-lg transition-smooth"
                href={"/about"}
                onClick={close}
              >
                <Text>About</Text>
              </Link>
              <Link
                className="hover:text-[#b44f21] cursor-pointer w-max font-semibold text-lg transition-smooth"
                href={"/gallery"}
                onClick={close}
              >
                <Text>Gallery</Text>
              </Link>
              <div className="border-t border-[#b44f21]/20 pt-4 mt-4">
                <Text size="sm" className="text-[#b44f21] font-bold mb-3">Contact Us</Text>
                <Flex direction="column" gap={16}>
                  <a
                    href="mailto:ibadansouthwestlg01@gmail.com"
                    className="flex items-center gap-3 w-max transition-smooth hover:scale-105"
                  >
                    <PiEnvelope color="#b44f21" size={24} />
                    <Text size="sm" className="hover:text-[#b44f21]">Send us an Email</Text>
                  </a>
                  <a
                    href="tel:+2348027895267"
                    className="flex items-center gap-3 w-max transition-smooth hover:scale-105"
                  >
                    <PiPhoneCall color="#b44f21" size={24} />
                    <Text size="sm" className="hover:text-[#b44f21]">Call us on Phone</Text>
                  </a>
                  <a
                    href="https://api.whatsapp.com/send/?phone=2348027895267&text&type=phone_number&app_absent=0"
                    className="flex items-center gap-3 w-max transition-smooth hover:scale-105"
                  >
                    <PiWhatsappLogo color="#25D366" size={24} />
                    <Text size="sm" className="hover:text-[#b44f21]">Text us on Whatsapp</Text>
                  </a>
                </Flex>
              </div>
            </Flex>
          </Drawer>
          <Hamburger onClick={open} />
        </Box>
      </Flex>
    </Box>
  );
}
