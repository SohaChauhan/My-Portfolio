import Image from "next/image";
import Link from "next/link";
import blinklink from "/public/BlinkLink.png";
import sohafashion from "/public/sohafashion.png";
import project3 from "/public/FireDetection.png";
import AINotesApp from "/public/AINotesApp.png";
import finhelper from "/public/FinHelper.png";
import Spenza from "/public/Spenza.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";
import Portfolio from "../page";
export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,

        // when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };
  return (
    <motion.div
      className="flex flex-col min-h-fit items-center justify-center px-4 sm:px-6 lg:px-24 pt-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* <div className="h-[80px]"></div> */}
      <h1 className="text-4xl font-semibold text-center">Projects</h1>
      <div className="w-full my-5 flex justify-center items-baseline">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full sm:px-0 px-5 sm:max-w-[70%] lg:max-w-[100%]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Project Card 1 */}
          <motion.div
            className="dark:bg-[#343434] bg-fuchsia-50 dark:text-white text-[#1D4755] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <motion.div className="relative">
              <Image
                src={Spenza}
                alt="Spenza"
                className="rounded-t-lg w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t dark:from-[#343434]/80 from-fuchsia-50/50 to-transparent rounded-t-lg"></div>
            </motion.div>
            <div className="px-6 py-4 flex flex-col justify-between flex-grow">
              <div>
                <h1 className="text-2xl text-[#e9b171] font-bold mb-2">
                  Spenza -Expense Tracker App
                </h1>
                <p className="mb-4 text-justify">
                  Full-stack app for tracking expenses, setting budgets, and
                  visualizing spending with charts. Features secure login,
                  real-time management, and a mobile-friendly UI.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "NextJS",
                    "Tailwind CSS",
                    "MongoDB",
                    "Mongoose",
                    "NextAuthJS",
                    "RechartJS",
                    "Vercel",
                    "Git",
                    "GitHub",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#c22085] text-white py-1 px-2 text-xs rounded-2xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="https://spenza.vercel.app/"
                  target="_blank"
                  className="text-[#2d9687] text-lg font-semibold"
                >
                  Visit Live{" "}
                  <FontAwesomeIcon icon={faExternalLink} className="text-md" />
                </Link>
                <Link
                  href="https://github.com/SohaChauhan/expense-tracker-app"
                  target="_blank"
                  className="text-[#2d9687] text-lg font-semibold"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="dark:bg-[#343434] bg-fuchsia-50 dark:text-white text-[#1D4755]  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="relative">
              <Image
                src={project3}
                alt="Fire Detection App"
                className="rounded-t-lg w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t dark:from-[#343434]/80 from-fuchsia-50/50 to-transparent rounded-t-lg"></div>
            </div>
            <div className="px-6 py-4 flex flex-col justify-between flex-grow">
              <div>
                <h1 className="text-2xl text-[#e9b171] font-bold mb-2">
                  Fire and Smoke Detection & Alert System
                </h1>
                <p className="mb-4 text-justify">
                  A real-time web-based system that detects fire or smoke in
                  uploaded videos. The app processes the video, highlights
                  affected regions, and sends automated SMS alerts in case of an
                  anomaly.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "Streamlit",
                    "Python",
                    "OpenCV",
                    "YOLOv8",
                    "DeepSort",
                    "TwilioAPI",
                    "Git",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#c22085] text-white py-1 px-2 text-xs rounded-2xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="https://fire-and-smoke-detection-and-alert-system.streamlit.app/"
                  target="_blank"
                  className="text-[#2d9687] text-lg font-semibold"
                >
                  Visit Live{" "}
                  <FontAwesomeIcon icon={faExternalLink} className="text-md" />
                </Link>
                <Link
                  href="https://github.com/SohaChauhan/Fire-and-Smoke-Detection-and-Alert-System"
                  target="_blank"
                  className="text-[#2d9687] text-lg font-semibold"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="dark:bg-[#343434] bg-fuchsia-50 dark:text-white text-[#1D4755] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <motion.div className="relative">
              <Image
                src={AINotesApp}
                alt="AI Notes App"
                className="rounded-t-lg w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t dark:from-[#343434]/80 from-fuchsia-50/50 to-transparent rounded-t-lg"></div>
            </motion.div>
            <div className="px-6 py-4 flex flex-col justify-between flex-grow">
              <div>
                <h1 className="text-2xl text-[#e9b171] font-bold mb-2">
                  AI Notes App
                </h1>
                <p className="mb-4 text-justify">
                  A sleek, modern note-taking app with Responsive & accessible
                  UI and Light/Dark mode toggle, powered by AI. Features
                  include: Add, view, favorite, and summarize your notes with
                  the help of Grok AI API.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "NextJS",
                    "Tailwind CSS",
                    "Supabase(Auth + Database)",
                    "Shadcn/ui",
                    "React Query",
                    "Vercel",
                    "Git",
                    "Grok API",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#c22085] text-white py-1 px-2 text-xs rounded-2xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="https://ai-notes-app-soha.vercel.app/"
                  target="_blank"
                  className="text-[#2d9687] text-lg font-semibold"
                >
                  Visit Live{" "}
                  <FontAwesomeIcon icon={faExternalLink} className="text-md" />
                </Link>
                <Link
                  href="https://github.com/SohaChauhan/ai-notes-app"
                  target="_blank"
                  className="text-[#2d9687] text-lg font-semibold"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="dark:bg-[#343434] bg-fuchsia-50 dark:text-white text-[#1D4755] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <motion.div className="relative">
              <Image
                src={blinklink}
                alt="BlinkLink"
                className="rounded-t-lg w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t dark:from-[#343434]/80 from-fuchsia-50/50 to-transparent rounded-t-lg"></div>
            </motion.div>
            <div className="px-6 py-4 flex flex-col justify-between flex-grow">
              <div>
                <h1 className="text-2xl text-[#e9b171] font-bold mb-2">
                  BlinkLink
                </h1>
                <p className="mb-4 text-justify">
                  A clone of LinkTree - responsive and easy to use app. Features
                  include: Login/Signup with email/Google, personalized page
                  setup with a custom URL to manage various social and website
                  links.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "NextJS",
                    "Tailwind CSS",
                    "MongoDB",
                    "ExpressJS",
                    "NextAuthJS",
                    "AWS",
                    "Vercel",
                    "Git",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#c22085] text-white py-1 px-2 text-xs rounded-2xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="https://blinklink-smoky.vercel.app/"
                  target="_blank"
                  className="text-[#2d9687] text-lg font-semibold"
                >
                  Visit Live{" "}
                  <FontAwesomeIcon icon={faExternalLink} className="text-md" />
                </Link>
                <Link
                  href="https://github.com/SohaChauhan/blinklink"
                  target="_blank"
                  className="text-[#2d9687] text-lg font-semibold"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="dark:bg-[#343434] bg-fuchsia-50 dark:text-white text-[#1D4755]  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <div className="relative">
              <Image
                src={sohafashion}
                alt="Soha Fashion"
                className="rounded-t-lg w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t dark:from-[#343434]/80 from-fuchsia-50/50 to-transparent rounded-t-lg"></div>
            </div>
            <div className="px-6 py-4 flex flex-col justify-between flex-grow">
              <div>
                <h1 className="text-2xl text-[#e9b171] font-bold mb-2">
                  Website for Soha Fashion
                </h1>
                <p className="mb-4 text-justify">
                  A responsive e-commerce website with an admin dashboard for
                  product management including upload, edit, delete, and
                  categorization features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {[
                    "NextJS",
                    "Tailwind CSS",
                    "MongoDB",
                    "ExpressJS",
                    "Amplify",
                    "AWS",
                    "Git",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="bg-[#c22085] text-white py-1 px-2 text-xs rounded-2xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="https://sohafashion.co.in/"
                  target="_blank"
                  className="text-[#2d9687] text-lg font-semibold"
                >
                  Visit Live{" "}
                  <FontAwesomeIcon icon={faExternalLink} className="text-md" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="dark:bg-[#343434] bg-fuchsia-50 dark:text-white text-[#1D4755] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col"
            variants={itemVariants}
            whileHover={{ y: -10 }}
          >
            <motion.div className="relative">
              <Image
                src={finhelper} // Placeholder image, update if you have a FinHelper logo
                alt="FinHelper App"
                className="rounded-t-lg w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t dark:from-[#343434]/80 from-fuchsia-50/50 to-transparent rounded-t-lg"></div>
            </motion.div>
            <div className="px-6 py-4 flex flex-col justify-between flex-grow">
              <div>
                <h1 className="text-2xl text-[#e9b171] font-bold mb-2">
                  FinHelper - CVP Analysis Tool
                </h1>
                <p className="mb-4 text-justify">
                  FinHelper is a simple CVP analysis tool for managing products,
                  visualizing break-even points, and exporting results. Fast,
                  modern, and easy to use.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["NextJS", "Tailwind CSS", "Vercel", "Git", "Github"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="bg-[#c22085] text-white py-1 px-2 text-xs rounded-2xl"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center">
                <Link
                  href="https://finhelper.vercel.app"
                  target="_blank"
                  className="text-[#2d9687] text-lg font-semibold"
                >
                  Visit Live{" "}
                  <FontAwesomeIcon icon={faExternalLink} className="text-md" />
                </Link>
                <Link
                  href="https://github.com/SohaChauhan/FinHelper"
                  target="_blank"
                  className="text-[#2d9687] text-lg font-semibold"
                >
                  <FontAwesomeIcon icon={faGithub} className="text-2xl" />
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
