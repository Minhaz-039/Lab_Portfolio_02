import { motion } from "framer-motion";
import AfterEffects from "../assets/afterEffect.jpg";
import Figma from "../assets/figma.png";
import InVision from "../assets/invision.png";
import Photoshop from "../assets/photoshop.jpg";
import Sketch from "../assets/sketch.jpg";
import Storyboard from "../assets/storyboard.jpg";

const tools = [
  { name: "Figma", percent: "98%", img: Figma },
  { name: "Sketch", percent: "92%", img: Sketch },
  { name: "Photoshop", percent: "90%", img: Photoshop },
  { name: "After Effects", percent: "85%", img: AfterEffects },
  { name: "Storyboard", percent: "90%", img: Storyboard },
  { name: "InVision", percent: "95%", img: InVision },
];

function ToolCard({ tool, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      whileHover={{ y: -12, scale: 1.1 }}
      className="group relative"
    >
      {/* Card */}
      <div className="w-40 h-40 md:w-44 md:h-44 bg-white rounded-3xl shadow-lg flex flex-col items-center justify-center gap-3 border border-gray-100 hover:shadow-2xl transition-all duration-300 p-4">
        {/* Tool Logo */}
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-md">
          <img
            src={tool.img}
            alt={tool.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Percentage */}
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: delay + 0.3, type: "spring", stiffness: 200 }}
          className="text-2xl md:text-3xl font-bold text-gray-800"
        >
          {tool.percent}
        </motion.p>

        {/* Tool Name */}
        <p className="text-xs md:text-sm font-semibold text-gray-600 tracking-wider">
          {tool.name}
        </p>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-200 to-orange-100 opacity-0 group-hover:opacity-40 blur-2xl transition-opacity duration-500 -z-10" />
    </motion.div>
  );
}

export default function Tools() {
  return (
    <section
      id="tools"
      className="py-20 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs md:text-sm font-bold text-amber-600 tracking-widest uppercase">
            — My Favorite Tools
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-gray-900">
            <span className="text-amber-500">Exploring the Tools</span>
            <br />
            <span className="text-gray-800">Behind My Designs</span>
          </h2>
        </motion.div>

        {/* Tools Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 justify-items-center">
          {tools.map((tool, i) => (
            <ToolCard key={i} tool={tool} delay={i * 0.1} />
          ))}
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          These are the tools I use daily to turn ideas into pixel-perfect,
          user-loved products.
        </motion.p>
      </div>
    </section>
  );
}
