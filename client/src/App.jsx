import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Tools from "./components/Tools";

export default function App() {
  return (
    <div>
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <Hero />
        <Services />
        <About />
        <Tools />
        <Projects />
        <ContactForm />
      </main>
    </div>
  );
}
