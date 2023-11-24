import { Hero, Navbar, Statement } from "@/components";
import { Box } from "@mantine/core";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Statement />
    </Box>
  );
}
