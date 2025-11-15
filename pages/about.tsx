import { Footer, Navbar } from "@/components";
import { Flex, Text, Title } from "@mantine/core";
import React from "react";

export default function About() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#f9e3e3] to-[#fceee8] overflow-hidden">
        <div className="decorative-blob w-96 h-96 bg-[#fbbb9f] top-10 -right-48"></div>
        <Flex
          py={60}
          maw={1100}
          m="auto"
          direction="column"
          px={24}
          align="center"
          className="relative z-10"
        >
          <div className="text-center mb-8">
            <Text
              className="font-bold text-sm tracking-widest uppercase mb-3"
              c="#b44f21"
            >
              Our Story
            </Text>
            <h1 className="font-extrabold text-[clamp(36px,5vw,52px)] text-[#4a4a4a] leading-tight mb-4">
              Historical Background
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#b44f21] to-[#d66535] mx-auto rounded-full"></div>
          </div>
        </Flex>
      </div>

      {/* Content Section */}
      <Flex
        py={64}
        maw={1000}
        m="auto"
        direction="column"
        px={32}
        gap={24}
        className="fade-in-up"
      >
        <div className="modern-card">
          <Text className="text-[17px] leading-relaxed text-[#4a4a4a] text-justify">
            Ibadan South West Local Government, established on the{" "}
            <span className="font-bold text-[#b44f21]">
              27th of August, 1991
            </span>
            , emerged as a distinct entity from the then defunct Ibadan
            Municipal Government (IMG). This significant administrative shift
            occurred during the tenure of General Ibrahim Babangida (rtd), the
            former Military President of Nigeria. The restructuring was part of
            a broader initiative by the Federal Government to foster equity
            among the states in the Federation through the creation of more
            local governments.
          </Text>
        </div>

        <div className="modern-card bg-gradient-to-br from-[#f9e3e3]/30 to-white">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-2 h-16 bg-gradient-to-b from-[#b44f21] to-[#d66535] rounded-full"></div>
            <div>
              <h3 className="font-bold text-[24px] gradient-text mb-2">
                Geographic Coverage
              </h3>
              <Text className="text-[17px] leading-relaxed text-[#4a4a4a] text-justify">
                With a sprawling landmass of approximately{" "}
                <span className="font-bold text-[#b44f21]">
                  224.55 square kilometers
                </span>
                , Ibadan South West Local Government stands as one of the
                largest local government areas in Oyo State. This expansive
                geographical coverage contributes to its prominence within the
                state&apos;s administrative framework.
              </Text>
            </div>
          </div>
        </div>

        <div className="modern-card">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-2 h-16 bg-gradient-to-b from-[#b44f21] to-[#d66535] rounded-full"></div>
            <div>
              <h3 className="font-bold text-[24px] gradient-text mb-2">
                Administrative Headquarters
              </h3>
              <Text className="text-[17px] leading-relaxed text-[#4a4a4a] text-justify">
                Situated in close proximity to the Government Reservation Area
                (GRA) Iyaganku, the local government&apos;s administrative
                headquarters is strategically located at{" "}
                <span className="font-bold text-[#b44f21]">Oluyole Estate</span>
                . This central location facilitates efficient governance and
                accessibility for residents.
              </Text>
            </div>
          </div>
        </div>

        <div className="modern-card bg-gradient-to-br from-[#f9e3e3]/30 to-white">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-2 h-20 bg-gradient-to-b from-[#b44f21] to-[#d66535] rounded-full"></div>
            <div>
              <h3 className="font-bold text-[24px] gradient-text mb-2">
                Economic Viability
              </h3>
              <Text className="text-[17px] leading-relaxed text-[#4a4a4a] text-justify">
                Ibadan South West Local Government has earned a reputation as
                one of the most economically viable areas in Oyo State. This
                distinction arises from the concentration of a significant
                portion of the state&apos;s industries within its borders. The
                local government boasts the largest share of industries and
                companies in Oyo State, with nearly{" "}
                <span className="font-bold text-[#b44f21]">50 percent</span> of
                these establishments situated in the Oluyole Estate. The
                remaining industries are strategically distributed across the
                broader local government area.
              </Text>
            </div>
          </div>
        </div>

        <div className="modern-card">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-2 h-16 bg-gradient-to-b from-[#b44f21] to-[#d66535] rounded-full"></div>
            <div>
              <h3 className="font-bold text-[24px] gradient-text mb-2">
                Industrial Impact
              </h3>
              <Text className="text-[17px] leading-relaxed text-[#4a4a4a] text-justify">
                The industrial landscape of Ibadan South West plays a pivotal
                role in the economic development of Oyo State. The concentration
                of diverse industries contributes not only to job creation but
                also to the overall economic vibrancy of the region. The local
                government serves as a hub for various sectors, fostering a
                dynamic business environment that benefits both residents and
                businesses alike.
              </Text>
            </div>
          </div>
        </div>

        <div className="modern-card bg-gradient-to-br from-[#f9e3e3]/30 to-white">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-2 h-16 bg-gradient-to-b from-[#b44f21] to-[#d66535] rounded-full"></div>
            <div>
              <h3 className="font-bold text-[24px] gradient-text mb-2">
                Demographics
              </h3>
              <Text className="text-[17px] leading-relaxed text-[#4a4a4a] text-justify">
                The demographic landscape of Ibadan South West reflects its
                significance within the state. With a total population of{" "}
                <span className="font-bold text-[#b44f21]">
                  two hundred and eighty-three thousand and ninety-eight people
                </span>
                , the local government plays a crucial role in the social fabric
                of Oyo State. The diverse population contributes to the cultural
                richness and societal dynamics that characterize the region.
              </Text>
            </div>
          </div>
        </div>

        <div className="modern-card shadow-elegant">
          <div className="flex items-start gap-4 mb-4">
            <div className="w-2 h-20 bg-gradient-to-b from-[#b44f21] to-[#d66535] rounded-full"></div>
            <div>
              <h3 className="font-bold text-[24px] gradient-text mb-2">
                Current Leadership
              </h3>
              <Text className="text-[17px] leading-relaxed text-[#4a4a4a] text-justify">
                At the helm of Ibadan South West Local Government is the
                Executive Chairman,{" "}
                <span className="font-bold text-[#b44f21]">
                  Hon Kehinde Adeyemi Akande
                </span>
                . Sworn into office on December 23rd, 2019, Hon Akande assumed
                the responsibility of leading the local government into a new
                era of development and progress. His tenure has been marked by
                initiatives aimed at enhancing infrastructure, promoting
                economic growth, and addressing the diverse needs of the local
                population.
              </Text>
            </div>
          </div>
        </div>

        <div className="modern-card bg-gradient-to-br from-[#b44f21]/5 to-transparent border-2 border-[#b44f21]/20">
          <Text className="text-[17px] leading-relaxed text-[#4a4a4a] text-justify italic">
            In conclusion, Ibadan South West Local Government stands as a
            testament to the commitment of the Nigerian government to equitable
            development. From its inception in 1991 to its present-day status as
            an economic powerhouse within Oyo State, the local government
            continues to evolve and contribute significantly to the broader
            narrative of regional progress and prosperity.
          </Text>
        </div>
      </Flex>

      <Footer />
    </div>
  );
}
