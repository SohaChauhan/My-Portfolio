"use client";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import Experience from "./components/Experience";
import { useState } from "react";
import { motion } from "motion/react";
import { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import LoadingThreeDotsJumping from "./components/Loading";
import ThemeSwitch from "./components/ThemeSwitch";
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      clearTimeout(timer);
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-radial dark:from-[#0c0c0c] dark:to-[#232323] from-[#efefef] to-white">
        <div className="flex flex-col items-center">
          <LoadingThreeDotsJumping />
        </div>
      </div>
    );
  }
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <NavBar activeSection={activeSection}></NavBar>
      <motion.main
        className="flex-grow"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        <motion.section id="home" variants={fadeInUp}>
          <HomePage />
        </motion.section>
        <motion.section id="about-me" variants={fadeInUp}>
          <AboutMe />
        </motion.section>
        <motion.section id="projects" variants={fadeInUp}>
          <Projects />
        </motion.section>
        <motion.section id="experience" variants={fadeInUp}>
          <Experience />
        </motion.section>
        <motion.section id="education" variants={fadeInUp}>
          <Education />
        </motion.section>
        <motion.section id="contact" variants={fadeInUp}>
          <Contact />
        </motion.section>
      </motion.main>
    </>
  );
}
