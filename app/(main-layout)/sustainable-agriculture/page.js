"use client";
import SubBanner from "@/components/SubBanner";
import React, { useState, useEffect } from "react";
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
        title="Sustainable Agriculture"
        subtitle="Discover the story behind our mission to protect the Gibbon Experience and its surrounding rainforest."
      />

      <section className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div
              className="space-y-4"
              style={{
                transform: `translateY(${contentTranslateY}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.8s ease-out 0.2s",
              }}
            >
              <p className="text-[16px] font-light text-gray-700 leading-tight">
                Traditional slash-and-burn agriculture as still practiced widely
                practiced in Southeast Asia is only environmentally viable on
                small surfaces, not for large areas cultivated with upland rice.
              </p>
              <p className="text-[16px] font-light text-gray-700 leading-tight">
                With increasing populations and unchanged practices, the forest
                is increasingly threatened. Since 2006, the Gibbon Experience
                project has offered free or low-cost land flattening and
                irrigation services to farmers willing to switch to irrigated
                paddy rice cultivation. Since inception, we flattened a total of
                90 hectares benefiting over 120 families.
              </p>
            </div>
            <div
              className="relative group cursor-pointer"
              style={{
                transform: `translateY(${contentTranslateY}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.8s ease-out 0.4s",
              }}
            >
              <div className=" rounded-lg overflow-hidden">
                <Image
                  width={2000}
                  height={2000}
                  src="/images/sustainable-agriculture-01.jpeg"
                  alt="Bear in forest"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
