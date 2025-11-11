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
        title="Treetop Architecture"
        subtitle="Discover the story behind our mission to protect the Gibbon Experience and its surrounding rainforest."
      />

      <section className="relative bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div
              style={{
                transform: `translateY(${contentTranslateY}px)`,
                opacity: mounted ? 1 : 0,
                transition: "all 0.8s ease-out 0.2s",
              }}
            >
              <p className="text-[16px] font-light text-gray-800 leading-tight">
                We build tree houses as high as we safely can so that your room
                directly overlooks the forest canopy. Different designs are
                possible; we have worked on three types of tree houses :
              </p>
              <div className="ms-8 my-2">
                <li>Tree houses suspended on rope wires</li>
                <li>Tree houses set on wooden consoles</li>
                <li>Geodesic polyhedron laid in the fork</li>
              </div>
              <p className="text-[16px] font-light text-gray-800 leading-tight">
                The choice of construction type depends on the tree structure,
                shape and situation. Each construction is a new challenge
                because trees are just as different from one another as people.
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
                  src="/images/treetop-architecture-02.jpeg"
                  alt="Bear in forest"
                  className="transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Call of the Forest Section */}
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
                src="/images/treetop-architecture-01.jpeg"
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
              <h1 className="font-bold">Suspended treehouse (lateral view)</h1>
              <p className="text-gray-600 leading-relaxed text-lg">
                Suspended treehouses are very exciting to build. They are
                typically composed of several platforms suspended at different
                heights on strong boughs growing quite flatly outward. In case
                your host tree is a giant strangler ficus, you may end up with
                surprisingly large surfaces.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                It’s a good idea to use pre-constraining cables to distribute
                the weight of the various platforms so as to exert forces
                coaxially and inwardly onto the branches. Ideally, forces are
                directed to only apply linear compression through the branches,
                towards the trunk and down to the ground.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Wildlife Grid Section */}
      <section className="relative bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2
            className="leading-relaxed text-lg mb-5 font-bold"
            style={{
              transform: `translateY(${mounted ? 0 : 30}px)`,
              opacity: mounted ? 1 : 0,
              transition: "all 0.8s ease-out 0.6s",
            }}
          >
            Suspended structure detail : rosewood beams and steel rope wires
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div
                className="relative rounded-lg overflow-hidden group"
                style={{
                  transform: `translateY(${mounted ? 0 : 30}px)`,
                  opacity: mounted ? 1 : 0,
                  transition: "all 0.8s ease-out 0.7s",
                }}
              >
                <Image
                  width={2000}
                  height={2000}
                  src="/images/treetop-architecture-03.jpeg"
                  alt="Forest detail"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div
                className="relative rounded-lg overflow-hidden group"
                style={{
                  transform: `translateY(${mounted ? 0 : 30}px)`,
                  opacity: mounted ? 1 : 0,
                  transition: "all 0.8s ease-out 0.8s",
                }}
              >
                <Image
                  width={2000}
                  height={2000}
                  src="/images/treetop-architecture-04.jpeg"
                  alt="Forest detail"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div
                className="relative rounded-lg overflow-hidden group"
                style={{
                  transform: `translateY(${mounted ? 0 : 30}px)`,
                  opacity: mounted ? 1 : 0,
                  transition: "all 0.8s ease-out 0.8s",
                }}
              >
                <Image
                  width={2000}
                  height={2000}
                  src="/images/treetop-architecture-05.jpeg"
                  alt="Forest detail"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <h1 className="font-bold">
                Tree house set on wooden consoles (lateral view)
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg">
                This type of construction usually circles around the tree,
                following an octogonal shape, with a combination of several
                floors. Here’s an example of an efficient room distribution:
                entrance and exit cables join where the landing platform stands.
                At this level, a circular corridor surrounds the trunk, allowing
                passage in and out of the tree house and providing access to the
                bathroom and the stairway that leads to to the main platform.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                The latter consists of a kitchen area and a living room that
                turns into a series of semi-private rooms for the night. A
                railing runs all around the main platform for safety and to
                optimize the view. Another stairway leads to the more private
                canopy room.
              </p>
            </div>
          </div>
        </div>
      </section>

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
                src="/images/treetop-architecture-06.jpeg"
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
              <h1 className="font-bold">
                Tree house with a duralumin geodesic polyhedron core (Ikos)
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg">
                The icosahedron was pre-engineered by our friend Gilles
                Ebersolt. A regular polyhedron is composed of 20 equilateral
                triangles and quick to assemble. We extended it with several
                suspended platforms, including a bathroom. The biggest challenge
                lies in finding a tree with a crown providing sufficient space
                to accommodate the structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-1 gap-12">
            <div className="space-y-8">
              <h1 className="font-bold">
                How to Build Your Treehouse at Canopy Level ?
              </h1>
              <p className="text-gray-600 leading-relaxed text-lg">
                Select your tree wisely. You will spend the next 3 to 6 months
                busy up there so you should make sure your host is the most
                appropriate in your area. A strong root system, a balanced
                trunk, healthy boughs, absence of hollow or major insect
                colonies, proximity to water supply and wildlife, and last but
                not least a great view… In the forest, you may not necessarily
                recognize your perfect tree at first sight. Climbing a few tall
                trees will give you a clearer picture of the surrounding canopy
                and you have a good chance to spot your tree from those lofty
                heights!
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                Are you determined to go further? Great. Just send us a note
                with a few pics, we may have a few tips for you 😉
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
