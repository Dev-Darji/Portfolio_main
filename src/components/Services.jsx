import React from "react";
import web from '../assets/img/web.png';
import front from '../assets/img/front.png';
import res from '../assets/img/responsive.png';

const Services = () => {
  return (
    <main id="services" className="mt-[100px] mb-[150px] pt-40 ">
      <section
      
      className="pt-16 pb-32 bg-gray-900 opacity-95 flex justify-center items-center relative"
    >
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-center relative mb-16 sm:mb-24 leading-8 text-gray-700">
          <span className="relative z-10 text-white">My Services</span>
          <br />
          <span className="relative z-10 text-lg sm:text-xl text-gray-300">--- What I Provide ---</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 items-center justify-center">
          {/* Web Design */}
          <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-16 sm:py-20 px-8 sm:px-12 rounded-lg shadow-2xl text-center hover:scale-105 transition-all duration-500 ease-in-out transform hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l">
            <img
              className="w-28 sm:w-36 mx-auto p-4 mb-8 sm:mb-10 -mt-4 transition-transform duration-300 ease-in-out hover:scale-125"
              src={web}
              alt="Web Development"
            />
            <div className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              <p>Web <br /> Development</p>
            </div>
            <p className="text-gray-100 text-base sm:text-lg transition-all duration-300 ease-in-out opacity-90 hover:opacity-100">
              Creating responsive, dynamic websites tailored to your needs.
            </p>
          </div>

          {/* Frontend Development */}
          <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-16 sm:py-20 px-8 sm:px-12 rounded-lg shadow-2xl text-center hover:scale-105 transition-all duration-500 ease-in-out transform hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l">
            <img
              className="w-28 sm:w-36 mx-auto p-4 mb-8 sm:mb-10 -mt-4 transition-transform duration-300 ease-in-out hover:scale-125"
              src={front}
              alt="Frontend Development"
            />
            <div className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              <p>Frontend Development</p>
            </div>
            <p className="text-gray-100 text-base sm:text-lg transition-all duration-300 ease-in-out opacity-90 hover:opacity-100">
              Building interactive, user-friendly interfaces that impress.
            </p>
          </div>

          {/* Responsive Web Design */}
          <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 py-16 sm:py-20 px-8 sm:px-12 rounded-lg shadow-2xl text-center hover:scale-105 transition-all duration-500 ease-in-out transform hover:rotate-3 hover:shadow-xl hover:bg-gradient-to-l">
            <img
              className="w-28 sm:w-36 mx-auto p-4 mb-8 sm:mb-10 -mt-4 transition-transform duration-300 ease-in-out hover:scale-125"
              src={res}
              alt="Responsive Web Design"
            />
            <div className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              <p>Responsive Web Design</p>
            </div>
            <p className="text-gray-100 text-base sm:text-lg transition-all duration-300 ease-in-out opacity-90 hover:opacity-100">
              Ensuring your website looks great on any device, anywhere.
            </p>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Services;
