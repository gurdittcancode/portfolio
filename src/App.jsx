import './App.css';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center pt-10  px-5">
      <Hero />
      <Skills />
      <Projects />
    </div>
  );
  // https://www.iconfinder.com/icons/11120662/fi_brands_typescript_icon
}

export default App;
