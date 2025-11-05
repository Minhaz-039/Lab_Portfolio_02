import { motion } from "framer-motion";

// Import your cover images (same as Tools!)
import Cover1 from "../assets/Copy of Gray Aesthetic Beauty Lifestyle YouTube Banner.png";
import Cover2 from "../assets/Dark Cover Song Youtube Thumbnail.png";

const projects = [
  {
    id: 1,
    title: "TU HI MERI SHAB HAI",
    subtitle: "Keyboard Cover",
    artist: "By Minhaz Reza",
    videoId: "jbcARIalnKk", // YouTube ID
    cover: Cover1,
  },
  {
    id: 2,
    title: "INSTRUMENTAL COVER",
    subtitle: "MINHAZ",
    artist: "Original Piano & Synth",
    videoId: "DDHMZoXF3kU",
    cover: Cover2,
  },
];

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={`https://youtu.be/${project.videoId}`}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      whileHover={{ y: -16, scale: 1.03 }}
      className="group relative block overflow-hidden rounded-2xl shadow-2xl"
    >
      {/* Video Preview on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
        <iframe
          src={`https://www.youtube.com/embed/${project.videoId}?autoplay=1&mute=1&loop=1&playlist=${project.videoId}&controls=0&modestbranding=1`}
          title={project.title}
          className="w-full h-full scale-110"
          frameBorder="0"
          allow="autoplay"
        />
      </div>

      {/* Cover Image */}
      <img
        src={project.cover}
        alt={project.title}
        className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Text Content */}
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <motion.h3
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          className="text-4xl md:text-5xl font-black tracking-tight"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {project.title}
        </motion.h3>

        <motion.p
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl font-bold text-yellow-400 mt-1"
        >
          {project.subtitle}
        </motion.p>

        <motion.p
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-sm md:text-base text-gray-300 mt-2 opacity-90"
        >
          {project.artist}
        </motion.p>

        {/* Play Button */}
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="mt-6 inline-flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30"
        >
          <svg className="w-6 h-6" fill="white" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="font-bold text-sm tracking-wider">WATCH NOW</span>
        </motion.div>
      </div>

      {/* Hover Glow */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-green-500/20 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity -z-10" />
    </motion.a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black rounded-2xl">
      <div className="max-w-7xl mx-auto px-6 rounded-2xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="text-yellow-400 text-sm font-bold tracking-widest">
            — MY MUSIC COVERS
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-white mt-4">
            Keyboard <span className="text-yellow-400">Magic</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
