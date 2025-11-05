"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import ImageSwiper from "@/components/ImageSwiper";

const Page = () => {
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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", url: "/" },
    {
      name: "Who We Are",
      subItems: [
        { name: "Project Origin", url: "/project-origin" },
        { name: "Vision", url: "/vision" },
      ],
    },
    {
      name: "What We Do",
      subItems: [
        { name: "Treetop Architecture", url: "/treetop-architecture" },
        { name: "Zip down to the top!", url: "/zip-down" },
        { name: "National Park Patrols", url: "/national-park-patrols" },
        { name: "Sustainable Agriculture", url: "/sustainable-agriculture" },
      ],
    },
    {
      name: "Book Now",
      subItems: [
        { name: "Treetop Stays", url: "/book-treetop-stays" },
        { name: "Zipline Adventures", url: "/book-zipline-adventures" },
      ],
    },
    { name: "FAQ", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

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
        "Because we build the world’s highest tree houses, you can wake up surrounded by gibbons.",
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

    {
      id: 3,
      date: "Jan 15, 2022",
      title: "ZIP down to the top",
      description:
        "Visiting its treetops, you are protecting the Nam Kan National Park.",
      image: "/images/we-do-03.jpeg",
    },

    {
      id: 4,
      date: "Jan 15, 2022",
      title: "ZIP down to the top",
      description:
        "Visiting its treetops, you are protecting the Nam Kan National Park.",
      image: "/images/we-do-04.jpeg",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  const testimonials = [
    {
      id: 1,
      image: "/images/testimonials-01.png",
      title: "The National",
      description:
        "Agile ape man I am certainly not, but in true Tarzan style I let off a mighty howl that echoes through the treetops. The sheer scale of the beauty that surrounds me is astounding.",
    },
    {
      id: 2,
      image: "/images/testimonials-02.png",
      title: "Karla Cripps",
      description:
        "It's an incredibly special travel moment you won't find anywhere else in the world, made possible by the Gibbon Experience.",
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
  ];
  return (
    <>
      {/* Banner Section */}
      <ImageSwiper />

      {/* OUR TOURS */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-6 text-gray-900">
            OUR TOURS
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 leading-relaxed">
            The Gibbon Experience is a tourism-based conservation program...
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="group relative overflow-hidden rounded-lg aspect-[3/4] cursor-pointer shadow-md"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${dest.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-semibold mb-1">{dest.title}</h3>
                  <p className="text-sm tracking-widest">{dest.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-18 px-6 bg-gradient-to-br from-emerald-900 to-emerald-800 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center mb-6 text-gray-900">
            WHAT WE DO
          </h2>
          <p className="text-center text-white max-w-3xl mx-auto mb-16">
            Our favourite stories and photos from the Gibbon family.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12 ">
            {posts.map((post) => (
              <div
                key={post.id}
                className="group cursor-pointer bg-amber-50 p-2 rounded-lg text-gray-900"
              >
                <div className="relative overflow-hidden rounded-lg aspect-video mb-4">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${post.image})` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-[18px] font-semibold mb-3 group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section ref={sectionRef} className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-12 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            TESTIMONIALS
          </h2>
          <Swiper
            // modules={[Autoplay, Pagination]}
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 6500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
          >
            {testimonials.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 text-center">
                  <div className="mb-6 mx-auto w-16 h-16 relative">
                    <Image
                      src={t.image}
                      alt={t.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {t.description}
                  </p>
                  <div className="flex justify-center items-center text-emerald-600 font-semibold">
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Page;
