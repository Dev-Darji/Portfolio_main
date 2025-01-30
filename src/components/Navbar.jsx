import React, { useEffect, useState } from "react";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import github from "../assets/img/github.png";
import logo from '../assets/img/logo.png';
import download from '../assets/img/download.png'
import Resume from '../assets/Dev_Resume.pdf'
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home","skills","projects","contact");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActivelink = (value) =>{
    setActiveLink(value);
  }


  return (
    <div
      expand="lg"
      className={`nav fixed top-0 w-screen px-16 py-4 flex justify-between items-center backdrop-blur-md transition-all duration-300 z-10 gap-14 
        //         ${scrolled ? " bg-gray-400/60 shadow-md" : "bg-transparent"}`}
    >
      <img className="max-sm:w-16 max-sm:-ml-[30px] lg:w-24 invert px-3 py-2 lg:mr-60" src={logo} alt="" />
      <div className="max-sm:hidden max-sm:text-sm max-sm:gap-8 lg:text-2xl flex justify-center gap-20 font-semibold items-center lg:-ml-[500px]">
        <a
          href="#"
          onClick={() => onUpdateActivelink("home")}
          className={`${
            activeLink === "home" ? "active navbar-link" : "navbar-link"
          } relative group text-white px-3 py-2 font-semibold`}
        >
          Home
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </a>
        <a
          href="#skills"
          onClick={() => onUpdateActivelink("skills")}
          className={`${
            activeLink === "skills" ? "active navbar-link" : "navbar-link"
          } relative group text-white px-3 py-2 font-semibold`}
        >
          Skills
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </a>
        <a
          href="#services"
          onClick={() => onUpdateActivelink("contact")}
          className={`${
            activeLink === "contact" ? "active navbar-link" : "navbar-link"
          } relative group text-white px-3 py-2 font-semibold`}
        >
          Services
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </a>
        <a
          href="#projects"
          onClick={() => onUpdateActivelink("projects")}
          className={`${
            activeLink === "projects" ? "active navbar-link" : "navbar-link"
          } relative group text-white px-3 py-2 font-semibold`}
        >
          Projects
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </a>
        <a
          href="#contact"
          onClick={() => onUpdateActivelink("projects")}
          className={`${
            activeLink === "contact" ? "active navbar-link" : "navbar-link"
          } relative group text-white px-3 py-2 font-semibold`}
        >
          Contact Me
          <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0"></span>
        </a>
      </div>
      <div className="max-sm:hidden flex justify-between gap-12 items-center -mr-[300px]">
        {/* <img className="rounded-full p-3 w-12 border-gray-300 border " src={navIcon1} alt="" /> */}
        <img
          className="invert w-10 hover:scale-115 transition-all duration-300 ease-in-out"
          src={navIcon2}
          alt=""
        />
        <img
          className=" invert w-10 hover:scale-115 transition-all duration-300 ease-in-out"
          src={github}
          alt=""
        />
        
        
      </div>
      <a href={Resume} download="Resume.pdf" className="flex max-sm:flex gap-4 text-2xl ml-4 rounded border py-3 px-5 border-gray-300 hover:bg-white hover:text-black font-semibold hover:font-semibold transition-all duration-300 ease-in-out hover:scale-105">
        Resume <img className="w-8 invert" src={download} alt="" />
        
        </a>
    </div>
  );
};

export default Navbar;

