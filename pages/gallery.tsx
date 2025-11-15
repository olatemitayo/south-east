import { Footer, Navbar } from "@/components";
import { Flex, Text } from "@mantine/core";
import React, { useState } from "react";

const galleryImages = [
  {
    id: 1,
    src: "/building.jpg",
    title: "Local Government Secretariat",
    category: "Infrastructure",
  },
  {
    id: 2,
    src: "/homepic.jpg",
    title: "Community Development",
    category: "Community",
  },
  {
    id: 3,
    src: "/dummy1.avif",
    title: "Government Facility",
    category: "Infrastructure",
  },
  {
    id: 4,
    src: "/dummy2.avif",
    title: "Public Services",
    category: "Services",
  },
  {
    id: 5,
    src: "/dummy3.avif",
    title: "Local Development",
    category: "Community",
  },
  {
    id: 6,
    src: "/dummy4.jpg",
    title: "Administrative Block",
    category: "Infrastructure",
  },
  {
    id: 7,
    src: "/dummpic.jpg",
    title: "Community Event",
    category: "Events",
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", "Infrastructure", "Community", "Services", "Events"];

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-[#f9e3e3] to-[#fceee8] overflow-hidden">
        <div className="decorative-blob w-96 h-96 bg-[#fbbb9f] top-10 -right-48"></div>
        <Flex
          py={60}
          maw={1200}
          m="auto"
          direction="column"
          px={24}
          align="center"
          className="relative z-10"
        >
          <div className="text-center mb-8">
            <Text className="font-bold text-sm tracking-widest uppercase mb-3" c="#b44f21">
              Visual Journey
            </Text>
            <h1 className="font-extrabold text-[clamp(36px,5vw,52px)] text-[#4a4a4a] leading-tight mb-4">
              Photo Gallery
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#b44f21] to-[#d66535] mx-auto rounded-full mb-6"></div>
            <Text className="text-[17px] text-[#4a4a4a] max-w-2xl">
              Explore moments and milestones from Ibadan South West Local Government
            </Text>
          </div>
        </Flex>
      </div>

      {/* Filter Section */}
      <Flex
        justify="center"
        align="center"
        gap={16}
        py={32}
        px={24}
        wrap="wrap"
        className="bg-white/50"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? "gradient-bg-accent text-white shadow-elegant scale-105"
                : "bg-white text-[#4a4a4a] shadow-soft hover:shadow-elegant hover:scale-105"
            }`}
          >
            {category}
          </button>
        ))}
      </Flex>

      {/* Gallery Grid */}
      <Flex
        maw={1200}
        m="auto"
        px={24}
        py={48}
        direction="column"
        gap={32}
      >
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-2xl shadow-elegant hover:shadow-2xl transition-all duration-300 cursor-pointer fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4a4a4a]/80 via-[#4a4a4a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                    <Text className="font-bold text-[18px] text-[#4a4a4a] mb-1">
                      {image.title}
                    </Text>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#b44f21] to-[#d66535] text-white text-xs rounded-full font-semibold">
                      {image.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <Flex
            h={400}
            align="center"
            justify="center"
            direction="column"
            gap={16}
            className="modern-card"
          >
            <Text className="text-[24px] font-bold text-[#4a4a4a]">
              No photos available in this category
            </Text>
            <Text className="text-[16px] text-gray-600">
              Try selecting a different filter
            </Text>
          </Flex>
        )}

        {/* Stats Section */}
        {filteredImages.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="modern-card text-center">
              <div className="text-[48px] font-extrabold gradient-text mb-2">
                {galleryImages.length}
              </div>
              <Text className="text-[#4a4a4a] font-semibold">Total Photos</Text>
            </div>
            <div className="modern-card text-center">
              <div className="text-[48px] font-extrabold gradient-text mb-2">
                {categories.length - 1}
              </div>
              <Text className="text-[#4a4a4a] font-semibold">Categories</Text>
            </div>
            <div className="modern-card text-center">
              <div className="text-[48px] font-extrabold gradient-text mb-2">
                {new Date().getFullYear()}
              </div>
              <Text className="text-[#4a4a4a] font-semibold">Current Year</Text>
            </div>
          </div>
        )}
      </Flex>

      <Footer />
    </>
  );
}
