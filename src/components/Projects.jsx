import { useState } from "react";
import { liveProjects, themes } from "../assets/data/projects.js";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function Projects() {
  const [activeTab, setActiveTab] = useState("live");
  const [showAll, setShowAll] = useState(false);

  const currentProjects =
    activeTab === "live" ? liveProjects : themes;

  const visibleProjects = showAll
    ? currentProjects
    : currentProjects.slice(0, 6);

  return (
    <section
      id="projects"
      className="scroll-mt-24 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 bg-[#0F172A]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-8 sm:mb-9 md:mb-10 lg:mb-12">

          <p className="text-purple-400 text-sm sm:text-base font-semibold uppercase tracking-[2px] sm:tracking-[3px]">
            Portfolio
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4 text-white">
            My Recent Work
          </h2>

          <div className="w-16 sm:w-20 md:w-24 h-1 bg-purple-500 mx-auto rounded-xl mt-4 sm:mt-5"></div>

          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto mt-5 sm:mt-6 md:mt-7 leading-6 sm:leading-7">
            Here are some of my professional live websites and premium
            ThemeForest templates built with clean code, responsive
            layouts and modern UI.
          </p>

        </div>

        {/* Tabs */}

        <div className="flex justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">

          <div className="bg-slate-800 rounded-xl p-1.5 sm:p-2 flex gap-1.5 sm:gap-2">

            <button
              onClick={() => {
                setActiveTab("live");
                setShowAll(false);
              }}
              className={`px-4 sm:px-5 md:px-7 py-2.5 sm:py-3 rounded-xl transition duration-300 font-medium text-sm sm:text-base cursor-pointer ${
                activeTab === "live"
                  ? "bg-purple-600 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              Live Websites
            </button>

            <button
              onClick={() => {
                setActiveTab("themes");
                setShowAll(false);
              }}
              className={`px-4 sm:px-5 md:px-7 py-2.5 sm:py-3 rounded-xl transition duration-300 font-medium text-sm sm:text-base cursor-pointer ${
                activeTab === "themes"
                  ? "bg-purple-600 text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              ThemeForest
            </button>

          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8">

          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

        {/* Button */}

        {currentProjects.length > 6 && (

          <div className="text-center mt-4 sm:mt-12 md:mt-14 lg:mt-16">

            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-purple-600 hover:bg-purple-700 transition duration-300 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-xl font-semibold text-sm sm:text-base cursor-pointer"
            >
              {showAll ? "Show Less" : "View All"}
            </button>

          </div>

        )}

      </div>
    </section>
  );
}

export default Projects;