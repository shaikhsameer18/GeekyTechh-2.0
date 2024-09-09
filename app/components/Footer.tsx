import Image from "next/image";
import { Instagram, Linkedin, Github } from "lucide-react";
import Logo from "../assets/logo.jpg"; // Adjust the path according to your project structure

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col">
            <Image
              src={Logo}
              alt="Geeky Techh Logo"
              width={150}
              height={80}
              className="object-contain"
            />
            <p className="text-gray-400">Bringing your digital ideas to life</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#services"
                  className="hover:text-purple-400 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-purple-400 transition duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-purple-400 transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-purple-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-2">Connect with Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/geekytechh"
                target="blank"
                className="hover:text-purple-400 transition duration-300"
              >
                <Github />
              </a>
              <a
                href="https://www.linkedin.com/company/geekytechh/"
                target="blank"
                className="hover:text-purple-400 transition duration-300"
              >
                <Instagram />
              </a>
              <a
                href="https://www.instagram.com/geeky.techh/"
                target="blank"
                className="hover:text-purple-400 transition duration-300"
              >
                <Linkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Geeky Techh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
