"use client";
import SubBanner from "@/components/SubBanner";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Page = () => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  return (
    <>
      <SubBanner
        title="The Nam Kan National Park"
        subtitle="Discover the story behind our mission to protect the Gibbon Experience and its surrounding rainforest."
      />

      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50">
        <motion.div
          //   initial={{ opacity: 0, scale: 0.95 }}
          //   whileInView={{ opacity: 1, scale: 1 }}
          //   viewport={{ once: true, margin: "-100px" }}
          //   transition={{ duration: 0.8 }}
          className="max-w-5xl h-full mx-auto rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            alt="panorama"
            width={2000}
            height={2000}
            src="/images/nam-kan-01.png"
            // className="w-full h-full"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-5xl mx-auto mt-6 sm:mt-8 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg px-4"
        >
          As initially planned with the local authorities, our project area was
          officially designated National Park in 2008 by the Lao National
          Assembly. The newly created Nam Kan National Park covers 136.000 ha of
          mixed deciduous forest. Traces of traditional agriculture can be seen
          alongside the road running from Thailand to China. Still, there lies
          one of the most pristine Lao forests, shelter to rare wildlife and
          Lao’s biggest tree.
        </motion.p>
      </section>
    </>
  );
};

export default Page;
