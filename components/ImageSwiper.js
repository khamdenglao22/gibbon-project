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
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 via-slate-900 to-teal-900/50"
        >
          <div className="w-full h-full flex items-center justify-center">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{ delay: 5500, disableOnInteraction: false }}
            >
              <SwiperSlide>
                <Image
                  src="/images/banner_01.jpg"
                  alt="Slide 1"
                  fill
                  // className="w-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/banner_02.jpg"
                  alt="Slide 2"
                  fill
                  // className="w-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/banner_03.jpg"
                  alt="Slide 3"
                  fill
                  // className="w-full rounded-lg"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="/images/banner_04.jpg"
                  alt="Slide 4"
                  fill
                  // className="w-full rounded-lg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMGI5ODEiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTIgMTJjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00ek0yNCAzNGMwLTIuMjEtMS43OS00LTQtNHMtNCAxLjc5LTQgNCAxLjc5IDQgNCA0IDQtMS43OSA0LTR6bTAtMTJjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0yNCAwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div> */}
        </motion.div>
      </section>
    </>
  );
}

export default ImageSwiper;
