"use client";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import logo from "/public/logo.png";
import ThemeSwitch from "./ThemeSwitch";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
const NavBar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about-me", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  const scrollToSection = (sectionId) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="fixed flex justify-center items-center w-full lg:top-7 z-20">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`lg:rounded-4xl  px-2 flex justify-between w-full lg:mx-10 text-black dark:text-white items-center md:text-lg py-2 lg:py-0 
        ${
          isScrolled ? "bg-[#c22085]/90 backdrop-blur-md " : "bg-[#c22085]/90"
        }`}
      >
        <div className="px-5">
          <a
            href="#home"
            className="md:text-4xl text-2xl dark:text-white text-black font-extrabold font-sans"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image src={logo} alt="l" width={60} />
            </motion.div>
          </a>
        </div>
        <div className="space-x-2 lg:flex items-center hidden px-4 md:py-4 py-2 ">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              className={`py-2 px-5 rounded-full transition duration-300  relative ${
                activeSection === item.id
                  ? "bg-[#e2b8aa]/90 text-black hover:bg-[#e2b8aa]/70 hover:text-black"
                  : "text-white hover:bg-[#e2b8aa]/40 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.8 }}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
            >
              {item.label}
            </motion.a>
          ))}
          <ThemeSwitch />
        </div>
        <div className="space-x-2 lg:hidden flex items-center">
          <motion.button
            className="p-2 rounded-md text-white hover:bg-[#e2b8aa]/70 hover:text-black transition-colors duration-300"
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </motion.button>
          <ThemeSwitch />
        </div>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 py-4 lg:hidden bg-[#c22085]/90 text-black dark:text-white shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col px-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`py-2 px-5 rounded-full transition duration-300  ${
                    activeSection === item.id
                      ? "bg-[#e2b8aa]/90 text-[#0c0c0c] hover:bg-[#e2b8aa]/70 hover:text-[#0c0c0c]"
                      : "text-white hover:bg-[#e2b8aa]/40 hover:text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </div>
  );
};
export default NavBar;
