"use client";
import SubBanner from "@/components/SubBanner";
import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Page = () => {
  return (
    <>
      <SubBanner
        title="Offering new perspectives"
        subtitle="Discover the story behind our mission to protect the Gibbon Experience and its surrounding rainforest."
      />
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 bg-gray-50 grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
        <motion.div
          //   initial={{ opacity: 0, scale: 0.95 }}
          //   whileInView={{ opacity: 1, scale: 1 }}
          //   viewport={{ once: true, margin: "-100px" }}
          //   transition={{ duration: 0.8 }}
          className="w-full h-[450px] md:h-full relative rounded-lg overflow-hidden shadow-lg"
        >
          <Image
            alt="panorama"
            fill
            src="/images/vision-01.jpeg"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
        //   initial={{ opacity: 0, y: 20 }}
        //   whileInView={{ opacity: 1, y: 0 }}
        //  viewport={{ once: true, margin: "-100px" }}
        //  transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-5xl mx-auto text-gray-700 leading-relaxed text-sm sm:text-base px-4"
          >
            The combined effects of illegal logging, commercial cropping,
            excessive slash-and-burn practices, and overall land pressure,
            compounded by mismanagement, are rapidly depleting tropical forests.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto mt-6 sm:mt-8 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg px-4"
          >
            Recognizing this urgent issue, the Gibbon Experience was initiated
            with a mandate to adopt a unique and innovative approach. Since its
            inception in 1996, we have been committed to ensuring a sustainable
            future for the Bokeo forest, which became Nam Kan National Park in
            2008.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-5xl mx-auto mt-6 sm:mt-8 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg px-4"
          >
            Today, the Gibbon Experience works in partnership with the National
            Park and provides full-time employment to over 80 people,
            contributing to both environmental conservation and local economic
            development.
          </motion.p>
        </motion.div>
      </section>
    </>
  );
};

export default Page;
