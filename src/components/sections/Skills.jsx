import React from 'react'
import { Code, Terminal, Palette, Database } from "lucide-react";
import { motion } from 'framer-motion';

const Skills = () => {

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

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };


  return (
    <section id="skills" className="pt-28 pb-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 min-h-screen">


         <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col items-center justify-center mb-16 text-center px-4">

            <motion.span variants={slideUp} className='text-blue-500 tracking-wider text-xl'>MY EXPERTISE</motion.span>

            <motion.h2 variants={slideUp} className="text-2xl sm:text-3xl md:text-5xl mt-2 mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider font-semibold">Skills & Technologies</motion.h2>

            <motion.div variants={slideUp} className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></motion.div>

         </motion.div>

        {/* grid */}

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true,             margin: "-100px" }} variants={slideUp} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
          {/* grid-1 */}
            <div className="border border-slate-800 p-5 sm:p-6 rounded-2xl bg-slate-900 hover:border-slate-700  hover:-translate-y-2 transition-all duration-300 h-full ">

            {/* icon */}

            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 mb-4 text-white">
              <Code className="w-6 h-6"/>
            </div>

            <h3 className='text-white text-xl tracking-wider leading-relaxed mb-4'>Frontend</h3>

            {/* skills */}
            <ul className='space-y-2'>
              <li className='flex items-center gap-2 text-slate-400 text-sm'>
                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></span>
                React.js
              </li>

              <li className='flex items-center gap-2 text-slate-400 text-sm'>
                <span className='w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></span>
                JavaScript (ES6+)
                </li>
                
                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></span>
                  HTML5
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></span>
                  CSS3
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full'></span>
                  Responsive Design
                </li>
            </ul>
            </div>

            {/* grid-2 */}

            <div className="border border-slate-800 bg-slate-900 p-5 sm:p-6 rounded-2xl hover:border-slate-700  hover:-translate-y-2 transition-all duration-300 h-full ">

              {/* icons */}

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 mb-4">
                <Terminal className='w-6 h-6 text-white'/>
              </div>

              <h3 className='text-white text-xl leading-relaxed tracking-wider mb-2'>Programming</h3>

              <ul className='space-y-2'>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'></span>
                  C++
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'></span>
                  JavaScript
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'></span>
                  Python (Basic)
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'></span>
                  Data Structures
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'></span>
                  Algorithms
                </li>

              </ul>
            </div>

            {/* grid-3 */}

            <div className="border border-slate-800 bg-slate-900 p-5 sm:p-6 rounded-2xl hover:border-slate-700  hover:-translate-y-2 transition-all duration-300 h-full ">

              {/* icons */}

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-red-500 mb-4">
                <Palette className='w-6 h-6 text-white'/>
              </div>

              <h3 className='text-white text-lg leading-relaxed tracking-wider mb-2 '>Tools & Technologies</h3>

              <ul className='space-y-2'>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500'></span>
                  Git
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500'></span>
                  GitHub
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500'></span>
                  VS Code
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500'></span>
                  Chrome DevTools
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500'></span>
                  Vite
                </li>

              </ul>
            </div>


            {/* grid-4 */}

            <div className="border border-slate-800 bg-slate-900 p-5 sm:p-6 rounded-2xl hover:border-slate-700  hover:-translate-y-2 transition-all duration-300 h-full ">

              {/* icons */}

              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                <Database className='w-6 h-6 text-white'/>
              </div>

              <h3 className='text-white text-base sm:text-lg md:text-xl leading-relaxed tracking-wider mb-2'>Concepts</h3>

              <ul className='space-y-2'>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500'></span>
                  REST APIs
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500'></span>
                  DOM Manipulation
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500'></span>
                  Performance Optimization
                </li>

                <li className='flex items-center gap-2 text-slate-400 text-sm'>
                  <span className='w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500'></span>
                  Problem Solving
                </li>
                
              </ul>
            </div>

        </motion.div>

        {/* text */}

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true,             margin: "-100px" }} variants={slideUp} className="pt-12 md:pt-16 flex flex-col items-center justify-center text-center text-slate-400 px-4">
          <p>Continuously expanding my skill set through hands-on projects, coding challenges, and staying </p>
          <p>up-to-date with the latest web development trends and best practices.</p>
        </motion.div>
    </section>
  )
}

export default Skills