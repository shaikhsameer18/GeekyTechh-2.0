'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Lightbulb, Cpu, Layers, Briefcase } from 'lucide-react';

const services = [
  { 
    icon: Code, 
    title: 'Website Development', 
    description: 'Custom websites tailored to your needs',
  },
  { 
    icon: Palette, 
    title: 'Graphic Designing', 
    description: 'Eye-catching visuals for your brand',
  },
  { 
    icon: Lightbulb, 
    title: 'Career Guidance', 
    description: 'Expert advice for your tech career',
  },
  { 
    icon: Cpu, 
    title: 'IoT Project Development', 
    description: 'Innovative IoT solutions for your business',
  },
  { 
    icon: Layers, 
    title: 'UI/UX Designing', 
    description: 'User-centric design for optimal experiences',
  },
  { 
    icon: Briefcase, 
    title: 'Online Business Handling', 
    description: 'Comprehensive digital business management',
  },
];

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <service.icon className="w-12 h-12 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service.title}</h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 20 }}
                className="text-gray-600 dark:text-gray-300"
              >
                {service.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}