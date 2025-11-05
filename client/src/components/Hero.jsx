import Minhaz from "../assets/Minhaz.png";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center my-12">
      <div>
        <div className="mb-4 text-sm text-gray-600">Hello There!</div>
        <h1 className="text-5xl font-bold leading-tight">
          I'm <span className="text-accent italic underline">Minhaz Reza,</span>
          <br />
          Product Designer <br />
          Based in Bangladesh.
        </h1>
        <p className="text-gray-500 mt-6 max-w-xl">
          I'm an experienced Product Designer with 2+ years in the field,
          collaborating with various companies and startups.
        </p>

        <div className="flex items-center gap-4 mt-8">
          <a
            href="/portfolio"
            className="btn-pill bg-primary text-white px-6 py-3 inline-flex items-center gap-3"
          >
            View My Portfolio <span className="ml-2">▶</span>
          </a>
          <button className="btn-pill border px-6 py-3">Hire Me</button>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="relative">
          <img
            src={Minhaz}
            alt="Portrait"
            className="rounded-full w-full object-cover"
          />
          {/* Add decorative elements with absolute positioning to match reference */}
        </div>
      </div>
    </section>
  );
}
