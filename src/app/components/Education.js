import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useTransform, useSpring } from "motion/react";
import { useState } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
export default function Education() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

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
      className="flex flex-col min-h-fit items-center justify-center font-serif px-6 sm:px-10 lg:px-24 xl:px-40 pt-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {/* <div className="h-[80px]"></div> */}
      <h1 className="text-4xl font-semibold text-center">Education</h1>
      <div className="my-5 flex flex-col justify-center items-center w-full">
        <motion.div
          className="grid grid-cols-1 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* BTech */}
          <motion.div
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-white p-6 space-y-2 w-full"
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            style={{
              background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px,rgba(45, 150, 135,0.8),rgba(45, 150, 135,0.7) 80%)`,
              transition: "background 0.1s ease",
            }}
          >
            <h1 className="text-xl font-semibold">
              B.Tech., Major in Computer Science and Engineering, Minor in
              Accounting and Finance
            </h1>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="pr-2" />
              Institute of Technology, Nirma University, Ahmedabad
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} className="pr-2" />
              Sep 2022 - June 2026
            </p>
            <p>CGPA: 8.27/10</p>
          </motion.div>

          {/* 12th */}
          <motion.div
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-white p-6 space-y-2 w-full "
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            style={{
              background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px,rgba(45, 150, 135,0.8),rgba(45, 150, 135,0.7) 80%)`,
              transition: "background 0.1s ease",
            }}
          >
            <h1 className="text-xl font-semibold">GSEB 12th Science - PCM</h1>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="pr-2" />
              Hosanna Mission School, Ahmedabad
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} className="pr-2" />
              June 2021 - April 2022
            </p>
            <p>Percentage: 85.54%</p>
          </motion.div>

          {/* 10th */}
          <motion.div
            className=" rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-white p-6 space-y-2 w-full"
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            style={{
              background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px,rgba(45, 150, 135,0.8),rgba(45, 150, 135,0.7) 80%)`,
              transition: "background 0.1s ease",
            }}
          >
            <h1 className="text-xl font-semibold">GSEB 10th</h1>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="pr-2" />
              Hosanna Mission School, Ahmedabad
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} className="pr-2" />
              June 2019 - April 2020
            </p>
            <p>Percentage: 87.00%</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
