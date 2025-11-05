import { motion } from "framer-motion";
import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-3"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center text-white font-black shadow-md">
            M
          </div>
          <span className="text-xl font-bold text-gray-800">Minhaz.</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className={`font-medium transition ${
                location.pathname === "/" && window.location.hash === ""
                  ? "text-amber-600"
                  : "text-gray-700 hover:text-amber-600"
              }`}
            >
              Home
            </button>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `font-medium transition ${
                  isActive
                    ? "text-amber-600"
                    : "text-gray-700 hover:text-amber-600"
                }`
              }
            >
              Services
            </NavLink>
          </li>
          {["about", "tools", "projects", "contact"].map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                className="font-medium text-gray-700 hover:text-amber-600 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <button
          onClick={() => scrollToSection("contact")}
          className="hidden md:block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition"
        >
          Contact Me
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <ul className="px-6 py-6 space-y-5">
            <li>
              <button
                onClick={() => {
                  scrollToSection("home");
                  setMobileOpen(false);
                }}
                className="block text-lg font-medium text-gray-700"
              >
                Home
              </button>
            </li>
            <li>
              <NavLink
                to="/services"
                onClick={() => setMobileOpen(false)}
                className="block text-lg font-medium text-gray-700"
              >
                Services
              </NavLink>
            </li>
            {["about", "projects", "blogs", "testimonials", "contact"].map(
              (s) => (
                <li key={s}>
                  <button
                    onClick={() => {
                      scrollToSection(s);
                      setMobileOpen(false);
                    }}
                    className="block text-lg font-medium text-gray-700"
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                </li>
              )
            )}
            <button
              onClick={() => {
                scrollToSection("contact");
                setMobileOpen(false);
              }}
              className="w-full mt-4 px-6 py-3 bg-amber-500 text-white rounded-full font-semibold"
            >
              Contact Me
            </button>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
