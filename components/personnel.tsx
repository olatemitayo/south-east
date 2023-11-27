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
    <Box>
      <Flex
        w="100%"
        align="center"
        direction="column"
        maw={1330}
        mx="auto"
        px="clamp(12px,4vw,48px)"
        py="clamp(16px,3vw,48px)"
        gap="clamp(16px,2vw,32px)"
      >
        <Text className="font-extrabold text-[18px]" c="#4a4a4a">
          Meet our Principal Officers
        </Text>
        <Flex direction="column" gap={20} className="hidden clg:flex">
          {personnelData?.map((item) => (
            <div key={item?.id}>
              {item?.id % 2 === 0 ? (
                // If item's id is even, render the data
                <Flex key={item?.id} align="center" gap={60}>
                  <Image height={500} width={300} src={item?.img} alt="" />
                  <Flex
                    direction="column"
                    w={400}
                    justify="center"
                    className="text-center"
                  >
                    <Text className="font-extrabold text-[24px]">
                      {item?.name}
                    </Text>
                    <Text className="font-bold">{item?.position}</Text>
                  </Flex>
                </Flex>
              ) : (
                // If item's id is odd or undefined, render an empty div
                <Flex key={item?.id} align="center" gap={60}>
                  <Flex
                    direction="column"
                    w={400}
                    justify="center"
                    className="text-center"
                  >
                    <Text className="font-extrabold text-[24px]">
                      {item?.name}
                    </Text>
                    <Text className="font-bold">{item?.position}</Text>
                  </Flex>
                  <Image height={500} width={300} src={item?.img} alt="" />
                </Flex>
              )}
            </div>
          ))}
        </Flex>
        <Flex className="md:flex hidden flex-col gap-10">
          {personnelData?.map((item) => (
            <Flex key={item?.id} align="center" direction="column" gap={12}>
              <figure className="w-[310px]">
                <img className="h-[400px] w-[310px]" src={item?.img} alt="" />
              </figure>
              <Flex
                direction="column"
                justify="center"
                className="text-center w-[310px]"
              >
                <Text className="font-extrabold text-[24px]">{item?.name}</Text>
                <Text className="font-bold">{item?.position}</Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
