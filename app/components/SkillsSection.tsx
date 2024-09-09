"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGoogle,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiGraphql,
  SiTypescript,
  SiExpress,
} from "react-icons/si";

const skills = [
  {
    name: "HTML5",
    icon: FaHtml5,
    description: "Semantic markup and structure",
  },
  {
    name: "CSS3",
    icon: FaCss3Alt,
    description: "Styling and responsive design",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    description: "Dynamic and interactive web applications",
  },
  {
    name: "React.js",
    icon: FaReact,
    description: "Building user interfaces with components",
  },

  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "Server-side rendering and static site generation",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "Utility-first CSS framework for rapid UI development",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description: "Typed superset of JavaScript",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    description: "JavaScript runtime for server-side development",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    description: "Web application framework for Node.js",
  },
  {
    name: "MongoDB",
    icon: FaDatabase,
    description: "NoSQL database for modern applications",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    description: "Query language for your API",
  },

  {
    name: "Google Ads",
    icon: FaGoogle,
    description: "Online advertising and marketing",
  },
];

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Our Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <motion.div
                key={skill.name}
                className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredSkill(skill.name)}
                onHoverEnd={() => setHoveredSkill(null)}
              >
                <IconComponent
                  size={64}
                  className="mb-4 text-gray-800 dark:text-white"
                />
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
                  {skill.name}
                </h3>
                {hoveredSkill === skill.name && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-center text-gray-600 dark:text-gray-300"
                  >
                    {skill.description}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
