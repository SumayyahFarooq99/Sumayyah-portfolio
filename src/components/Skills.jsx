import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  skillCard,
} from "../utils/animations";

function Skills() {
  const skills = [
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "JavaScript",
    "jQuery",
    "React",
    "PHP",
    "SASS",
    "WordPress",
    "GitHub",
    "VS Code",
    "Figma",
    "Photoshop",
    "SQL",
    "Responsive Design",
    "Pixel-Perfect UI",
    "Clean Code",
    "Optimization",
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-24 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-10 sm:pb-12 md:pb-14 lg:pb-16"
    >
      {/* Heading */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-8 sm:mb-9 md:mb-10 lg:mb-12 text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
          Skills
        </h2>

        <div className="w-14 sm:w-16 md:w-20 h-1 bg-purple-500 rounded-full mx-auto mb-4 sm:mb-5 md:mb-6"></div>

        <p className="text-sm sm:text-base md:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-6 sm:leading-7 md:leading-7 lg:leading-8">
          My technical expertise includes modern frontend technologies,
          UI development, responsive design, performance optimization,
          and professional development tools.
        </p>
      </motion.div>

      {/* Skills Grid */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={skillCard}
            transition={{
              duration: 0.25,
            }}
            className="bg-slate-800 border border-slate-700 rounded-xl p-3 sm:p-4 md:p-6 text-center flex items-center justify-center hover:border-purple-500 cursor-pointer"
          >
            <h3 className="font-semibold text-[12px] sm:text-base md:text-base text-gray-200">
              {skill}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;