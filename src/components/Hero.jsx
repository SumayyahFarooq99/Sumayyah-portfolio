import profile from "../assets/images/Sumayyah_Farooq.jpeg";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "../utils/animations";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-14 md:pb-16 lg:pb-28 overflow-hidden"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-10 lg:gap-14 xl:gap-16 items-center">

        {/* Left Content */}

        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full text-center md:text-left"
        >

          {/* Available for Work */}

          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-slate-800 border border-slate-700 mb-4 sm:mb-5 lg:mb-6">

            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-pulse"></span>

            <span className="text-xs sm:text-sm text-slate-300">
              Available for Work
            </span>

          </div>

          <p className="text-purple-400 text-base sm:text-lg md:text-lg mb-2">
            Hello, I'm
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-[42px] lg:text-6xl xl:text-7xl font-bold leading-tight md:leading-[1.15] lg:leading-[1.1] mb-3 sm:mb-4 lg:mb-5">

            Sumayyah
            <span className="text-purple-400">
              Farooq
            </span>

          </h1>

          <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-slate-300 mb-3">
            Senior Frontend Developer
          </h2>

          <p className="text-slate-400 text-sm sm:text-base md:text-base lg:text-lg leading-6 sm:leading-7 lg:leading-8 max-w-xl mx-auto md:mx-0 mb-6 sm:mb-6 lg:mb-10">

            Specialized in building responsive, user-friendly web
            applications with 5+ years of experience in HTML, CSS,
            Bootstrap, JavaScript, React.js, Tailwind CSS and
            WordPress.

          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 lg:gap-5">

            <a
              href="#contact"
              className="bg-purple-600 hover:bg-purple-700 hover:-translate-y-1 transition-all duration-300 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl font-semibold text-sm sm:text-base shadow-lg shadow-purple-500/20"
            >
              Contact Me
            </a>

            <a
              href="/Sumayyah_Farooq_CV_2026.pdf"
              download
              className="border border-purple-500 hover:bg-purple-600 hover:border-purple-600 hover:-translate-y-1 transition-all duration-300 px-5 sm:px-6 lg:px-8 py-3 sm:py-3.5 lg:py-4 rounded-xl font-semibold text-sm sm:text-base"
            >
              Download CV
            </a>

          </div>

        </motion.div>

        {/* Right Image */}

        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex justify-center w-full mt-2 sm:mt-4 md:mt-0"
        >

          <div className="relative">

            {/* Animated Glow */}

            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.08, 0.18, 0.08],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full bg-purple-500 blur-[35px] sm:blur-[40px] lg:blur-[50px]"
            />

            {/* Rotating Border */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-1.5 sm:-inset-2 rounded-full border-2 border-purple-400/40 border-dashed"
            />

            {/* Image */}

            <motion.img
              whileHover={{
                scale: 1.02,
                rotate: 2,
              }}
              transition={{
                duration: 0.4,
              }}
              src={profile}
              alt="Sumayyah Farooq"
              className="relative w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] md:w-[280px] md:h-[280px] lg:w-[360px] lg:h-[360px] xl:w-[380px] xl:h-[380px] rounded-full object-cover border-[5px] sm:border-[6px] border-purple-500 shadow-[0_0_45px_rgba(168,85,247,0.30)] sm:shadow-[0_0_55px_rgba(168,85,247,0.35)] lg:shadow-[0_0_70px_rgba(168,85,247,0.45)]"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;