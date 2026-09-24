import emailjs from "@emailjs/browser";

import { useState } from "react";

import { motion } from "framer-motion";

import { fadeUp, fadeLeft, fadeRight } from "../utils/animations";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrors({ name: true });
      document.querySelector('[name="name"]')?.focus();
      return;
    }

    if (!formData.email.trim()) {
      setErrors({ email: true });
      document.querySelector('[name="email"]')?.focus();
      return;
    }

    if (
      !/^[A-Z0-9.\\\_%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      setErrors({ email: true });
      document.querySelector('[name="email"]')?.focus();
      return;
    }

    try {
      await emailjs.send(
        "service_60k9zib",
        "template_m22pcts",
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio Contact",
          message: formData.message || "No message provided.",
        },
        "Za3sI-Nq7G574dAPw"
      );

      alert("✅ Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setErrors({});
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 bg-[#0f172a]"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <p className="text-purple-400 text-sm sm:text-base uppercase tracking-[3px] sm:tracking-[4px] font-semibold">
            CONTACT
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 sm:mt-4">
            Let's Work Together
          </h2>

          <div className="w-16 sm:w-20 md:w-24 h-1 bg-purple-500 rounded-xl mx-auto mt-4 sm:mt-5"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-8">

          {/* LEFT */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-slate-800/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-6 lg:p-10 border border-slate-700 flex flex-col justify-between"
          >
            <div className="max-[767px]:text-center">

              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-5 md:mb-6">
                Let's Build Something Amazing 🚀
              </h3>

              <p className="text-sm sm:text-base text-slate-400 leading-6 sm:leading-7 mb-7 sm:mb-8 md:mb-8 lg:mb-10">
                I'm currently available for freelance projects,
                full-time opportunities and long-term collaborations.
                Feel free to contact me anytime.
              </p>

              {/* Contact Details */}

              <div className="max-[767px]:w-full max-[767px]:max-w-sm max-[767px]:mx-auto text-left">

                {/* Email */}

                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mb-5 sm:mb-6 md:mb-6 lg:mb-7">

                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-13 md:h-13 shrink-0 rounded-xl bg-purple-600 flex items-center justify-center text-base sm:text-lg md:text-xl">
                    <FaEnvelope />
                  </div>

                  <div className="min-w-0">
                    <p className="text-slate-400 text-sm">
                      Email
                    </p>

                    <a
                      href="mailto:sumze9.8@gmail.com"
                      className="text-sm sm:text-base break-all hover:text-purple-400 transition"
                    >
                      sumze9.8@gmail.com
                    </a>
                  </div>

                </div>

                {/* Phone */}

                <div className="flex items-center gap-3 sm:gap-4 md:gap-5 mb-5 sm:mb-6 md:mb-6 lg:mb-7">

                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-13 md:h-13 shrink-0 rounded-xl bg-purple-600 flex items-center justify-center text-base sm:text-lg md:text-xl">
                    <FaPhoneAlt />
                  </div>

                  <div className="min-w-0">
                    <p className="text-slate-400 text-sm">
                      Phone
                    </p>

                    <a
                      href="tel:+923330481496"
                      className="text-sm sm:text-base hover:text-purple-400 transition"
                    >
                      +92 333 0481496
                    </a>
                  </div>

                </div>

                {/* Location */}

                <div className="flex items-center gap-3 sm:gap-4 md:gap-5">

                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-13 md:h-13 shrink-0 rounded-xl bg-purple-600 flex items-center justify-center text-base sm:text-lg md:text-xl">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <p className="text-slate-400 text-sm">
                      Location
                    </p>

                    <p className="text-sm sm:text-base">
                      Lahore, Pakistan
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Social */}

            <div className="flex gap-3 sm:gap-4 md:gap-5 mt-8 sm:mt-8 md:mt-8 lg:mt-12 max-[767px]:justify-center">

              <a
                href="http://linkedin.com/in/sumayyah-farooq-5962731a6"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-slate-700 hover:bg-purple-600 hover:shadow-[0_8px_20px_rgba(168,85,247,0.25)] transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/sumayyahfarooq99?utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-slate-700 hover:bg-purple-600 hover:shadow-[0_8px_20px_rgba(168,85,247,0.25)] transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/sumayyah.farooq.99"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-xl bg-slate-700 hover:bg-purple-600 hover:shadow-[0_8px_20px_rgba(168,85,247,0.25)] transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.form
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-slate-800/70 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-6 lg:p-10 border border-slate-700"
          >

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full bg-slate-900 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none border-2 transition-all duration-300 ${
                  errors.name
                    ? "border-red-500"
                    : "border-slate-700 focus:border-purple-500"
                }`}
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full bg-slate-900 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none border-2 transition-all duration-300 ${
                  errors.email
                    ? "border-red-500"
                    : "border-slate-700 focus:border-purple-500"
                }`}
              />

            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full bg-slate-900 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none border-2 border-slate-700 focus:border-purple-500 transition-all duration-300 mb-4 sm:mb-5"
            />

            <textarea
              rows="7"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full h-32 sm:h-36 md:h-36 lg:h-42 bg-slate-900 rounded-xl px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base outline-none border-2 border-slate-700 focus:border-purple-500 transition-all duration-300 mb-6 sm:mb-8 resize-none"
            />

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-xl font-semibold text-sm sm:text-base flex items-center gap-2 sm:gap-3 cursor-pointer hover:shadow-[0_10px_25px_rgba(168,85,247,0.35)] max-[767px]:mx-auto"
            >
              <FaPaperPlane />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;