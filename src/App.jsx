import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Certificates from "./components/Certificates";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
      delay: 0,
      easing: "ease-in-out"
    })
  }, [])
  return (
    <div className="bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Certificates />
      <Education />
      <Projects />
    </div>
  );
};

export default App;
