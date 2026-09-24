import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function Footer() {
  return (
    <footer className="py-5 sm:py-6 md:py-6 lg:py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-4 text-center sm:text-left">

          <p className="text-xs sm:text-sm text-slate-400">
            © {new Date().getFullYear()} Sumayyah Farooq. All rights reserved.
          </p>

          <p className="text-xs sm:text-sm text-slate-400">
            Built with React
          </p>

        </div>
      </div>
    </footer>
  );
}

export default Footer; 