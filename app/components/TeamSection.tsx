"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Globe } from "lucide-react";
import sam from "../assets/team/sam.jpg";
import ali from "../assets/team/ali.jpg";
import amanu from "../assets/team/amanu.jpg";
import irfan from "../assets/team/irfan.jpg";

const teamMembers = [
  {
    name: "Sameer Ahmed",
    role: "Web Developer & ML Engineer",
    image: sam,
    portfolio: "https://shaikhsameer18.github.io/DollarPortfolio/",
    linkedin: "https://www.linkedin.com/in/sameerahmed08",
    github: "https://github.com/shaikhsameer18",
  },
  {
    name: "Ali Shaikh",
    role: "Web Developer & Graphic Designer",
    image: ali,
    portfolio: "https://mohd-ali.vercel.app/",
    linkedin: "https://www.linkedin.com/in/mohdali0",
    github: "https://github.com/mohdali03",
  },
  {
    name: "Amanullah Shaikh",
    role: "Web Developer & Digital Marketing Specialist",
    image: amanu,
    linkedin: "https://www.linkedin.com/in/mohd-amanullah-1282a2242",
    github: "https://github.com/shaikhmohdamanullah04",
  },
  {
    name: "Irfan Ansari",
    role: "Web Developer & AI Engineer",
    image: irfan,
    portfolio: "https://ansariirfan.vercel.app/",
    linkedin: "https://www.linkedin.com/in/ansari-irfan-/",
    github: "https://github.com/Ansari-Irfan-360",
  },
];

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="team" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredMember(index)}
              onHoverEnd={() => setHoveredMember(null)}
            >
              <div className="relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                {hoveredMember === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center space-x-4"
                  >
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        <Globe className="w-6 h-6" />
                        <span className="sr-only">Portfolio</span>
                      </a>
                    )}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        <Linkedin className="w-6 h-6" />
                        <span className="sr-only">LinkedIn</span>
                      </a>
                    )}
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-purple-400 transition-colors"
                      >
                        <Github className="w-6 h-6" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    )}
                  </motion.div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
