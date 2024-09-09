"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roles = [
  "Web Developer",
  "UI/UX Designer",
  "IoT Specialist",
  "Graphic Designer",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const currentRole = roles[roleIndex];

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    } else {
      timer = setTimeout(
        () => {
          setDisplayText(
            currentRole.substring(
              0,
              isDeleting ? displayText.length - 1 : displayText.length + 1
            )
          );
        },
        isDeleting ? 50 : 150
      );
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 dark:from-purple-700 dark:to-purple-900"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
      <div className="relative text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span className="mb-10">
            Looking for a <br />
          </span>
          {/* <span style={{ color: "#333333"  }}>{displayText}</span> */}
          {displayText}
          <span className="animate-blink">|</span>
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Bringing your digital ideas to life with cutting-edge technology
        </p>
        <a
          href="#contact"
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-300 hover:text-purple-700 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
}
