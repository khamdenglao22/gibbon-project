"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SubBanner = ({ title, subtitle }) => {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  return (
    <>
      <div className="relative overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 bg-cover bg-center bg-[url('/images/panorama_gibbon_bottom.jpg')] filter brightness-75"
        ></motion.div>
        <div className="relative z-10 flex flex-col items-center justify-center h-96 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-3 sm:mb-4"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-2xl text-base sm:text-lg md:text-xl px-4"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default SubBanner;
