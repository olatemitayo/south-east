import { Box, Flex, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";

interface IPersonnelData {
  id: number;
  name: string;
  position: string;
  img: string;
}
const personnelData: IPersonnelData[] = [
  {
    id: 1,
    name: "Hon. Akande Kehinde Adeyemi",
    position: "Executive Chairman, Ibadan South West LG",
    img: "/chairman.jpg",
  },
  {
    id: 2,
    name: "Hon. Adigun Tajudeen Adeniyi",
    position: "Vice Chairman/ Political Head, Ibadan West LCDA",
    img: "/vice-chairman.jpg",
  },
  {
    id: 3,
    name: "Hon. Bello Vincent Olumide",
    position: "Secretary to the Local Government Ibadan South West LG",
    img: "/secretary.jpg",
  },
  {
    id: 4,
    name: "Mr. Olatunji Akeem O.",
    position: "Head, Local Govt. Administration, Ibadan South West LG",
    img: "/hla.jpg",
  },
];

export function Personnel() {
  return (
    <Box className="gradient-bg-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="decorative-blob w-72 h-72 bg-[#fbbb9f] -top-20 -left-20"></div>
      <div className="decorative-blob w-64 h-64 bg-white bottom-20 right-10"></div>

      <Flex
        w="100%"
        align="center"
        direction="column"
        maw={1330}
        mx="auto"
        px="clamp(12px,4vw,48px)"
        py="clamp(48px,8vw,96px)"
        gap="clamp(32px,4vw,48px)"
        className="relative z-10"
      >
        <div className="text-center mb-4">
          <Text className="font-bold text-sm tracking-widest uppercase mb-2" c="#b44f21">
            Leadership Team
          </Text>
          <h2 className="font-extrabold text-[clamp(32px,4vw,48px)] text-[#4a4a4a]">
            Ibadan South West Principal Officers
          </h2>
        </div>

        {/* Desktop Layout - Alternating */}
        <Flex direction="column" gap={40} className="hidden clg:flex w-full">
          {personnelData?.map((item) => (
            <div key={item?.id}>
              {item?.id % 2 === 0 ? (
                // Even - Image on Left
                <Flex align="center" gap={60} className="fade-in-up">
                  <div className="relative group w-[340px] flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#b44f21]/20 to-[#d66535]/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-300"></div>
                    <div className="relative overflow-hidden rounded-3xl shadow-elegant">
                      <Image
                        height={500}
                        width={340}
                        src={item?.img}
                        alt={item?.name}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4a4a4a]/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
                      <Text className="font-extrabold text-[clamp(24px,3vw,32px)] text-[#4a4a4a] mb-3 leading-tight">
                        {item?.name}
                      </Text>
                      <Text className="font-semibold text-[16px] gradient-text">
                        {item?.position}
                      </Text>
                    </div>
                  </div>
                </Flex>
              ) : (
                // Odd - Image on Right
                <Flex align="center" gap={60} className="fade-in-up">
                  <div className="flex-1">
                    <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft">
                      <Text className="font-extrabold text-[clamp(24px,3vw,32px)] text-[#4a4a4a] mb-3 leading-tight">
                        {item?.name}
                      </Text>
                      <Text className="font-semibold text-[16px] gradient-text">
                        {item?.position}
                      </Text>
                    </div>
                  </div>
                  <div className="relative group w-[340px] flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#b44f21]/20 to-[#d66535]/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="relative overflow-hidden rounded-3xl shadow-elegant">
                      <Image
                        height={500}
                        width={340}
                        src={item?.img}
                        alt={item?.name}
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#4a4a4a]/60 via-transparent to-transparent"></div>
                    </div>
                  </div>
                </Flex>
              )}
            </div>
          ))}
        </Flex>

        {/* Mobile Layout - Cards */}
        <Flex className="md:flex hidden flex-col gap-10 w-full items-center">
          {personnelData?.map((item) => (
            <div key={item?.id} className="w-full max-w-[360px]">
              <div className="modern-card group p-0 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    className="h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={item?.img}
                    alt={item?.name}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a4a4a]/80 via-[#4a4a4a]/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <Text className="font-extrabold text-[24px] text-white mb-2 drop-shadow-lg">
                      {item?.name}
                    </Text>
                    <Text className="font-semibold text-[14px] text-[#fbbb9f] drop-shadow-md">
                      {item?.position}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
