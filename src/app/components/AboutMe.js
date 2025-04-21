import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBookOpen,
  faBrain,
  faCode,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
export default function AboutMe() {
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex flex-col min-h-screen items-center justify-center px-10 md:px-12 min-[1450px]:mx-40 "
    >
      {/* <div className="h-[160px]"></div> */}

      <h1 className="text-3xl sm:text-4xl font-semibold text-center">
        About Me
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 my-5 w-full">
        {/* Left Side - About Text */}
        <motion.div
          className="w-full lg:w-[40%]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#c22085] to-[#2d9687] opacity-50 rounded-lg transform rotate-3 scale-105"></div>
            <div className="absolute inset-0 dark:bg-[#343434] bg-fuchsia-50 rounded-lg transform -rotate-3 scale-105 shadow-2xl"></div>
            <div className="relative px-6 py-7 dark:text-[#e2b8aa] text-[#1D4755] text-justify text-sm sm:text-base leading-relaxed">
              I am a Computer Science undergraduate at Institute of Technology,
              Nirma University, with a strong focus on full-stack web
              development. I am passionate about building end-to-end web
              applications that are scalable, responsive, and user-friendly. My
              skillset spans both frontend and backend development — from
              crafting clean, modern UIs to designing efficient RESTful APIs and
              managing databases.
              <br />
              <br />I am proficient in working with modern technologies like
              Next.js, React.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
              I enjoy turning ideas into real-world web solutions, writing clean
              and maintainable code, and keeping up with the latest trends in
              web development. I thrive in collaborative environments and am
              always eager to learn, improve, and innovate.
            </div>
          </div>
        </motion.div>

        {/* Right Side - Cards */}
        <motion.div
          className="w-full lg:w-[60%]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-serif">
            {/* Card 1 */}
            <motion.div
              className="dark:bg-[#343434] bg-fuchsia-50 text-[#1D4755] dark:text-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group "
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <FontAwesomeIcon
                icon={faCode}
                className="p-3 bg-[#2d9687]/60 rounded text-lg"
              />
              <h3 className="font-semibold text-xl sm:text-2xl my-2">
                Problem Solver
              </h3>
              <p className="dark:text-[#e2b8aa] text-[#1D4755] text-sm sm:text-md">
                Approaching complex coding challenges with analytical thinking
                and persistence.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="dark:bg-[#343434] text-[#1D4755] dark:text-white bg-fuchsia-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <FontAwesomeIcon
                icon={faBookOpen}
                className="p-3 bg-[#2d9687]/60 rounded text-lg"
              />
              <h3 className="font-semibold text-xl sm:text-2xl my-2">
                Continuous Learner
              </h3>
              <p className="dark:text-[#e2b8aa] text-[#1D4755] text-sm sm:text-md">
                Passionate about staying updated with the latest technologies
                and best practices.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="dark:bg-[#343434] text-[#1D4755] dark:text-white bg-fuchsia-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group "
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <FontAwesomeIcon
                icon={faBrain}
                className="p-3 bg-[#2d9687]/60 rounded text-lg"
              />
              <h3 className=" font-semibold text-xl sm:text-2xl my-2">
                Creative Thinker
              </h3>
              <p className="dark:text-[#e2b8aa] text-[#1D4755] text-sm sm:text-md">
                Finding innovative solutions by thinking outside the box.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              className="dark:bg-[#343434] text-[#1D4755] dark:text-white bg-fuchsia-50  p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group "
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <FontAwesomeIcon
                icon={faPuzzlePiece}
                className="p-3 bg-[#2d9687]/60 rounded text-lg"
              />
              <h3 className=" font-semibold text-xl sm:text-2xl my-2">
                Adaptable
              </h3>
              <p className="dark:text-[#e2b8aa] text-[#1D4755] text-sm sm:text-md">
                Quickly adjusting to new tools, environments, and requirements
                while maintaining productivity and a positive mindset.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
