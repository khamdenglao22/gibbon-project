"use client";
import { useEffect } from "react";
import Image from "next/image";
import SubBanner from "@/components/SubBanner";
import React, { useState } from "react";

const Page = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <SubBanner
        title="Medicinal plant book edition"
        subtitle="Discover the story behind our mission to protect the Gibbon Experience and its surrounding rainforest."
      />

      <section className="relative bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_2fr] gap-16">
            <div
              className="relative rounded-lg overflow-hidden"
              style={{
                transform: `translateX(${mounted ? 0 : -50}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.9s ease-out 0.3s",
              }}
            >
              <Image
                width={2000}
                height={2000}
                src="/images/medicinal-plant-book-edition-01.jpeg"
                alt="Mushrooms in forest"
              />
            </div>
            <div
              className="space-y-4"
              style={{
                transform: `translateX(${mounted ? 0 : 50}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.9s ease-out 0.5s",
              }}
            >
              <p className="text-gray-600 leading-relaxed text-[16px]">
                This guide is the result of an ethnobotanical survey carried out
                in the Nam Kan National Park by the French Ethnobotanist
                Jean-Marc Dubost for The Gibbon Experience.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                The Nam Kan National Park shelters some of the most ancient Lao
                forest and is very unique, both in terms of its ecosystems and
                cultural diversity.
              </p>

              <p className="text-gray-600 leading-relaxed text-[16px]">
                The reader will discover a variety of medicinal plants used by
                three ethnic groups living on the park. They are used in many
                ways to maintain general health and to treat a wide range of
                diseases and ailments.
              </p>

              <p className="text-gray-600 leading-relaxed text-[16px]">
                Each plant is briefly presented and illustrated, followed by its
                vernacular names and a description of its medicinal applications
                in the different groups using it, giving an insight into the
                great diversity of their cultures.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
