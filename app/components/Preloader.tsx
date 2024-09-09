"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "../assets/logo.jpg";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show preloader for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={Logo}
              alt="Geeky Techh Logo"
              className="w-auto h-auto max-w-full max-h-full"  // Maintain aspect ratio
              sizes="(max-width: 768px) 50vw, 100vw"           // Optional responsive sizes
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
