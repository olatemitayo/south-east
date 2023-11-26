import { Footer, Hero, Navbar, Personnel, Statement } from "@/components";
import { Box } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statement />
      <Personnel />
      <Footer />
    </>
  );
}
