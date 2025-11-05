import { motion } from "framer-motion";
import { useState } from "react";
import { FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import api from "../api";

const interests = [
  "UI/UX Design",
  "Web App",
  "Mobile App",
  "Branding",
  "Music Cover",
];
const budgets = ["$500–$1K", "$1K–$3K", "$3K–$5K", "$5K–$10K", "$10K+"];
const countries = [
  "USA",
  "UK",
  "Canada",
  "Australia",
  "Germany",
  "India",
  "Other",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    budget: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await api.post("/contact", form);
      setStatus("sent");
      setForm({
        name: "",
        email: "",
        phone: "",
        interest: "",
        budget: "",
        country: "",
        message: "",
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT: Text + Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl md:text-6xl font-black leading-tight">
                Let's Talk for Your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                  Next Projects
                </span>
              </h1>
              <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-lg">
                Connect with me to discuss your project needs, ask questions, or
                explore collaboration opportunities. I'm here to help bring your
                ideas to life!
              </p>
            </motion.div>

            <div className="space-y-5">
              {[
                { icon: <FaPhoneAlt />, text: "01720390754" },
                { icon: <MdEmail />, text: "minhazreza3243@gmail.com" },
                { icon: <IoShareSocialSharp />, text: "Minhaz Reza" },
                {
                  icon: <FaLocationArrow />,
                  text: "381/A-4 South Goran , Dhaka-1205, Bangladesh",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-11 h-11 bg-amber-500 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md">
                    {item.icon}
                  </div>
                  <p className="text-gray-800 font-medium text-base">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-8 md:p-10 space-y-7"
          >
            {/* Name & Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  Ex. John Doe
                </label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Ex. John Doe"
                  className="w-full px-5 py-4 bg-gray-100 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-amber-200 transition"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">
                  example@gmail.com
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="example@gmail.com"
                  className="w-full px-5 py-4 bg-gray-100 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-amber-200 transition"
                />
              </div>
            </div>

            {/* Phone & Interest */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  name="phone"
                  required
                  value={form.phone}
                  onChange={onChange}
                  placeholder="Enter Phone Number"
                  className="w-full px-5 py-4 bg-gray-100 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-amber-200"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  I'm Interested in *
                </label>
                <select
                  name="interest"
                  required
                  value={form.interest}
                  onChange={onChange}
                  className="w-full px-5 py-4 bg-gray-100 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-amber-200 appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 1rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "12px",
                  }}
                >
                  <option value="">Select</option>
                  {interests.map((i) => (
                    <option key={i}>{i}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Budget & Country */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Budget Range (USD) *
                </label>
                <select
                  name="budget"
                  required
                  value={form.budget}
                  onChange={onChange}
                  className="w-full px-5 py-4 bg-gray-100 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-amber-200 appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 1rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "12px",
                  }}
                >
                  <option value="">Select Range</option>
                  {budgets.map((b) => (
                    <option key={b}>{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  name="country"
                  required
                  value={form.country}
                  onChange={onChange}
                  className="w-full px-5 py-4 bg-gray-100 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-amber-200 appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: "right 1rem center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "12px",
                  }}
                >
                  <option value="">Select Country</option>
                  {countries.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={onChange}
                placeholder="Enter here.."
                rows="5"
                className="w-full px-5 py-4 bg-gray-100 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-amber-200 resize-none"
              />
            </div>

            {/* SUBMIT BUTTON — EXACTLY LIKE IMAGE */}
            <div className="pt-6 text-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={status === "sending"}
                className="group relative inline-flex items-center bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold text-lg px-12 py-5 rounded-full shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              >
                <span className="relative z-10">
                  {status === "sending" ? "Sending..." : "Submit"}
                </span>
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                  className="ml-4 w-12 h-12 bg-amber-400 rounded-full flex items-center justify-center"
                >
                  <svg
                    className="w-6 h-6 text-emerald-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </motion.div>
              </motion.button>
            </div>

            {/* Status */}
            {status === "sent" && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-green-600 font-bold text-lg"
              >
                Message sent — thank you!
              </motion.p>
            )}
            {status === "error" && (
              <p className="text-center text-red-600 font-bold text-lg">
                Oops! Try again later.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
