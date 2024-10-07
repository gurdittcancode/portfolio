import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Tech from "./components/Tech";

function App() {
  return (
    <div className="w-full my-10 flex flex-col items-center">
      <Hero />
      <Experience />
      <Projects />
      <Tech />
      <Contact />
    </div>
  );
}

export default App;
