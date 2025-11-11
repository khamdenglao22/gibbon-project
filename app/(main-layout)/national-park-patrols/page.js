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

  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const contentTranslateY = mounted ? 0 : 50;

  return (
    <>
      <SubBanner
        title="National Park Patrols"
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
                src="/images/national-park-patrols-01.jpeg"
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
                When we first came to Bokeo in 1997, there was only thick jungle
                – no tree house, no zipline and no tourism activity whatsoever.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                The first step of our project was to put together a team of 5
                forest guards, selected among the best tribal hunters living in
                the forest. Funded with occasional donations, the team was
                experimental and the first of its kind in the Lao PDR.
              </p>

              <p className="text-gray-600 leading-relaxed text-[16px]">
                In 2014, the patrol team had grown to 15 local villagers working
                on a full time basis under the supervision of 5 staff from the
                Provincial Department of Natural Resources. The Provincial
                Department of Forest Inspection controls their work.
              </p>

              <div className="grid md:grid-cols-2 gap-10">
                <div
                  className="space-y-4"
                  style={{
                    transform: `translateX(${mounted ? 0 : 50}px)`,
                    opacity: mounted ? 1 : 0,
                    transition: "all 0.9s ease-out 0.5s",
                  }}
                >
                  <h1 className="font-bold">
                    The team’s primary focus is on illegal logging, hunting,
                    bomb fishing and land use.
                  </h1>
                  <p className="text-gray-600 leading-relaxed text-[16px]">
                    The patrol is jointly run by The Gibbon Experience and the
                    Lao Government, and GE covers nearly all of the related
                    expenses: salaries, food, cars, bikes, petrol, uniforms,
                    environmental awareness campaigns, and special law
                    enforcement operations.
                  </p>
                </div>
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
                    src="/images/national-park-patrols-02.jpeg"
                    alt="Mushrooms in forest"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
