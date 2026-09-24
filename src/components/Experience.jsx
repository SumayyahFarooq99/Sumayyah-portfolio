import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import {
  fadeUp,
  staggerContainer,
  skillCard,
} from "../utils/animations";

const experience = [
  {
    company: "Devbunch Private Limited",
    role: "Senior Frontend Engineer",
    duration: "July 2021 – June 2026",
    points: [
      "Developed and deployed 50+ responsive frontend projects with cross-browser compatibility.",
      "Built responsive, pixel-perfect UI components using HTML, CSS, Bootstrap, JavaScript, React.js and Tailwind CSS.",
      "Collaborated with UI/UX designers and backend developers in an Agile environment.",
      "Optimized website performance by reducing page load times through lazy loading, image optimization and code splitting.",
    ],
  },

  {
    company: "Muqit Services",
    role: "Frontend Developer",
    duration: "Sep 2020 – Jan 2021",
    points: [
      "Developed responsive web pages using HTML, CSS and Bootstrap.",
      "Worked with senior developers to improve UI implementation.",
      "Fixed frontend bugs and enhanced website responsiveness.",
    ],
  },

  {
    company: "Intern PK",
    role: "Frontend Intern",
    duration: "Aug 2020 – Sep 2020",
    points: [
      "Learned modern frontend development practices.",
      "Built responsive layouts and reusable UI components.",
      "Worked on real-world frontend tasks under mentor guidance.",
    ],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 bg-[#111827]"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >

          <p className="text-purple-400 text-sm sm:text-base uppercase tracking-[3px] sm:tracking-[4px] font-semibold">
            Experience
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4">
            Professional Journey
          </h2>

          <div className="w-16 sm:w-20 md:w-24 h-1 bg-purple-500 rounded-full mx-auto mt-4 sm:mt-5"></div>

        </motion.div>

        {/* Timeline */}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative border-l-2 border-purple-500/30 ml-3 sm:ml-4"
        >

          {experience.map((item, index) => (

            <motion.div
              key={index}
              variants={skillCard}
              className={`relative pl-8 sm:pl-10 md:pl-12 ${
                index === experience.length - 1
                  ? "pb-0"
                  : "pb-7 sm:pb-8 md:pb-10"
              }`}
            >

              {/* Circle */}

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.15,
                }}
                className="absolute -left-[13px] sm:-left-[17px] top-1 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30"
              >
                <FaBriefcase className="text-white text-xs sm:text-sm" />
              </motion.div>

              {/* Card */}

              <div className="bg-slate-800/70 border border-slate-700 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_10px_30px_rgba(168,85,247,0.15)]">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2 mb-4 sm:mb-5">

                  <div>

                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">
                      {item.role}
                    </h3>

                    <p className="text-purple-400 mt-0">
                      {item.company}
                    </p>

                  </div>

                  <span className="text-sm text-slate-400">
                    {item.duration}
                  </span>

                </div>

                <ul className="space-y-2 sm:space-y-3">

                  {item.points.map((point, i) => (

                    <li
                      key={i}
                      className="text-sm sm:text-base text-slate-300 flex gap-2 sm:gap-3 mb-2"
                    >
                      <span className="text-purple-400 mt-0">
                        •
                      </span>

                      {point}

                    </li>

                  ))}

                </ul>

              </div>

            </motion.div>

          ))}

        </motion.div>

      </div>
    </section>
  );
}

export default Experience;