import { Footer, Navbar } from "@/components";
import { Flex } from "@mantine/core";
import React from "react";

export default function Gallery() {
  return (
    <>
      <Navbar />
      <Flex h={570} maw={1000} m="auto" align="center" justify="center">
        Opss! No photos available
      </Flex>
      <Footer />
    </>
  );
}
