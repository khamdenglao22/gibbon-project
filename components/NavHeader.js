"use client";
import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  AnimatePresence,
} from "framer-motion";
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
        { name: "The Nam Kan National Park", url: "/nam-kan" },
      ],
    },
    {
      name: "what we do",
      subItems: [
        { name: "Treetop Architecture", url: "/tree-top-architecture" },
        { name: "Zip down to the top !", url: "/zip-down-to-the-top" },
        { name: "National Park Patrols", url: "/national-park-patrols" },
        { name: "Sustainable Agriculture", url: "/sustainable-agriculture" },
        { name: "trend-setting tourism", url: "/trend-setting-tourism" },
        {
          name: "medicinal plant book edition",
          url: "/medicinal-plant-book-edition",
        },
      ],
    },
    {
      name: "book now",
      subItems: [
        { name: "giant loop", url: "/giant-loop" },
        { name: "classic tour", url: "/classic-tour" },
        { name: "honeymoon tour", url: "/honeymoon-tour" },
      ],
    },
    { name: "faq", url: "/frequently-asked-questions" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-white/70"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative w-32 h-12 cursor-pointer"
          >
            <Image
              src="/logoGB.png"
              alt="Logo"
              fill
              className="object-contain invert-100"
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, i) => (
              <div key={item.name} className="relative group">
                {item.url ? (
                  <Link href={item.url}>
                    <motion.span
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="hover:text-emerald-600 uppercase transition-colors cursor-pointer flex items-center"
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                ) : (
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="hover:text-emerald-600 uppercase transition-colors cursor-pointer flex items-center"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 w-5 h-5" />
                  </motion.span>
                )}
                {item.subItems && (
                  <div className="absolute left-0 pt-2.5 top-full w-max hidden group-hover:block">
                    <div className="w-4 h-4 absolute z-10 bg-white border border-gray-200 top-[10px] left-[40px] transform -translate-x-1/2 -translate-y-1/2 rotate-45 rounded"></div>

                    <div className="bg-white border relative z-30 border-gray-200 rounded-lg shadow-md pt-2">
                      {item.subItems.map((sub, j) => (
                        <Link
                          key={j}
                          href={sub.url}
                          className="block capitalize px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
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
            className="md:hidden text-gray-900"
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
              className="md:hidden bg-white border-t border-gray-200"
            >
              {menuItems.map((item, i) => (
                <div key={item.name}>
                  {item.url ? (
                    <Link
                      href={item.url}
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="block px-6 py-4 uppercase text-gray-800 hover:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div className="px-6 py-4 uppercase font-semibold text-gray-800">
                      {item.name}
                    </div>
                  )}
                  {item.subItems && (
                    <div className="pl-10">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.url}
                          onClick={() => setIsMenuOpen(!isMenuOpen)}
                          className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-800"
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
