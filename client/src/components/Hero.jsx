import { motion } from "framer-motion";
import Minhaz from "../assets/Minhaz.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen rounded-2xl flex items-center bg-gradient-to-br from-slate-50 via-amber-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto pl-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT: Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-amber-700 font-medium text-lg"
          >
            Hello There!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-6xl md:text-7xl font-black text-gray-900 mt-4 leading-tight"
          >
            I'm Minhaz Reza
            <br />
            <span className="text-5xl md:text-6xl text-amber-600">
              Product Designer
            </span>
          </motion.h1>

          <p className="text-gray-600 text-lg mt-6 max-w-xl leading-relaxed">
            Crafting clean, user-centered digital experiences. Based in
            Bangladesh — designing for the world.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-5 mt-10"
          >
            <a
              href="/portfolio"
              className="px-8 py-4 bg-amber-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-amber-600 transition"
            >
              View Portfolio
            </a>
            <button className="px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-full hover:bg-gray-800 hover:text-white transition">
              Hire Me
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT: Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-amber-300 blur-3xl opacity-30 scale-110" />

            {/* Photo */}
            <img
              src={Minhaz}
              alt="Minhaz Reza"
              className="relative w-80 h-80 md:w-96 md:h-96 rounded-full object-cover shadow-2xl border-8 border-white"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
