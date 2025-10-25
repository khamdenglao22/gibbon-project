"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ArrowRight,
  Trees,
  Home,
  Users,
  Heart,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NavHeader = () => {
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
      name: "what we do",
      subItems: [
        { name: "Treetop Architecture", url: "/treetop-architecture" },
        { name: "Zip down to the top !", url: "/zip-down" },
        { name: "National Park Patrols", url: "/national-park-patrols" },
        { name: "Sustainable Agriculture", url: "/sustainable-agriculture" },
      ],
    },
    {
      name: "book now",
      subItems: [
        { name: "Treetop Stays", url: "/book-treetop-stays" },
        { name: "Zipline Adventures", url: "/book-zipline-adventures" },
      ],
    },
    { name: "faq", url: "/about" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/95 backdrop-blur-md shadow-lg"
            : "bg-slate-950/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-2xs h-10 md:h-12 lg:h-16 cursor-pointer"
          >
            <Image
              src="/logoGB.png"
              alt="Slide 1"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, i) => (
              <div key={item.name} className="relative group">
                {/* Main menu item */}
                {item.url ? (
                  <Link href={item.url}>
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="hover:text-emerald-400 uppercase transition-colors cursor-pointer flex items-center"
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="hover:text-emerald-400 uppercase transition-colors cursor-pointer flex items-center"
                  >
                    {item.name}
                    {item.subItems && <ChevronDown className="ml-1 w-5 h-5" />}
                  </motion.span>
                )}

                {/* Dropdown menu (if subItems exist) */}
                {item.subItems && (
                  <div className="absolute left-0 p-2.5 top-full w-max hidden group-hover:block ">
                    <div className="bg-white shadow-lg rounded-lg pt-2">
                      <div className="w-4 h-4 absolute bg-white top-[10px] left-[40px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 rounded"></div>
                      {item.subItems.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.url}
                          className="block capitalize px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-500 rounded"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-slate-800 overflow-hidden"
            >
              {menuItems.map((item, i) => (
                <div key={item.name}>
                  {/* Parent Menu Item */}
                  {item.url ? (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={item.url}
                        className="block px-6 uppercase py-4 hover:bg-slate-800 transition-colors text-white"
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ) : (
                    <div className="block px-6 py-4 uppercase text-white font-semibold">
                      {item.name}
                    </div>
                  )}

                  {/* Submenu */}
                  {item.subItems && (
                    <div className="pl-10">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.url}
                          className="block px-6 py-2 text-sm capitalize text-gray-300 hover:text-white hover:bg-slate-800 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default NavHeader;
