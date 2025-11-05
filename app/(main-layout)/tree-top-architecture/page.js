"use client";

import SubBanner from "@/components/SubBanner";
import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";
import Image from "next/image";

const Page = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const contentTranslateY = mounted ? 0 : 50;

  return (
    <>
      <SubBanner
        title="Treetop Architecture"
        subtitle="Discover the story behind our mission to protect the Gibbon Experience and its surrounding rainforest."
      />

      <section className="relative bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="space-y-6"
              style={{
                transform: `translateY(${contentTranslateY}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.8s ease-out 0.2s",
              }}
            >
              <div className="text-6xl text-gray-300 font-serif">&quot;</div>
              <h2 className="text-5xl font-light text-gray-800 leading-tight">
                Collect moments
                <br />
                not things
              </h2>
            </div>
            <div
              className="relative group cursor-pointer"
              style={{
                transform: `translateY(${contentTranslateY}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.8s ease-out 0.4s",
              }}
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  width={2000}
                  height={2000}
                  src="/images/vision-01.jpeg"
                  alt="Bear in forest"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="absolute bottom-8 right-8 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 hover:bg-white/30 transition-all duration-300">
                <Play className="w-6 h-6 text-white ml-1" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Call of the Forest Section */}
      <section className="relative bg-gradient-to-b from-white to-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              className="relative h-[500px] rounded-lg overflow-hidden"
              style={{
                transform: `translateX(${mounted ? 0 : -50}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.9s ease-out 0.3s",
              }}
            >
              <Image
                width={2000}
                height={2000}
                src="/images/vision-01.jpeg"
                alt="Mushrooms in forest"
                className="w-full h-full object-cover"
              />
            </div>
            <div
              className="space-y-8"
              style={{
                transform: `translateX(${mounted ? 0 : 50}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.9s ease-out 0.5s",
              }}
            >
              <h2 className="text-5xl font-light text-gray-800">
                The call of
                <br />
                the forest
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Forests at different latitudes and elevations form distinctly
                different ecozones: boreal forests near thepoles, tropical
                forests near the equator andtemperate forests at.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Grid Section */}
      <section className="relative bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <p
                className="text-gray-600 leading-relaxed text-lg"
                style={{
                  transform: `translateY(${mounted ? 0 : 30}px)`,
                  opacity: mounted ? 1 : 0,
                  transition: "all 0.8s ease-out 0.6s",
                }}
              >
                Forests at different latitudes and elevations form distinctly
                different ecozones: boreal forests near thepoles, tropi
              </p>
              <div
                className="relative h-80 rounded-lg overflow-hidden group"
                style={{
                  transform: `translateY(${mounted ? 0 : 30}px)`,
                  opacity: mounted ? 1 : 0,
                  transition: "all 0.8s ease-out 0.7s",
                }}
              >
                <Image
                  width={2000}
                  height={2000}
                  src="/images/vision-01.jpeg"
                  alt="Forest detail"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div
                className="relative h-96 rounded-lg overflow-hidden group"
                style={{
                  transform: `translateY(${mounted ? 0 : 30}px)`,
                  opacity: mounted ? 1 : 0,
                  transition: "all 0.8s ease-out 0.8s",
                }}
              >
                <Image
                  width={2000}
                  height={2000}
                  src="/images/vision-01.jpeg"
                  alt="Moose"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p
                className="text-gray-600 leading-relaxed text-lg"
                style={{
                  transform: `translateY(${mounted ? 0 : 30}px)`,
                  opacity: mounted ? 1 : 0,
                  transition: "all 0.8s ease-out 0.9s",
                }}
              >
                Forests at different latitudes and elevations form distinctly
                different ecozones: boreal forests near thepoles, tropi
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
