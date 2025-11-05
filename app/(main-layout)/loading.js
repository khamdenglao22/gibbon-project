"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loading = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <AnimatePresence>
        {loading ? (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-teal-50"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-200 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-200 rounded-full blur-3xl"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Logo/Icon Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative"
                >
                  {/* Gibbon Silhouette SVG */}
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="55"
                      stroke="url(#gradient)"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#14b8a6" />
                      </linearGradient>
                    </defs>

                    {/* Tree Icon */}
                    <g transform="translate(35, 30)">
                      <motion.path
                        d="M25 10 L25 50 M15 20 L25 10 L35 20 M12 30 L25 17 L38 30 M10 40 L25 25 L40 40"
                        stroke="#10b981"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </g>
                  </svg>
                </motion.div>
              </motion.div>

              {/* Brand Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
              >
                GIBBON
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-emerald-600 font-medium mb-12 tracking-wider"
              >
                EXPERIENCE
              </motion.p>

              {/* Progress Bar */}
              <div className="w-64 md:w-80 mb-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Loading Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-gray-600 text-sm"
              >
                {progress < 30 && "Preparing your adventure..."}
                {progress >= 30 &&
                  progress < 60 &&
                  "Loading the forest canopy..."}
                {progress >= 60 &&
                  progress < 90 &&
                  "Setting up the ziplines..."}
                {progress >= 90 && "Almost there..."}
              </motion.p>

              {/* Animated Dots */}
              <div className="flex gap-2 mt-4">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="w-2 h-2 bg-emerald-500 rounded-full"
                  />
                ))}
              </div>
            </div>

            {/* Decorative Leaves */}
            <motion.div
              animate={{
                rotate: [0, 5, 0],
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-20 opacity-20"
            >
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C12 2 5 8 5 14C5 18.4183 8.58172 22 13 22C17.4183 22 21 18.4183 21 14C21 8 12 2 12 2Z"
                  fill="#10b981"
                />
              </svg>
            </motion.div>

            <motion.div
              animate={{
                rotate: [0, -5, 0],
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute bottom-32 right-32 opacity-20"
            >
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C12 2 5 8 5 14C5 18.4183 8.58172 22 13 22C17.4183 22 21 18.4183 21 14C21 8 12 2 12 2Z"
                  fill="#14b8a6"
                />
              </svg>
            </motion.div>
          </motion.div>
        ) : (
          /* Main Content After Loading */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-white flex items-center justify-center"
          >
            <div className="text-center">
              <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-6xl font-bold text-gray-900 mb-4"
              >
                Welcome!
              </motion.h1>
              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600"
              >
                Your adventure in the treetops awaits
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loading;
