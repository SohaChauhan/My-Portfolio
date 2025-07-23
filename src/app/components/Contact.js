"use client";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { motion } from "motion/react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_9h5vgzs", "template_zg9cebd", form.current, {
        publicKey: "YlfYW5TYSslT8HwkO",
      })
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert(
            "There was an error whiling sendind the message. Please try again!"
          );
        }
      );
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
      className="flex flex-col min-h-fit items-center justify-center font-serif px-5 sm:px-10 lg:px-0 pt-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* <div className="h-[80px]"></div> */}
      <h1 className="text-4xl font-semibold text-center">Contact Me</h1>

      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-10 my-5">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={form}
          onSubmit={sendEmail}
          className="w-full lg:w-[35%] bg-gradient-to-br dark:from-[#343434]/80 from-[#fdf4ff] dark:to-[#242424]/90 to-[#fdf4ff]/90 p-6 rounded-lg flex flex-col justify-between gap-4 dark:shadow-none shadow-2xl dark:text-white text-[#1D4755]"
        >
          <h1 className="text-2xl">Get in Touch</h1>
          <div className="flex flex-col gap-1 w-full dark:text-white text-[#1D4755]">
            <label htmlFor="name" className="cursor-none">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border dark:border-slate-200 border-slate-400 rounded-lg py-3 px-5 outline-none bg-transparent dark:text-white text-[#1D4755]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="cursor-none">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full border dark:border-slate-200 border-slate-400 rounded-lg py-3 px-5 outline-none bg-transparent dark:text-white text-[#1D4755]"
            />
          </div>
          <div className="flex flex-col gap-1 ">
            <label htmlFor="subject" className="cursor-none">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="What is this regarding?"
              required
              className="w-full border dark:border-slate-200 border-slate-400 rounded-lg py-3 px-5 outline-none bg-transparent dark:text-white text-[#1D4755]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="cursor-none">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              required
              className="w-full border dark:border-slate-200 border-slate-400 rounded-lg py-3 px-5 outline-none bg-transparent dark:text-white text-[#1D4755]"
              rows="4"
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
            className="dark:bg-[#2d9687] bg-[#e9b171]  rounded-lg p-3 cursor-none"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="w-full lg:w-[50%] flex flex-col justify-between gap-4 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {[
            {
              icon: faLocationDot,
              title: "Location",
              content: "Ahmedabad, Gujarat, India, 382350",
            },
            {
              icon: faEnvelope,
              title: "Email",
              content: "sohachauhan2@gmail.com",
              link: "mailto:sohachauhan2@gmail.com",
            },
            {
              icon: faPhone,
              title: "Phone",
              content: "+91 97732 29757",
              link: "tel:+919773229757",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-br shadow-lg dark:text-white text-[#1D4755] dark:from-[#343434]/80 from-[#fdf4ff] dark:to-[#242424]/90 to-[#fdf4ff]/90 p-6 rounded-lg w-full flex gap-4 items-center"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="bg-[#c22085]/90 text-white text-lg rounded-lg p-3 w-4 "
              />
              <div className="flex flex-col">
                <p className="text-lg ">{item.title}</p>
                {item.link ? (
                  <a
                    href={item.link}
                    className="dark:text-[#e2b8aa] text-[#2d9687]  break-all"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="dark:text-[#e2b8aa] text-[#2d9687]">
                    {item.content}
                  </p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Socials */}
          <motion.div
            className="px-6 rounded-lg w-full flex gap-8 items-center lg:justify-start justify-center"
            // variants={containerVariants}
            // initial="hidden"
            // whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.a
              href="https://www.linkedin.com/in/sohachauhan/"
              target="_blank"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-[#c22085] text-4xl "
              />
            </motion.a>
            <motion.a
              href="https://github.com/SohaChauhan"
              target="_blank"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-[#c22085] text-4xl "
              />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/sohaaa.2004/"
              target="_blank"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-[#c22085] text-4xl "
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
