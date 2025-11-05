export default function Navbar() {
  return (
    <header className="py-6">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="text-lg font-semibold">Minhaz.</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-gray-700">
          <li className="hover:text-accent">Home</li>
          <li>Services</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blogs</li>
          <li>Testimonials</li>
        </ul>

        <button className="btn-pill bg-white border border-primary text-primary shadow-md">
          Contact Me
        </button>
      </nav>
    </header>
  );
}
