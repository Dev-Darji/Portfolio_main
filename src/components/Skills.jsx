import React, { useEffect, useRef, useState } from "react";

const Skills = () => {
  // State to track when the section is in view
  const [inView, setInView] = useState(false);
  
  // Create a reference to the skills section
  const sectionRef = useRef(null);
  
  // Define the skills and their respective percentages
  const skills = [
    { name: "HTML", width: "90%" },
    { name: "CSS", width: "75%" },
    { name: "JAVASCRIPT", width: "70%" },
    { name: "REACT JS", width: "65%" },
    { name: "BOOTSTRAP", width: "70%" },
    { name: "TAILWIND", width: "80%" },
  ];

  // Intersection Observer to detect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the section is in view
        if (entries[0].isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger the animation when 50% of the section is in view
    );

    // Start observing the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      id="skills"
      ref={sectionRef}
      className="skill max-sm:my-[100px] text-white relative h-screen lg:mt-[90px] flex justify-center items-center overflow-hidden px-4 sm:px-6 lg:px-16"
    >
      <div
        className="max-sm:rounded h-[700px] w-full lg:w-[1400px] bg-gradient-to-r from-[#e0e7ff] via-[#b0c7d4] to-[#a3d9ff] shadow-md flex flex-col justify-evenly items-center  lg:rounded-4xl opacity-90 overflow-hidden"
      >
        <h1 className="max-sm:text-3xl text-5xl font-bold text-center mb-4 text-gray-700 relative z-10">
          <span className="relative z-10">My Skills</span>
          <br />
          <span className="relative z-10 text-xl text-gray-600">--- What I Know ---</span>
        </h1>
        <div className="w-full flex flex-col items-center gap-8 lg:gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center justify-between w-full max-w-[700px] gap-8 hover:scale-110 transition-all duration-300 ease-in-out"
            >
              <h1 className="max-sm:text-2xl max-sm:pl-15 lg:text-4xl text-gray-700 font-medium">{skill.name}</h1>
              <div className="flex items-center max-sm:gap-1 lg:gap-10 w-[60%] max-sm:w-[250px]">
                <div className="w-full bg-gray-300 rounded-full cursor-pointer">
                  <hr
                    className={`max-sm:hidden h-[12px] border-none bg-gradient-to-r from-[#8B5CF6] via-[#6B21A8] to-[#4C1D95] rounded-full transition-all duration-1000 ease-in-out`}
                    style={{
                      width: inView ? skill.width : "0%", // Only animate when in view
                    }}
                  />
                </div>
                <span className="max-sm:text-lg max-sm:pr-15 lg:text-2xl text-gray-700 font-medium">{inView ? skill.width : "0%"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
