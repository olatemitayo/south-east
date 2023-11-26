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
    <Box px="clamp(20px,4vw,48px)" bg="#f9e3e3" className="z-50" w="100%">
      <Flex
        justify="space-between"
        align="center"
        w="100%"
        maw={1330}
        mx="auto"
        p={16}
      >
        <Link href={"/"}>
          <img
            src="/oyo-state-logo.png"
            className="w-[clamp(150px,12vw,200px)]"
            alt="LOGO"
          />
        </Link>
        <Flex
          gap="clamp(32px,4vw,64px)"
          c="#b44f21"
          className="cmd:hidden font-bold"
        >
          <Link className="   hover:scale-125 cursor-pointer" href={"/"}>
            <Text>Home</Text>
          </Link>
          <Link className="   hover:scale-125 cursor-pointer" href={"/about"}>
            <Text>About</Text>
          </Link>
          <Link className="   hover:scale-125 cursor-pointer" href={"/gallery"}>
            <Text>Gallery</Text>
          </Link>
        </Flex>
        <Box className="cmd:hidden">
          <Popover
            width={220}
            position="bottom"
            shadow="md"
            offset={{ mainAxis: 5, crossAxis: -55 }}
            classNames={{ dropdown: "p-0" }}
          >
            <Popover.Target>
              <Button
                c="#b44f21"
                className="bg-white hover:text-white hover:bg-[#b44f21] "
              >
                Contact Us
              </Button>
            </Popover.Target>
            <Popover.Dropdown>
              <Flex direction="column" gap={4}>
                <a
                  href="mailto:ibadansouthwest01@gmail.com"
                  className="flex items-center gap-2 hover:bg-[#fbf1f1] px-3 py-2"
                >
                  <PiEnvelope color="#ff6900" size={30} />
                  <Text>Send us an Email</Text>
                </a>
                <a
                  href="tel:+2348027895267"
                  className="flex items-center gap-2   hover:bg-[#fbf1f1] px-3 py-2"
                >
                  <PiPhoneCall color="#ff6900" size={30} />
                  <Text>Call us on Phone</Text>
                </a>
                <a
                  href="https://wa.me/08027895267"
                  className="flex items-center gap-2  hover:bg-[#fbf1f1]  px-3 py-2"
                >
                  <PiWhatsappLogo color="green" size={30} />
                  <Text>Text us on Whatsapp</Text>
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
          >
            <Flex direction="column" gap={12}>
              <Link
                className="  hover:text-[#b44f21] cursor-pointer w-max"
                href={"/"}
              >
                <Text>Home</Text>
              </Link>
              <Link
                className="  hover:text-[#b44f21] cursor-pointer  w-max"
                href={"/about"}
              >
                <Text>About</Text>
              </Link>
              <Link
                className="  hover:text-[#b44f21] cursor-pointer  w-max"
                href={"/gallery"}
              >
                <Text>Gallery</Text>
              </Link>
              <a
                href="mailto:olatunjitemitayo444@gmail.com"
                className="flex items-center gap-2  w-max"
              >
                <PiEnvelope color="#ff6900" size={30} />
                <Text className="hover:text-[#b44f21] ">Send us an Email</Text>
              </a>
              <a
                href="tel:+2347067100222"
                className="flex items-center gap-2    w-max"
              >
                <PiPhoneCall color="#ff6900" size={30} />
                <Text className="hover:text-[#b44f21] ">Call us on Phone</Text>
              </a>
              <a href="http://" className="flex items-center gap-2    w-max">
                <PiWhatsappLogo color="green" size={30} />
                <Text className="hover:text-[#b44f21] ">
                  Text us on Whatsapp
                </Text>
              </a>
            </Flex>
          </Drawer>
          <Hamburger onClick={open} />
        </Box>
      </Flex>
    </Box>
  );
}
