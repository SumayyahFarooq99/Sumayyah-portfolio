import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-2xl bg-slate-800 border border-slate-700 hover:border-purple-500 transition-all duration-500 hover:-translate-y-2">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={project.image}
          alt={project.title}
          className="h-48 sm:h-52 md:h-56 lg:h-60 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl flex items-center gap-2 text-sm sm:text-base"
          >
            Visit
            <FiExternalLink />
          </a>

        </div>

      </div>

      {/* Content */}

      <div className="p-4 sm:p-5 md:p-6">

        <span className="text-sm text-purple-400">
          {project.category}
        </span>

        <h3 className="text-xl sm:text-2xl font-bold mt-2 sm:mt-3">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-400 mt-2 sm:mt-3 leading-6">
          {project.description}
        </p>

      </div>

    </div>
  );
}

export default ProjectCard;