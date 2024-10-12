import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import React from "react";
const LazyTech = React.lazy(() => import("./components/Tech"));

function App() {
  return (
    <div className="w-full my-10 flex flex-col items-center">
      <Hero />
      <Experience />
      <Projects />
      <LazyTech />
      <Contact />
    </div>
  );
}

export default App;
