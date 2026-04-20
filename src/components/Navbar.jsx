import React from "react";
import { useState } from "react";
import { Code, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="bg-slate-950/80 border-b border-slate-800 backdrop-blur-md px-6 py-4 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-xl cursor-pointer hover:scale-105 transition-all duration-300"
        >
          <Code className="w-6 h-6 text-blue-500" />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold">
            RU
          </span>
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1 text-slate-300">
          {/* Home */}
          <button
            onClick={() =>
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="group hover:text-white transition-all hover:scale-105 px-4 py-2 relative"
          >
            Home
            <span
              className="absolute bottom-0 left-0 h-0.5 w-0 
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     transition-all duration-300 
                     group-hover:w-full"
            ></span>
          </button>

          {/* About */}
          <button
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="group hover:text-white transition-all hover:scale-105 px-4 py-2 relative"
          >
            About
            <span
              className="absolute bottom-0 left-0 h-0.5 w-0 
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     transition-all duration-300 
                     group-hover:w-full"
            ></span>
          </button>

          {/* Skills */}
          <button
            onClick={() =>
              document
                .getElementById("skills")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="group hover:text-white transition-all hover:scale-105 px-4 py-2 relative"
          >
            Skills
            <span
              className="absolute bottom-0 left-0 h-0.5 w-0 
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     transition-all duration-300 
                     group-hover:w-full"
            ></span>
          </button>

          {/* Projects */}
          <button
            onClick={() =>
              document
                .getElementById("projects")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="group hover:text-white transition-all hover:scale-105 px-4 py-2 relative"
          >
            Projects
            <span
              className="absolute bottom-0 left-0 h-0.5 w-0 
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     transition-all duration-300 
                     group-hover:w-full"
            ></span>
          </button>

          {/* Education */}
          <button
            onClick={() =>
              document
                .getElementById("education")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="group hover:text-white transition-all hover:scale-105 px-4 py-2 relative"
          >
            Education
            <span
              className="absolute bottom-0 left-0 h-0.5 w-0 
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     transition-all duration-300 
                     group-hover:w-full"
            ></span>
          </button>

          {/* Contact */}
          <button
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="group hover:text-white transition-all hover:scale-105 px-4 py-2 relative"
          >
            Contact
            <span
              className="absolute bottom-0 left-0 h-0.5 w-0 
                     bg-gradient-to-r from-blue-500 to-purple-500 
                     transition-all duration-300 
                     group-hover:w-full"
            ></span>
          </button>
        </div>

        {/* Button */}
        <div className="flex items-center gap-3">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? (
                <X className="text-white w-6 h-6" />
              ) : (
                <Menu className="text-white w-6 h-6" />
              )}
            </button>
          </div>

          {/* Hire Me */}
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="hidden md:block cursor-pointer bg-gradient-to-r from-blue-700 to-purple-700 text-white px-6 py-2 rounded-full hover:from-blue-500 hover:to-purple-500 hover:scale-105 transition-all"
          >
            Hire Me
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-slate-900 flex flex-col items-center gap-6 py-6 md:hidden z-50">
          {" "}
          {["home", "about", "skills", "projects", "education", "contact"].map(
            (item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-white text-lg capitalize hover:text-blue-400 transition"
              >
                {" "}
                {item}{" "}
              </button>
            ),
          )}{" "}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
