import React from "react";
import { GraduationCap, Trophy, Code } from "lucide-react";
import { motion } from "framer-motion";

const Education = () => {
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // slide-up

  const slideUp = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // left

  const slideLeft = {
    hidden: {
      opacity:0,
      x:-80,
      scale: 0.96,
    },
    show:{
      opacity:1,
      x:0,
      
      transition:{
        duration:0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // right

  const slideRight ={
    hidden:{
      opacity:0,
      x:80,
      scale: 0.96,
    },
    show:{
      opacity:1,
      x:0,
      scale: 1,
      transition:{
        duration:0.7,
        ease:[0.22, 1, 0.36, 1],
      },
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
      id="education"
      className="pt-28 pb-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 min-h-screen"
    >
      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col items-center justify-center mb-16">

        <motion.span variants={slideUp} className="text-blue-500 tracking-wider text-base sm:text-lg md:text-xl">
          BACKGROUND
        </motion.span>

        <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-5xl mt-2 mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider font-semibold">
          Education & Achievements
        </motion.h2>

        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></div>
      </motion.div>

      {/* grid */}

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} variants={slideLeft} className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch mb-12">
        {/* grid-1 */}

        <div className="relative group">
          {/* glow */}

          <div className="absolute inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-500"></div>

          <div className=" relative h-full p-5 sm:p-6 md:p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700">
            {/* icon */}

            <div className="flex flex-row items-start gap-4 mb-6">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl mb-4 text-white">
                <GraduationCap className="w-8 h-8" />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg md:text-xl mb-1 text-white">
                  B.Tech in Computer Science & Engineering
                </h3>

                <p className="text-blue-400">IMS Engineering College, AKTU</p>
              </div>
            </div>

            <div className="flex flex-row gap-4">
              <div className="flex flex-row justify-center items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="text-slate-400">2023 - 2027</span>
              </div>

              <div className="flex flex-row justify-center items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                <span className="text-slate-400">Ghaziabad, UP</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800"></div>

            <p className="text-slate-400">
              Pursuing comprehensive education in computer science with focus on
              software development, algorithms, and modern web technologies.
            </p>
          </div>
        </div>

        <motion.div variants={slideRight} className="space-y-4">

          <div className="p-5 sm:p-6 border border-slate-800 bg-slate-900/50 rounded-xl hover:border-slate-700 group hover:translate-x-2.5 transition-all duration-300">
            {/* icon */}

            <div className="flex flex-row items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-orange-500 to-red-500 rounded-xl text-white">
                <Code className="w-6 h-6" />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg md:text-xl mb-2 text-white group-hover:text-blue-400 transition-colors">
                  100+ LeetCode Problems
                </h3>

                <p className="text-slate-400 text-sm">
                  Solved using C++ with focus on Data Structures & Algorithms
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6 border border-slate-800 bg-slate-900/50 rounded-xl hover:border-slate-700 hover:translate-x-2.5 transition-all duration-300 group">
            {/* icon */}

            <div className="flex flex-row items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl text-white">
                <Code className="w-6 h-6" />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg md:text-xl mb-2 text-white group-hover:text-blue-400 transition-colors">
                  Coding Contests
                </h3>

                <p className="text-slate-400 text-sm">
                  Active participation in hackathons and competitive programming
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6 border border-slate-800 bg-slate-900/50 rounded-xl hover:border-slate-700 hover:translate-x-2.5 transition-all duration-300 group">
            {/* icon */}

            <div className="flex flex-row items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl text-white">
                <Code className="w-6 h-6" />
              </div>

              <div className="flex flex-col">
                <h3 className="text-base sm:text-lg md:text-xl mb-2 text-white group-hover:text-blue-400 transition-colors">
                  Continuous Learning
                </h3>

                <p className="text-slate-400 text-sm">
                  Constantly improving problem-solving and development skills
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} variants={slideUp} className="border border-slate-700 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-5 sm:p-6 md:p-8 mx-4 md:mx-8">
        <div className="text-center">
          <h3 className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-2xl mb-4 font-semibold leading-relaxed">
            Looking for Opportunities
          </h3>

          <p className="text-slate-400 max-w-2xl mx-auto mb-6">
            Actively seeking internship or entry-level software engineering
            roles where I can apply my skills, learn from experienced
            professionals, and contribute to meaningful projects.
          </p>

          <button
            onClick={() => scrollToSection("contact")}
            className="inline-flex items-center w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full text-white flex items-center gap-2 leading-relaxed font-semibold hover:shadow-lg hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 hover:scale-105 transition-all"
          >
            Let's Connect
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
