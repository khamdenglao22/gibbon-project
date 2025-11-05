"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X, ArrowRight, Trees, Home, Users, Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

function ImageSwiper() {
  const { scrollYProgress } = useScroll();

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);
  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-100 via-white to-teal-50"
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            loop
            autoplay={{ delay: 5500, disableOnInteraction: false }}
          >
            {[
              "banner_01.jpg",
              "banner_02.jpg",
              "banner_03.jpg",
              "banner_04.jpg",
            ].map((img, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={`/images/${img}`}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>
    </>
  );
}

export default ImageSwiper;
