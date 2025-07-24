import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useTransform, useSpring } from "motion/react";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Experience() {
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
      <h1 className="text-4xl font-semibold text-center">Experience</h1>
      <div className="my-5 flex flex-col justify-center items-center w-full">
        <motion.div
          className="grid grid-cols-1 gap-6 w-full"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Internship Experience */}
          <motion.div
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 text-white p-6 space-y-2 w-full"
            variants={itemVariants}
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.2 }}
            style={{
              background: `radial-gradient(1000px circle at ${mousePosition.x}px ${mousePosition.y}px,rgba(233, 177, 113,0.8),rgba(233, 177, 113,0.7) 80%)`,
              transition: "background 0.1s ease",
            }}
          >
            <h1 className="text-xl font-semibold">Web Developer Trainee</h1>
            <p>
              <FontAwesomeIcon icon={faLocationDot} className="pr-2" />
              TechForbs Services Pvt Ltd
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} className="pr-2" />
              02 May, 2025 - 04 July, 2025
            </p>
            <p>
              Completed a full-time internship at TechForbs. Gained hands-on experience in real-world software development and industry-standard workflows, enhancing technical skills and bridging academic learning with professional practices.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">Front-End Web Development</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">WordPress</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">Web Design</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">Web Services</span>
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-xs font-semibold">Shopify</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
