import React from "react";

import {Zap, Target, User, Award} from "lucide-react";

import {motion} from "framer-motion";

const About = () => {
  const scrollto = (id) => {
    document.getElementById(id)?.scrollIntoView({behavior: "smooth", block:"start"})
  }
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
            opacity: 0,
            x: -60,
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut",
            },
        },
    };

    // right

    const slideRight = {
        hidden: {
            opacity: 0,
            x: 50,
            scale: 0.96,
        },
        show: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
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
            id="about"
            className="pt-28 pb-20 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 min-h-screen"
        >
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="flex flex-col justify-center items-center mb-16 text-center px-4"
            >
                <motion.span variants={slideUp} className="text-blue-500 tracking-wider text-xl">
                    ABOUT ME
                </motion.span>
                <motion.h2
                    variants={slideUp}
                    className="text-2xl sm:text-3xl md:text-5xl mt-2 mb-4 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text font-semibold"
                >
                    Who I Am
                </motion.h2>
                <motion.div
                    variants={slideUp}
                    className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500"
                ></motion.div>
            </motion.div>
            {/* making grid  */}

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                className="max-w-4xl mx-auto px-4 flex flex-col gap-8 items-center"
            >
                {/* backlight */}

                <motion.div variants={slideUp} className="relative">
                    {/* BACK LIGHT (very subtle, not spread) */}

                    <motion.div
                        initial={{opacity: 0}}
                        whileInView={{opacity: 0.25}}
                        transition={{duration: 0.6}}
                        className="absolute inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-50 transition-opacity duration-500"
                    ></motion.div>

                    {/* CARD */}
                    <div
                        className="relative z-10 p-5 sm:p-6 md:p-8 rounded-2xl 
                  bg-slate-900 border border-slate-800 px-4 space-y-4 text-slate-400"
                    >
                        <p className="text-2xl font-semibold tracking-tight sm:text-3xl pb-4">Hey, I am Rudransh.</p>
                        <p>
                            I’m a frontend developer focused on building fast, responsive, and user-friendly web
                            applications.
                        </p>

                        <p>
                            I started coding through curiosity-driven projects and gradually developed a strong interest
                            in creating clean and scalable interfaces using React and modern web technologies.
                        </p>

                        <p>
                            Right now, I’m focused on improving performance, writing maintainable code, and building
                            real-world projects that solve practical problems.
                        </p>

                        <p>
                            Currently pursuing B.Tech in Computer Science, I’m actively looking for internship or
                            entry-level opportunities where I can learn, contribute, and grow as a developer.
                        </p>

                        <p>
                            Outside coding, I enjoy solving DSA problems and exploring new tools in the frontend
                            ecosystem.
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm">
                            {/* linkedin */}

                            <a
                                href="https://www.linkedin.com/in/rudransh-upadhyay01/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 text-white pt-2"
                            >
                                Follow on LinkedIn
                            </a>

                            <a
                                href="https://github.com/rudransh100/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline underline-offset-4 text-white pt-2"
                            >
                                Follow on GitHub
                            </a>
                        </div>

                        <div className="pt-2 text-sm">
                            Looking to collaborate?{" "}
                            <span
                                onClick={() => scrollto("contact")}
                                className="underline underline-offset-4 cursor-pointer hover:text-white transition-colors"
                            >
                                Check the Contact page
                            </span>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
