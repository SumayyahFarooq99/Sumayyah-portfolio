import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function About() {
    return (
        <section
            id="about"
            className="scroll-mt-24 w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-14"
        >
            <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                {/* Section Heading */}

                <div className="mb-7 sm:mb-9 md:mb-10 lg:mb-12 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                        About Me
                    </h2>

                    <div className="w-14 sm:w-16 md:w-20 h-1 bg-purple-500 rounded mx-auto"></div>
                </div>

                {/* About Content */}

                <div className="bg-slate-800 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10">
                    <p className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg leading-6 sm:leading-7 md:leading-7 lg:leading-8">
                        I'm a Frontend Developer with 5+ years of experience creating
                        modern, responsive, and user-friendly web experiences. I have
                        successfully worked on 35+ live website projects and developed
                        50+ custom themes, gaining hands-on experience in both custom
                        development and design implementation.
                    </p>

                    <div className="h-4 sm:h-5 md:h-6"></div>

                    <p className="text-gray-300 text-sm sm:text-base md:text-base lg:text-lg leading-6 sm:leading-7 md:leading-7 lg:leading-8">
                        My skill set includes HTML, CSS, Bootstrap, JavaScript,
                        React.js, Tailwind CSS, WordPress, Git, and GitHub. I enjoy
                        transforming ideas into functional, visually appealing websites
                        and continuously enhancing my expertise by learning new
                        technologies and following industry best practices.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

export default About;