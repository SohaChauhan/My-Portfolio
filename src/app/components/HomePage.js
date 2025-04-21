"use client";
import Image from "next/image";
import Link from "next/link";
import useMeasure from "react-use-measure";
import girl from "/public/Girl.png";
import { motion, useMotionValue } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { animate } from "motion";
import { useEffect } from "react";
export default function HomePage() {
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const images = [
    "/logos/1.png",
    "/logos/2.png",
    "/logos/3.png",
    "/logos/4.png",
    "/logos/5.png",
    "/logos/6.png",
    "/logos/7.png",
    "/logos/8.png",
    "/logos/9.png",
    "/logos/10.png",
    "/logos/11.png",
    "/logos/12.png",
    "/logos/13.png",
    "/logos/14.png",
    "/logos/15.png",
    "/logos/20.png",
  ];
  useEffect(() => {
    let controls;
    let finalPosition = -screen.availWidth;
    controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 30,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return controls.stop;
  }, [xTranslation, width]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <div className="flex flex-col min-h-screen items-center justify-around font-serif px-4 sm:px-6 md:px-12">
      <div className="h-[80px]"></div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-around gap-10 my-5">
        {/* Left Side (Image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-[40%]  justify-center lg:flex hidden"
        >
          <Image
            src={girl}
            alt="Profile Image"
            height={425}
            className="object-contain max-h-[425px] w-auto "
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-[60%]  justify-center lg:hidden flex"
        >
          <Image
            src={girl}
            alt="Profile Image"
            height={150}
            className="object-contain max-h-[200px] w-auto "
          />
        </motion.div>
        {/* Right Side (Text & Links) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[60%] flex flex-col justify-between gap-2 text-center lg:text-left"
        >
          <motion.p className=" text-5xl md:text-6xl" variants={itemVariants}>
            Hi, I am
          </motion.p>
          <motion.p
            className="text-[#e9b171] font-bold text-5xl md:text-6xl"
            variants={itemVariants}
          >
            Soha Chauhan
          </motion.p>
          <motion.p
            className="text-[#2d9687] text-xl md:text-2xl px-2 lg:p-0"
            variants={itemVariants}
          >
            I love building responsive, user-friendly apps and constantly seek
            to grow through real-world projects.
          </motion.p>

          <motion.div
            className="flex flex-row gap-4 justify-center lg:justify-start items-center mt-2"
            variants={itemVariants}
          >
            <motion.a
              href="mailto:sohachauhan2@gmail.com"
              className="w-[150px] px-4 py-2  flex items-center justify-center bg-[#e2b8aa] hover:bg-[#d7a695] hover:font-semibold rounded-xl text-[#0c0c0c] "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              Contact Me
              <FontAwesomeIcon
                icon={faEnvelope}
                className="pl-2 text-[#c22085] "
              />
            </motion.a>

            <Link href="Resume.pdf">
              <motion.p
                className="w-[150px] px-4 py-2 flex items-center justify-center bg-[#353535] hover:bg-[#c22085] rounded-xl text-white border border-[#e2b8aa]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
              >
                Resume
                <FontAwesomeIcon icon={faDownload} className="pl-2" />
              </motion.p>
            </Link>
          </motion.div>

          <motion.div
            className="flex lg:gap-7 gap-4 lg:mt-3 md:mt-2 justify-center lg:justify-start lg:px-2"
            variants={itemVariants}
          >
            <motion.a
              href="https://www.linkedin.com/in/sohachauhan/"
              target="_blank"
              className="text-2xl sm:text-3xl"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </motion.a>
            <motion.a
              href="https://github.com/SohaChauhan"
              target="_blank"
              className="text-2xl sm:text-3xl"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <FontAwesomeIcon icon={faGithub} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scrolling Icon Section */}
      <motion.div
        className="overflow-hidden w-full relative"
        variants={itemVariants}
      >
        {/* Left Gradient */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-1/3 bg-gradient-to-r dark:from-[#0c0c0c] from-[#eeeeff] to-transparent z-10" />
        {/* Right Gradient */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l dark:from-[#0c0c0c] from-[#eeeeff] to-transparent z-10" />

        {/* Scrolling Icons */}
        <motion.div
          className="flex gap-4 py-2"
          ref={ref}
          style={{ x: xTranslation }}
        >
          {[...images, ...images, ...images].map((item, idx) => (
            <motion.img
              key={idx + 1}
              src={item}
              alt="tech"
              width={80}
              height={80}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="dark:bg-white dark:p-2 p-1 dark:rounded-2xl "
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
