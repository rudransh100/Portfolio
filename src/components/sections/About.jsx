import React from "react";

import { Zap, Target, User, Award } from "lucide-react";

import { motion } from "framer-motion";



const About = () => {

  // slide-up

  const slideUp = {
    hidden:{
      opacity:0,
      y:60
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        duration:0.6,
        ease: "easeOut"
      },
    },
  };

  // left

  const slideLeft = {
    hidden: {
      opacity:0,
      x:-60,
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        duration:0.7,
        ease:"easeOut",
      },
    },
  };

  // right

  const slideRight ={
    hidden:{
      opacity:0,
      x:50,
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
    hidden:{},
    show:{
      transition:{
        staggerChildren: 0.15,
      },
    },
  };


  return (
    <section
      id="about"
      className="pt-28 pb-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 min-h-screen"
    >
      <motion.div variants={container} initial='hidden' whileInView='show' viewport={{once:true}} className="flex flex-col justify-center items-center mb-16 text-center px-4">

        <motion.span variants={slideUp}  className="text-blue-500 tracking-wider text-xl">ABOUT ME</motion.span>
        <motion.h2  variants={slideUp} className="text-2xl sm:text-3xl md:text-5xl mt-2 mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold">
          Who I Am
        </motion.h2>
        <motion.div variants={slideUp} className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></motion.div>

      </motion.div>
      {/* making grid  */}

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

        {/* backlight */}

        <motion.div variants={slideLeft} className="relative group">

          {/* BACK LIGHT (very subtle, not spread) */}

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 0.25 }} transition={{ duration: 0.6 }} className="absolute inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-500"></motion.div>

          {/* CARD */}
          <div
            className="relative z-10 p-5 sm:p-6 md:p-8 rounded-2xl 
                  bg-slate-900 border border-slate-800 px-4"
          >
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              I'm a passionate
              <span className="text-blue-400">Frontend Developer</span> skilled
              in React.js, JavaScript, HTML5, and CSS3. With a strong foundation
              in building responsive web applications and optimizing
              performance, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              Currently pursuing
              <span className="text-purple-500">
                B.Tech in Computer Science & Engineering
              </span>
              at IMS Engineering College, AKTU. I'm actively seeking internship
              or entry-level software engineering roles where I can contribute
              and grow.
            </p>
          </div>
        </motion.div>

        {/* right side */}

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
        variants={slideRight} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">

          {/* grid-1 */}
          <div
            className="p-5 sm:p-6 rounded-2xl 
                  bg-slate-900/50 backdrop-blur-sm
                  border border-slate-800 leading-relaxed hover:border-blue-400 hover:scale-105 transition-all duration-300"
          >
            {/* icon */}

            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4">
              <Zap className="text-blue-400 w-6 h-6" />
            </div>
            <h1 className="mb-2 text-white font-semibold">Problem Solving</h1>
            <span className="text-gray-400 text-sm">
              Strong debugging and algorithmic thinking skills
            </span>
          </div>

          {/* grid-2 */}
          <div
            className="p-5 sm:p-6 rounded-2xl 
                  bg-slate-900/50 backdrop-blur-sm
                  border border-slate-800 leading-relaxed hover:border-blue-400 hover:scale-105 transition-all duration-300"
          >
            {/* icon */}

            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4">
              <Target className="text-blue-400 w-6 h-6" />
            </div>

            <h1 className="mb-2 text-white font-semibold">Quick Learner</h1>
            <span className="text-gray-400 text-sm">
              Adaptable and eager to learn new technologies
            </span>
          </div>

          {/* grid-3 */}
          <div 
            className="p-6 rounded-2xl 
                  bg-slate-900/50 backdrop-blur-sm
                  border border-slate-800 leading-relaxed hover:border-blue-400 hover:scale-105 transition-all duration-300"
          >
            {/* icon */}

            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4">
              <User className="text-blue-400 w-6 h-6" />
            </div>

            <h1 className="mb-2 text-white font-semibold">Team Player</h1>
            <span className="text-gray-300 text-sm">
              Excellent collaboration and communication
            </span>
          </div>

          {/* grid-4 */}

          <div
            className="p-6 rounded-2xl 
                  bg-slate-900/50 backdrop-blur-sm
                  border border-slate-800 leading-relaxed hover:border-blue-400 hover:scale-105 transition-all duration-300"
          >
            {/* icon */}

            <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg mb-4">
              <Award className="text-blue-400 w-6 h-6" />
            </div>

            <h1 className="mb-2 text-white font-semibold">Performance Focus</h1>
            <span className="text-gray-300 text-sm">
              Committed to optimization and best practices
            </span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="w-full mt-10 flex justify-center px-4">
        <div className="w-full max-w-6xl px-4">
          <motion.div variants={slideUp}
            className="w-full p-6 rounded-2xl 
                    bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
                    border border-white/10
                    backdrop-blur-md
                    text-center leading-relaxed"
          >
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed tracking-wide">
              <span className="text-blue-400 font-semibold">100+</span> LeetCode
              problems solved
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-purple-400 font-semibold">Active</span> in
              coding contests & hackathons
              <span className="mx-2 text-gray-500">•</span>
              <span className="text-blue-400 font-semibold">
                Continuous
              </span>{" "}
              learner
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
