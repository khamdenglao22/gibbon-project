"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Menu, X, ArrowRight, Trees, Home, Users, Heart } from "lucide-react";
import { Hammer, Building, Pencil } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ImageSwiper from "@/components/ImageSwiper";
import NavHeader from "@/components/NavHeader";
import Image from "next/image";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = ["Home", "Tours", "Conservation", "About", "Contact"];

  const destinations = [
    {
      id: 1,
      title: "The best option to spot gibbons",
      location: "Classic",
      image: "/images/our-tours-01.jpg",
    },
    {
      id: 2,
      title: "Giant",
      location: "The ultimate airborne loop",
      image: "/images/our-tours-02.jpg",
    },
    {
      id: 3,
      title: "Honeymoon",
      location: "The Classic Tour in a private treehouse",
      image: "/images/our-tours-03.jpg",
    },
  ];

  const posts = [
    {
      id: 1,
      date: "Jan 15, 2022",
      title: "The world highest tree houses",
      description:
        "Because we build the world highest tree houses you can wake up surrounded by gibbons.",
      image: "/images/we-do-01.jpeg",
    },
    {
      id: 2,
      date: "Jan 15, 2022",
      title: "ZIP down to the top",
      description:
        "Visiting its treetops, you are protecting the Nam Kan National Park.",
      image: "/images/we-do-02.jpeg",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("View All");
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current; // ✅ store current value once

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        // ✅ use the stored variable instead of sectionRef.current
        observer.unobserve(section);
      }
    };
  }, []);

  const filters = ["View All", "Design", "Construction", "Renovation"];

  const testimonials = [
    {
      id: 1,
      image: "/images/testimonials-01.png",
      title: "The National",
      description:
        "Agile ape man I am certainly not, but in true Tarzan style I let off a mighty howl that echoes through the ­treetops. The sheer scale of the beauty that surrounds me is ­astounding",
    },
    {
      id: 2,
      image: "/images/testimonials-02.png",
      title: "Karla Cripps",
      description:
        "It's an incredibly special travel moment you won't find anywhere else in the world made possible by the Gibbon Experience.",
    },
    {
      id: 3,
      image: "/images/testimonials-03.png",
      title: "Eliot Stein",
      description:
        "Not only is this exhilarating adventure one of the most unforgettable experiences in Southeast Asia, it’s also one of its most effective conservation concepts.",
    },
    {
      id: 4,
      image: "/images/testimonials-04.png",
      title: "National Geographic",
      description:
        "Well-known as one of Laos’s most unique accommodations, the Gibbon Experience is a two- or three-day adventure into some of the country’s most pristine forest canopy.",
    },
    {
      id: 5,
      image: "/images/testimonials-05.png",
      title: "Interior Planning",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.",
    },
  ];

  return (
    <>
      {/* Progress Bar */}
      {/* <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-400 origin-left z-50"
        style={{ scaleX: smoothProgress }}
      /> */}

      {/* Navigation */}

      {/* banner Section */}
      <ImageSwiper />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-6">
            OUR TOURS
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed">
            The Gibbon Experience is a tourism-based conservation program. It is
            mainly known for its canopy set-ups featuring incredible tree houses
            and ziplines. We believe a canopy-level tree house is a great nature
            observatory and a privileged spot to meet new friends – locals or
            foreigners – far removed from ethnic oddities and related clichés.
            By visiting our setup, worldwide travelers discover their passion
            and show their support for forest conservation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {destinations.map((dest, i) => (
              <div
                key={dest.id || i}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${dest.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <h3 className="text-xl font-semibold mb-1">{dest.title}</h3>
                  <p className="text-sm tracking-widest text-gray-300">
                    {dest.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-6">
            WHAT WE DO
          </h2>
          <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16">
            Our Favourite stories and photos from West compas family. We walked
            a long way from North to South & East to West.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {posts.map((post, i) => (
              <div key={post.id || i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-gray-300 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {post.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="text-blue-500 hover:text-blue-400 tracking-wider text-sm font-semibold transition-colors">
              ALL POSTS
            </button>
          </div>
        </div>
      </section>

      <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h2
                className={`text-4xl md:text-5xl font-bold text-white mb-2 transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                TESTIMONIALS
              </h2>
            </div>
          </div>

          {/* Services Grid */}
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{ delay: 6500, disableOnInteraction: false }}
          >
            {testimonials.map((service, index) => (
              <SwiperSlide key={service.id || index}>
                <div
                  className={`group bg-gradient-to-br flex flex-col items-center from-gray-900 to-black border border-gray-800 rounded-3xl p-8 hover:border-white/20 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 cursor-pointer ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 100}ms`,
                  }}
                >
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 relative bg-gradient-to-br overflow-hidden from-white to-gray-300 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-white/10">
                      {/* {service.icon} */}
                      <Image
                        src={service.image}
                        alt="Slide 1"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gray-200 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-center text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Arrow Link */}
                  <div className="flex items-center text-white opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                    <span className="text-sm font-semibold mr-2">
                      Learn More
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>

                  {/* Bottom decorative line */}
                  <div className="mt-6 h-1 bg-gradient-to-r from-white to-transparent rounded-full w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full opacity-[0.02] blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full opacity-[0.02] blur-3xl"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 mb-4"
          >
            By visiting the treetops of the Gibbon Experience, you are
            protecting the National Park and supporting an entire community
            dedicated to preserving its future
          </motion.p>
          <p className="text-slate-600 text-sm">
            © 2025 The Gibbon Experience. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
