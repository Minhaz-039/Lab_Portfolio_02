import { motion } from "framer-motion";
import React from "react";
import Minhaz from "../assets/Minhaz.png";

export default function About() {
  return (
    <section className="bg-[#1A3C34] py-20 overflow-hidden rounded-2xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Photo + Floating Pills */}
          <div className="relative flex justify-center">
            {/* Animated Photo */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-80 h-80 rounded-full overflow-hidden ring-8 ring-[#F9B84E]/30 shadow-2xl"
            >
              <img
                src={Minhaz}
                alt="Minhaz"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Skill Pills */}
            {[
              { text: "UX/UI Design", top: "20%", left: "12%" },
              { text: "Mobile App Design", top: "12%", left: "48%" },
              { text: "Website Design", top: "30%", right: "10%" },
              { text: "Design System", bottom: "28%", left: "8%" },
              { text: "Prototype", bottom: "12%", left: "42%" },
              { text: "Wireframe Design", bottom: "20%", right: "12%" },
              { text: "Dashboard", top: "48%", right: "8%" },
            ].map((pill, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: "backOut",
                }}
                whileHover={{ scale: 1.2, rotate: 10 }}
                className="absolute bg-[#F9B84E] text-[#1A3C34] font-bold px-5 py-2.5 rounded-full shadow-xl cursor-pointer"
                style={{
                  top: pill.top,
                  left: pill.left,
                  right: pill.right,
                  bottom: pill.bottom,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {pill.text}
              </motion.span>
            ))}
          </div>

          {/* RIGHT: Text + Stats + CTA */}
          <div className="text-white space-y-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#F9B84E] text-sm font-bold tracking-widest">
                — About Me
              </p>
              <h2 className="text-5xl md:text-6xl font-black mt-2 leading-tight">
                Who is <span className="text-[#F9B84E]">Minhaz</span>?
              </h2>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-gray-200 text-lg leading-relaxed max-w-lg"
            >
              Passionate product designer turning complex ideas into simple,
              beautiful, and intuitive experiences. I live in Figma, breathe
              prototypes, and ship joy.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md">
              <StatBox number={600} label="Project Completed" delay={0.6} />
              <StatBox number={50} label="Industry Covered" delay={0.8} />
              <StatBox number={18} label="Years of Experience" delay={1.0} />
            </div>

            {/* Download CV + Signature */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex items-center gap-8"
            >
              <motion.a
                href="http://localhost:5000/uploads/mycv.pdf"
                download
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="group flex items-center bg-[#F9B84E] text-[#1A3C34] font-bold px-9 py-5 rounded-full shadow-2xl hover:shadow-[#F9B84E]/60 transition-all"
              >
                Download CV
                <motion.span
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="ml-3 w-11 h-11 bg-white rounded-full flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6 text-[#1A3C34]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.span>
              </motion.a>

              <motion.p
                animate={{ rotate: [0, 4, -4, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="text-4xl font-cursive text-[#F9B84E] italic"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                Minhaz
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Reusable Animated Stat
function StatBox({ number, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7 }}
      className="text-center"
    >
      <motion.p
        className="text-5xl font-black text-[#F9B84E]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <CountUp end={number} delay={delay + 0.3} />
        <span className="text-4xl">+</span>
      </motion.p>
      <p className="text-sm text-gray-400 mt-2">{label}</p>
    </motion.div>
  );
}

// Simple Count-Up Animation
function CountUp({ end, delay }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= end) {
            clearInterval(interval);
            return end;
          }
          return prev + Math.ceil(end / 30);
        });
      }, 30);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [end, delay]);

  return <>{count.toLocaleString()}</>;
}
