import React, { useState, useEffect, useRef } from "react";
import port from "../assets/img/portfolio.png";
import burger from "../assets/img/burger.png";
import spotify from "../assets/img/spotify.png";
import calci from "../assets/img/calc.png";
import ET from "../assets/img/expense.png";
import ttt from "../assets/img/tictactoe.png";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    image: port,
    description: "A personal portfolio website built with React.",
    demoLink: "https://github.com/Dev-Darji/Portfolio_main",
    codeLink: "https://github.com/Dev-Darji/Portfolio_main",
  },
  {
    id: 2,
    title: "Spotify Clone",
    image: spotify,
    description: "An e-commerce application using React and Firebase.",
    demoLink: "https://github.com/Dev-Darji/Spotify_Clone",
    codeLink: "https://github.com/Dev-Darji/Spotify_Clone",
  },
  {
    id: 3,
    title: "Expense Tracker",
    image: ET,
    description: "A weather forecasting app using React and OpenWeather API.",
    demoLink: "https://github.com/Dev-Darji/Expense-Tracker",
    codeLink: "https://github.com/Dev-Darji/Expense-Tracker",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    image: ttt,
    description: "A blog website built with React.",
    demoLink: "https://github.com/Dev-Darji/TicTacToe",
    codeLink: "https://github.com/Dev-Darji/TicTacToe",
  },
  {
    id: 5,
    title: "Burger Bites",
    image: burger,
    description: "A real-time chat application built with React and Firebase.",
    demoLink: "https://github.com/Dev-Darji/burger-bites",
    codeLink: "https://github.com/Dev-Darji/burger-bites",
  },
  {
    id: 6,
    title: "Calculator",
    image: calci,
    description: "A task management app with React and Redux.",
    demoLink: "https://github.com/Dev-Darji/calculator",
    codeLink: "https://github.com/Dev-Darji/calculator",
  },
];

const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isScrolling, setIsScrolling] = useState(true);

  const projectContainerRef = useRef(null);

  // Scroll logic with smooth behavior
  useEffect(() => {
    const interval = setInterval(() => {
      if (projectContainerRef.current && isScrolling) {
        const scrollWidth = projectContainerRef.current.scrollWidth;
        const containerWidth = projectContainerRef.current.clientWidth;
        const currentScroll = projectContainerRef.current.scrollLeft;

        if (currentScroll + containerWidth >= scrollWidth) {
          projectContainerRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          projectContainerRef.current.scrollTo({
            left: currentScroll + 300,
            behavior: "smooth",
          });
        }
      }
    }, 3000); 

    return () => {
      clearInterval(interval);
    };
  }, [isScrolling]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Handle hover events to pause/resume scrolling
  const handleMouseEnter = () => setIsScrolling(false);
  const handleMouseLeave = () => setIsScrolling(true);

  return (
    <main id="projects" className="flex items-center justify-center pt-20">
      <section className="max-w-screen-3xl rounded-4xl py-20 opacity-95 bg-gray-900 shadow-md text-white mt-[100px] mb-[500px] p-10">
        <div className="max-w-screen-xl mx-auto pt-16 pb-32 ">
          <h1 className="text-5xl font-bold text-center mb-28 text-white -mt-10">
            <span className="text-5xl relative z-10 text-gray-white font-semibold">
              My Projects
            </span>
            <br />
            <span className="relative z-10 text-xl text-gray-300">
              --- What I Have Built ---
            </span>
          </h1>

          <div
            ref={projectContainerRef}
            className="flex flex-col lg:flex-row overflow-x-auto space-x-0 lg:space-x-12 max-sm:space-y-8 p-2 lg:h-[305px] scrollbar mt-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-transparent rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out min-w-[300px] sm:min-w-[350px] md:min-w-[400px]"
              >
                <div className="project-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover rounded-lg opacity-100 transition-all duration-300 flex-shrink-0"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-all duration-300 rounded-lg">
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-4 text-lg">{project.description}</p>
                    <div className="mt-6 flex justify-center gap-4">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-all duration-200"
                      >
                        View Demo
                      </a>
                      <a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-800 transition-all duration-200"
                      >
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default Projects;
