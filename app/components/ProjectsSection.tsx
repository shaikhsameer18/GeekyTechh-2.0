"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Import images
import event from "../assets/projectimg/event.png";
import portfolio from "../assets/projectimg/portfolio.png";
import alviraBags from "../assets/projectimg/alvira.png";
import codeEditor from "../assets/projectimg/codeeditor.png";

const projects = [
  {
    title: "Event Management System",
    image: event,
    description:
      "A comprehensive system for managing events, ticketing, and attendee information.",
    link: "https://event-mind.vercel.app/",
  },
  {
    title: "Portfolio",
    image: portfolio,
    description:
      "A sleek and responsive portfolio website showcasing various projects and skills.",
    link: "https://shaikhsameer18.github.io/DollarPortfolio/",
  },
  {
    title: "Alvira Bags",
    image: alviraBags,
    description:
      "E-commerce platform for a luxury bag brand with advanced filtering.",
    link: "https://alvirabag.vercel.app/",
  },
  {
    title: "Collaborative Code Editor",
    image: codeEditor,
    description:
      "A real-time collaborative code editor with syntax highlighting, live collaboration, and integrated version control.",
    link: "https://reflect-code.vercel.app/",
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(index)}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Click to view details
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg max-w-2xl w-full m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                {projects[selectedProject].title}
              </h3>
              <Image
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                width={600}
                height={400}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-gray-600 dark:text-gray-300 mb-2 mt-2">
                {projects[selectedProject].description}
                <br />
                <a
                  href={projects[selectedProject].link}
                  className="text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </p>
              <button
                className="mt-6 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300"
                onClick={() => setSelectedProject(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
