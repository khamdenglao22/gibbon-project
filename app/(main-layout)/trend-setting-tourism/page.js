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
        title="Trend-setting tourism"
        subtitle="Discover the story behind our mission to protect the Gibbon Experience and its surrounding rainforest."
      />

      <section className="relative bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
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
                src="/images/trend-setting-tourism-01.jpeg"
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
                The Gibbon Experience is a tourism-based conservation project.
                It is mainly known for its canopy set-ups featuring incredible
                tree houses and ziplines.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                We believe a canopy-level tree house is a great nature
                observatory and a privileged spot to meet new friends – locals
                or foreigners – far removed from ethnic oddities and related
                clichés.
              </p>

              <p className="text-gray-600 leading-relaxed text-[16px]">
                By visiting our setup, worldwide travelers discover their
                passion and show their support for forest conservation.
              </p>

              <p className="text-gray-600 leading-relaxed text-[16px]">
                This effective way of creating visibility and raising awareness
                has great potential to help preserve nature hot spots in other
                parts of the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-white to-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-[3fr_1fr] gap-16">
            <div
              className="space-y-4"
              style={{
                transform: `translateX(${mounted ? 0 : 50}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.9s ease-out 0.5s",
              }}
            >
              <h1 className="text-4xl font-bold">Look for the Original</h1>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                When The Gibbon Experience opened in 1996, it was the first
                project of its kind. In 2003, we invented the zipline system
                with gravity access to the canopies. Many similar projects have
                emerged all over the world since then, and we are excited to see
                many beautiful projects.
              </p>
              <p className="text-gray-600 leading-relaxed text-[16px]">
                However, several “amusement parks” operating under names similar
                to The Gibbon Experience have appeared in recent years in
                Southeast Asia. We believe the intention of some of these is
                slightly different from ours.
              </p>

              <p className="text-gray-600 leading-relaxed text-[16px]">
                Although we offer a breathtaking, exhilarating experience,
                seeking out the most spectacular kicks and thrills is not our
                main aim. We want to comfortably and safely bring you to places
                that are otherwise very difficult or impossible to access, and
                connect you with this extraordinary realm of nature while
                protecting the forest and its wildlife.
              </p>

              <p className="text-gray-600 leading-relaxed text-[16px]">
                It’s all about equal benefits for the visitors, the forest, and
                its inhabitants.
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
                src="/images/trend-setting-tourism-02.jpeg"
                alt="Mushrooms in forest"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
