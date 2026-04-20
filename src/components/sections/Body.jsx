import React from "react";
import { Code, GitBranch, Link, Mail, ChevronDown } from "lucide-react";

import { motion } from "framer-motion";

const Body = () => {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 min-h-screen"
    >
      <motion.div
        variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}className="flex flex-col justify-center items-center gap-3 h-full px-4"
      >
        <motion.div variants={slideUp} className="inline-flex gap-2 bg-slate-800/50 border m-6 px-4 py-3 border-slate-700 rounded-full backdrop-blur-md text-slate-300">
          <span>👋</span>
          <span>Welcome to my portfolio</span>
        </motion.div>

        <motion.h1
          variants={slideUp}
          className="mt-2 flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Rudransh Upadhyay
        </motion.h1>

        <motion.div
          variants={slideUp}
          className="mt-2 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-lg sm:text-xl md:text-2xl font-medium text-center"
        >
          <span className="text-gray-300">Frontend Developer</span>
          <span className="hidden sm:inline text-blue-500">•</span>
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            React Specialist
          </span>
        </motion.div>

        <motion.div
          variants={slideUp}
          className="my-2 flex flex-col leading-relaxed text-gray-400 text-center max-w-2xl text-sm sm:text-base md:text-lg px-4 "
        >
          <span className="whitespace-pre-line">
            {`Crafting responsive and performant web applications with modern technologies.Passionate about clean code, user experience, and continuous learning.`}
          </span>
        </motion.div>
        {/* buttons */}
        <motion.div
          variants={slideUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 px-4 w-full"
        >
          {/* projects */}

          <button
            onClick={() => scrollToSection("projects")}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full text-white flex items-center gap-2 leading-relaxed font-semibold hover:shadow-lg hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 hover:scale-105 transition-all"
          >
            <Code size={18} /> View Work
          </button>

          {/* contact */}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 rounded-full border border-white/20 text-white flex items-center gap-2 leading-relaxed font-semibold hover:bg-white/5 hover:scale-105 transition-all"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Social icons container */}

        <motion.div variants={slideUp} className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mt-8 px-4">
          {/* GitHub */}
          <a
            href="https://github.com/rudransh100"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300">
              <GitBranch className="w-5 h-5 opacity-80 text-white" />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rudransh-upadhyay-674a21294/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300">
              <Link className="w-5 h-5 opacity-80 text-white" />
            </div>
          </a>

          {/* ARROW */}
          <ChevronDown className="w-5 h-5 text-slate-400 animate-bounce -mx-2" />

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Rudra_ansh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300">
              <Code className="w-5 h-5 opacity-80 text-white" />
            </div>
          </a>

          {/* Email */}
          <a href="mailto:rudranshupadhyay2004@gmail.com">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300">
              <Mail className="w-5 h-5 opacity-80 text-white" />
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Body;
