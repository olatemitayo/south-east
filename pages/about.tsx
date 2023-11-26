import { Footer, Navbar } from "@/components";
import { Flex, Text, Title } from "@mantine/core";
import React from "react";

export default function About() {
  return (
    <div>
      <Navbar />
      <Flex py={32} maw={1000} m="auto" direction="column" px={24}>
        <Text className="font-extrabold" c="#4a4a4a">
          Historical Background of Ibadan South West Local Government
        </Text>
        <Text>
          Ibadan South West Local Government, established on the 27th of August,
          1991, emerged as a distinct entity from the then defunct Ibadan
          Municipal Government (IMG). This significant administrative shift
          occurred during the tenure of General Ibrahim Babangida (rtd), the
          former Military President of Nigeria. The restructuring was part of a
          broader initiative by the Federal Government to foster equity among
          the states in the Federation through the creation of more local
          governments. With a sprawling landmass of approximately 224.55 square
          kilometers, Ibadan South West Local Government stands as one of the
          largest local government areas in Oyo State. This expansive
          geographical coverage contributes to its prominence within the
          state&apos;s administrative framework. Situated in close proximity to
          the Government Reservation Area (GRA) Iyaganku, the local
          government&apos;s administrative headquarters is strategically located
          at Oluyole Estate. This central location facilitates efficient
          governance and accessibility for residents. Ibadan South West Local
          Government has earned a reputation as one of the most economically
          viable areas in Oyo State. This distinction arises from the
          concentration of a significant portion of the state&apos;s industries
          within its borders. The local government boasts the largest share of
          industries and companies in Oyo State, with nearly 50 percent of these
          establishments situated in the Oluyole Estate. The remaining
          industries are strategically distributed across the broader local
          government area. The industrial landscape of Ibadan South West plays a
          pivotal role in the economic development of Oyo State. The
          concentration of diverse industries contributes not only to job
          creation but also to the overall economic vibrancy of the region. The
          local government serves as a hub for various sectors, fostering a
          dynamic business environment that benefits both residents and
          businesses alike. The demographic landscape of Ibadan South West
          reflects its significance within the state. With a total population of
          two hundred and eighty-three thousand and ninety-eight people, the
          local government plays a crucial role in the social fabric of Oyo
          State. The diverse population contributes to the cultural richness and
          societal dynamics that characterize the region. At the helm of Ibadan
          South West Local Government is the Executive Chairman, Hon Kehinde
          Adeyemi Akande. Sworn into office on December 23rd, 2019, Hon Akande
          assumed the responsibility of leading the local government into a new
          era of development and progress. His tenure has been marked by
          initiatives aimed at enhancing infrastructure, promoting economic
          growth, and addressing the diverse needs of the local population. In
          conclusion, Ibadan South West Local Government stands as a testament
          to the commitment of the Nigerian government to equitable development.
          From its inception in 1991 to its present-day status as an economic
          powerhouse within Oyo State, the local government continues to evolve
          and contribute significantly to the broader narrative of regional
          progress and prosperity.
        </Text>
      </Flex>
      <Footer />
    </div>
  );
}
