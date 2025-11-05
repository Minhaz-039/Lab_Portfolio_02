import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
      whileHover={{ y: -16, scale: 1.05 }}
      className="group relative bg-gradient-to-br from-white to-gray-50 
                 rounded-3xl p-8 shadow-lg border border-gray-100 
                 hover:shadow-2xl hover:shadow-amber-500/20 
                 transition-all duration-500 overflow-hidden cursor-pointer"
    >
      {/* Animated Blob */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute -top-20 -right-20 w-60 h-60 
                   bg-gradient-to-br from-amber-400/30 to-orange-500/30 
                   rounded-full blur-3xl -z-10"
      />

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8 }}
        className="relative w-20 h-20 mb-8"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 blur-xl opacity-70 group-hover:opacity-100 transition-opacity" />
        <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center shadow-xl p-3">
          <img
            src={`http://localhost:5000/uploads/${service.icon}`}
            alt={service.title}
            className="w-full h-full object-contain"
          />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h3
        initial={{ x: -20 }}
        whileInView={{ x: 0 }}
        className="text-3xl font-black bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
      >
        {service.title}
      </motion.h3>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-gray-600 leading-relaxed"
      >
        {service.short_desc}
      </motion.p>

      {/* Learn More — NOW FULLY CLICKABLE */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <Link
          to={`/services/${service.id}`}
          className="inline-flex items-center gap-3 font-bold text-lg 
                     bg-gradient-to-r from-amber-500 to-orange-600 
                     bg-clip-text text-transparent 
                     group-hover:scale-110 transition-all duration-300"
        >
          Learn more
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block"
          >
            Arrow Right
          </motion.span>
        </Link>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute bottom-4 right-6 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -10, 0], opacity: [0.3, 1, 0.3] }}
            transition={{
              repeat: Infinity,
              duration: 2 + i * 0.5,
              delay: i * 0.3,
            }}
            className="w-2 h-2 bg-amber-400 rounded-full"
          />
        ))}
      </div>

      {/* Glow Border */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        initial={{ boxShadow: "0 0 0 0px rgba(251, 191, 36, 0)" }}
        whileHover={{ boxShadow: "0 0 0 4px rgba(251, 191, 36, 0.4)" }}
      />
    </motion.div>
  );
}
