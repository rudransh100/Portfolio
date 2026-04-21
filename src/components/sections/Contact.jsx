import React from "react";
import { Mail, Phone, MapPin, Link, Code, GitBranch, Send } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {

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
      id="contact"
      className="pt-28 pb-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 min-h-screen flex flex-col"
    >
      <motion.div  variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="flex flex-col items-center justify-center mb-16 text-center px-4">

        <motion.span variants={slideUp} className="text-blue-500 tracking-wider text-xl">
          Get in Touch
        </motion.span>

        <motion.h2 variants={slideUp} className="text-lg sm:text-xl md:text-2xl sm:text-3xl md:text-5xl mt-2 mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wider font-semibold">
          Let's Work Together
        </motion.h2>

        <motion.div variants={slideUp} className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400"></motion.div>

      </motion.div>

      {/* grid */}

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-stretch mb-12">
        {/* grid-1 */}

        <motion.div variants={slideLeft} className="space-y-8">
          <div className="mb-4">
            <h3 className="text-lg sm:text-xl md:text-2xl mb-4 text-white flex justify-center items-center sm:block">Contact Information</h3>
            <p className="text-slate-400 mb-6 text-center sm:text-left">
              Feel free to reach out for collaborations, opportunities, or just
              a friendly chat about technology!
            </p>
          </div>

          <div className="space-y-4">
            {/* EMAIL */}
            <a
              href="mailto:rudranshupadhyay2004@gmail.com"
              className="block p-4 border border-slate-800 bg-slate-900/50 rounded-xl 
                 hover:border-slate-700 hover:translate-x-2.5 
                 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center 
                        bg-gradient-to-br from-blue-500 to-cyan-500 
                        rounded-xl text-white"
                >
                  <Mail className="w-6 h-6" />
                </div>

                <div className="flex flex-col">
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="text-white group-hover:text-blue-400 transition-colors">
                    rudranshupadhyay2004@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* PHONE */}
            <a
              href="tel:+91-9336188062"
              className="block p-4 border border-slate-800 bg-slate-900/50 rounded-xl 
                 hover:border-slate-700 hover:translate-x-2.5 
                 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center 
                        bg-gradient-to-br from-purple-500 to-pink-500 
                        rounded-xl text-white"
                >
                  <Phone className="w-6 h-6" />
                </div>

                <div className="flex flex-col">
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="text-white group-hover:text-blue-400">
                    +91-9336188062
                  </p>
                </div>
              </div>
            </a>

            {/* LOCATION */}
            <a
              href="https://www.google.com/maps?q=Ghaziabad,UP,India"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-slate-800 bg-slate-900/50 rounded-xl 
                 hover:border-slate-700 hover:translate-x-2.5 
                 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 flex items-center justify-center 
                        bg-gradient-to-br from-orange-500 to-red-500 
                        rounded-xl text-white"
                >
                  <MapPin className="w-6 h-6" />
                </div>

                <div className="flex flex-col">
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="text-white group-hover:text-blue-400">
                    Ghaziabad, UP, India
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="flex-col">
            <h3 className="text-white text-lg mb-4">Follow Me</h3>

            <div className="flex flex-wrap gap-4">
              {/* linkedin */}

              <a
                href="https://www.linkedin.com/in/rudransh-upadhyay-674a21294/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg border border-slate-800 bg-slate-900 flex justify-center items-center text-slate-400 hover:border-blue-400 hover:rotate-5 transition-all duration-300 hover:scale-110 group"
              >
                <Link className="w-6 h-6 group-hover:text-blue-400" />
              </a>

              {/* github */}

              <a
                href="https://github.com/rudransh100"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg border border-slate-800 bg-slate-900 flex justify-center items-center text-slate-400 hover:border-blue-400 hover:rotate-5 transition-all duration-300 hover:scale-110 group"
              >
                <GitBranch className="w-6 h-6 group-hover:text-blue-400" />
              </a>

              {/* leetcode */}

              <a
                href="https://leetcode.com/u/Rudra_ansh/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg border border-slate-800 bg-slate-900 flex justify-center items-center text-slate-400 hover:border-blue-400 hover:rotate-5 transition-all duration-300 hover:scale-110 group"
              >
                <Code className="w-6 h-6 group-hover:text-blue-400" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* grid-2 */}

        <motion.div variants={slideRight} className="relative">
          {/* blacklight */}

          <div className="absolute inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-65"></div>

          <form
            onSubmit={async (e) => {
              e.preventDefault();

              const formData = new FormData(e.target);

              const res = await fetch("https://formspree.io/f/xyklpdoy", {
                method: "POST",
                body: formData,
                headers: {
                  Accept: "application/json",
                },
              });

              if (res.ok) {
                alert("Message sent successfully ✅");
                e.target.reset();
              } else {
                alert("Something went wrong ❌");
              }
            }}
            className="relative bg-slate-900 p-5 sm:p-6 md:p-8 rounded-2xl border border-slate-800 space-y-6"
          >
            <label htmlFor="name" className="block text-sm mb-2 text-slate-300">
              Your Name
            </label>

            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 border border-slate-700 bg-slate-800/50 rounded-xl text-slate-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
              placeholder="John Doe"
            />

            <label
              htmlFor="email"
              className="text-slate-300 block mb-2 text-sm"
            >
              Your Email
            </label>

            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-300 focus:outline-none focus:border-blue-500 transition-all duration-300"
              placeholder="john@gmail.com"
            />

            <label
              htmlFor="message"
              className="text-slate-300 mb-2 text-sm block"
            >
              Message
            </label>

            <textarea
              name="message"
              id="message"
              rows="5"
              className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/50 text-slate-300 resize-none focus:outline-none focus:border-blue-500 transition-all duration-300"
              placeholder="Your message here..."
            ></textarea>

            <button className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 leading-relaxed flex justify-center items-center gap-2 hover:from-blue-500 hover:to-purple-500 hover:scale-102 transition-all duration-300">
              <Send />
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>

      <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}
      variants={slideUp} className=" text-center text-slate-400 my-12 px-4">
        <span>
          💼 Open to internships and entry-level positions • 🚀 Available to
          start immediately • 📍 Based in Ghaziabad, UP
        </span>
      </motion.div>

      <footer className="w-full border-t border-slate-800 bg-slate-950/50 backdrop-blur-sm">
        <div className=" max-w-6xl mx-auto py-8 px-6 text-center text-slate-500">
          <p>© 2026 Rudransh Upadhyay. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
