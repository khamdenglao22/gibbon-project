"use client";
import SubBanner from "@/components/SubBanner";
import Image from "next/image";
import React from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const Page = () => {
  return (
    <>
      <SubBanner
        title="Zip down to the top !"
        subtitle="Discover the story behind our mission to protect the Gibbon Experience and its surrounding rainforest."
      />

      <section className="py-12 sm:py-16 md:py-24 sm:px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
          //   initial={{ opacity: 0, scale: 0.95 }}
          //   whileInView={{ opacity: 1, scale: 1 }}
          //   viewport={{ once: true, margin: "-100px" }}
          //   transition={{ duration: 0.8 }}
          >
            <Image
              alt="panorama"
              width={2000}
              height={2000}
              src="/images/zip-down-to-the-top-01.jpg"
              // className="w-full h-full"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=" mt-6 sm:mt-8 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg"
          >
            In 2003, we invented gravity access to the canopy. This low-tech,
            safe and easy way to ascend the tree tops taking advantage of the
            terrain slope received a warm welcome by all our staff and visitors.
            It has been reproduced in innumerable places ever since. All our
            tree houses are accessible this way.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=" mt-6 sm:mt-8 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg"
          >
            At The Gibbon Experience, we also use ziplines to fly from hill to
            hill. This enables trekkers to go deeper into the forest while
            reducing up-and-down walks.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className=" mt-6 sm:mt-8 text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg"
          >
            For some of our itineraries, what would have been an 8-hour walk was
            reduced to 2 hours thanks to the ziplines. The Gibbon Experience’s
            itineraries currently feature a total of 15 km of ziplines, some of
            them as long as 600 meters.
          </motion.p>
        </div>
      </section>
    </>
  );
};

export default Page;
